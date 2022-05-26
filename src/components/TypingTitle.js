import React from 'react';

const TEXT_CURSOR = "_";
const DELETE_PERIOD = 100;
const TYPE_PERIOD_MIN = 50;
const TYPE_PERIOD_MAX = 1300;

class TypingTitle extends React.Component {
    constructor(props) {
        super();
        this.titles = props.titles;
        this.titleHangTime = props.titleHangTime;
        this.state = {
            display: "",
            currentWord : null,
            isTyping: true // false for deleting
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), TYPE_PERIOD_MIN);
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

    tick() {
        this.setState((state) => {
            let currentWord = state.currentWord;
            let display = state.display; 
            let isTyping = state.isTyping;

            if (!currentWord) {
                currentWord = this.chooseWord();
            }

            if (isTyping) {
                display = this.typeWord(display.length, currentWord);
                if (display === currentWord) {
                    // this.timerID = setTimeout(() => {
                    //     this.tick()
                    // }, this.props.titleHangTime);
                    isTyping = false;
                }
            } else {
                display = this.deleteWord(display.length, currentWord);
                if (!display) {
                    // this.timerID = setTimeout(() => {
                    //     this.tick()
                    // }, this.props.titleHangTime);
                    isTyping = true;
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
            <span className="typing-title">{this.state.display}</span>
        );
    }
}

export default TypingTitle