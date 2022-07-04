import "./TypingTitle.scss";
import React from 'react';

const TEXT_CURSOR = "_";
const CURSOR_PERIOD = 500;
const DELETE_PERIOD = 40;
const TYPE_PERIOD_MIN = 70;
const TYPE_PERIOD_MAX = 200;
const MISTYPE_PERIOD_MIN = 300;
const MISTYPE_PERIOD_MAX = 600;
const MISTYPE_LIKELIHOOD = 0.05;

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
            showCursor: true,
            mistype: null,
            deleteMistype: false
        };
    }

    componentDidMount() {
        this.tick();
        this.turnOffCursorFlash();
    }

    componentWillUnmount() {
        clearTimeout(this.tickTimerID);
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

    chooseWord(currentWord) {
        var otherTitles = currentWord 
            ? this.titles.filter(title => title !== currentWord)
            : this.titles;
        return otherTitles[Math.floor(Math.random()*otherTitles.length)];
    }

    typePeriodRandom() {
        return Math.floor(Math.random() * (TYPE_PERIOD_MAX - TYPE_PERIOD_MIN + 1) + TYPE_PERIOD_MIN);
    }

    mistypePeriodRandom() {
        return Math.floor(Math.random() * (MISTYPE_PERIOD_MAX - MISTYPE_PERIOD_MIN + 1) + MISTYPE_PERIOD_MIN);
    }

    mistype() {
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        return characters[Math.floor(Math.random()*characters.length)];
    }

    newTick(period, turnOffCursor) {
        if (this.tickTimerID) {
            return;
        }
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
            let mistype = state.mistype;
            let deleteMistype = state.deleteMistype;

            if (!currentWord) {
                currentWord = this.chooseWord(currentWord);
            }

            if (isTyping && !deleteMistype) {
                if (mistype) {
                    display += mistype;
                    mistype = null;
                    deleteMistype = true;
                    this.newTick(this.mistypePeriodRandom(), true);
                } else {
                    mistype = Math.random() < MISTYPE_LIKELIHOOD ? this.mistype() : null;
                    display = currentWord.substring(0, Math.min(currentWord.length, display.length + 1));
                    if (display === currentWord) {
                        this.turnOnCursorFlash();
                        this.newTick(this.props.titleHangTime, true);
                        isTyping = false;
                    } else {
                        this.newTick(this.typePeriodRandom());
                    }
                }
            } else {
                display = currentWord.substring(0, Math.max(0, display.length - 1));
                if (!display) {
                    this.turnOnCursorFlash();
                    this.newTick(this.props.emptyHangTime, true);
                    currentWord = this.chooseWord(currentWord);
                    isTyping = true;
                } else {
                    this.newTick(deleteMistype ? this.typePeriodRandom() : DELETE_PERIOD);
                }
                deleteMistype = false;
            }

            return { 
                display: display,
                isTyping: isTyping,
                currentWord: currentWord,
                mistype: mistype,
                deleteMistype: deleteMistype
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