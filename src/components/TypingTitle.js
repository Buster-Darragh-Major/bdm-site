import React from 'react';

const TEXT_CURSOR = "_";
const DELETE_PERIOD = 40;
const TYPE_PERIOD_MIN = 50;
const TYPE_PERIOD_MAX = 200;

class TypingTitle extends React.Component {
    constructor(props) {
        super();
        this.titles = props.titles;
        this.titleHangTime = props.titleHangTime;
        this.state = {
            preDisplay: "",
            display: TEXT_CURSOR,
            currentWord : null,
            isTyping: true, // false for deleting
            timerID: null
        };
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearTimeout(this.timerID);
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

    newTick(period) {
        this.timerID = setTimeout(() => {
            this.timerID = null; 
            this.tick()
        }, period);
    }

    tick() {
        this.setState((state) => {
            // We check because in strict mode react runs setState calls twice.. am I right??
            // Store in object as opposed to state because state tier ID would be replicated,
            // causing multiple calls to api.
            let timerID = this.timerID;
            if (timerID) {
                return;
            }
            let currentWord = state.currentWord;
            let preDisplay = state.preDisplay; 
            let isTyping = state.isTyping;

            if (!currentWord) {
                currentWord = this.chooseWord();
            }

            if (isTyping) {
                preDisplay = this.typeWord(preDisplay.length, currentWord);
                if (preDisplay === currentWord) {
                    this.newTick(this.props.titleHangTime);
                    isTyping = false;
                } else {
                    this.newTick(this.typePeriodRandom());
                }
            } else {
                preDisplay = this.deleteWord(preDisplay.length, currentWord);
                if (!preDisplay) {
                    this.newTick(this.props.emptyHangTime);
                    isTyping = true;
                } else {
                    this.newTick(DELETE_PERIOD);
                }
            }

            return { 
                preDisplay: preDisplay,
                display: preDisplay + TEXT_CURSOR,
                isTyping: isTyping,
                currentWord: currentWord
            };
        });
    }

    render() {
        return (
            <span className="typing-title">{this.state.display}</span>
        );
    }
}

export default TypingTitle