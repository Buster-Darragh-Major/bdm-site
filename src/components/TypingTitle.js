import React from 'react';

const TEXT_CURSOR = "_";
const CURSOR_PERIOD = 500;
const DELETE_PERIOD = 40;
const TYPE_PERIOD_MIN = 50;
const TYPE_PERIOD_MAX = 200;

class TypingTitle extends React.Component {
    constructor(props) {
        super();
        this.titles = props.titles;
        this.titleHangTime = props.titleHangTime;
        this.state = {
            display: "",
            currentWord : null,
            isTyping: true, // false for deleting
            tickTimerID: null,
            showCursor: true
        };
    }

    componentDidMount() {
        this.tick();
        this.turnOffCursorFlash();
    }

    turnOnCursorFlash() {
        this.cursorTimerID = setInterval(() => {
            this.setState((state) => { return { showCursor: !state.showCursor }; });
        }, CURSOR_PERIOD);
    }

    turnOffCursorFlash() {
        clearInterval(this.cursorTimerID);
        this.setState({ showCursor: true });
    }

    componentWillUnmount() {
        clearTimeout(this.tickTimerID);
        this.turnOffCursorFlash();
    }

    chooseWord() {
        return this.titles[0];
    }

    typeWord(currentLength, currentWord) {
        return currentWord.substring(0, Math.min(currentWord.length, currentLength + 1));
    }

    deleteWord(currentLength, currentWord) {
        return currentWord.substring(0, Math.max(0, currentLength - 1));
    }

    typePeriodRandom() {
        return Math.floor(Math.random() * (TYPE_PERIOD_MAX - TYPE_PERIOD_MIN + 1) + TYPE_PERIOD_MIN);
    }

    newTick(period, turnOffCursor) {
        this.tickTimerID = setTimeout(() => {
            this.tickTimerID = null; 
            this.tick();
            if (turnOffCursor) {
                this.turnOffCursorFlash();
            }
        }, period);
    }

    tick() {
        this.setState((state) => {
            // We check because in strict mode react runs setState calls twice.. am I right??
            // Store in object as opposed to state because state tier ID would be replicated,
            // causing multiple calls to api.
            let tickTimerID = this.tickTimerID;
            if (tickTimerID) {
                return;
            }
            let currentWord = state.currentWord;
            let display = state.display; 
            let isTyping = state.isTyping;

            if (!currentWord) {
                currentWord = this.chooseWord();
            }

            if (isTyping) {
                display = this.typeWord(display.length, currentWord);
                if (display === currentWord) {
                    this.turnOnCursorFlash();
                    this.newTick(this.props.titleHangTime, true);
                    isTyping = false;
                } else {
                    this.newTick(this.typePeriodRandom());
                }
            } else {
                display = this.deleteWord(display.length, currentWord);
                if (!display) {
                    this.turnOnCursorFlash();
                    this.newTick(this.props.emptyHangTime, true);
                    isTyping = true;
                } else {
                    this.newTick(DELETE_PERIOD);
                }
            }

            return { 
                display: display,
                isTyping: isTyping,
                currentWord: currentWord
            };
        });
    }

    render() {
        return (
            <span className="typing-title">{this.state.display}{this.state.showCursor ? TEXT_CURSOR : " "}</span>
        );
    }
}

export default TypingTitle