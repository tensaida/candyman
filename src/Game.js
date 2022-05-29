import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import randomWords from 'random-words';
import Win from './components/Win';
import './App.css';

let selectedWord = randomWords();

function App() {
    const [contPlay, setContPlay] = useState(true);
    const [correct, setCorrect] = useState([]);
    const [wrong, setWrong] = useState([]);
    const [setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (contPlay && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correct.includes(letter)) {
                        setCorrect(currentLetters => [...currentLetters, letter]);
                    } else {
                        console.log(setShowNotification);
                    }
                } else {
                    if (!wrong.includes(letter)) {
                        setWrong(currentLetters => [...currentLetters, letter]);
                    } else {
                        console.log(setShowNotification);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correct, wrong, contPlay]);

    function playAgain() {
        setContPlay(true);
        setCorrect([]);
        setWrong([]);

        selectedWord = randomWords();
    }

    return (
        <>
            <Header />
            <div className="game-container">
                <Figure wrongLetters={wrong} />
            </div>
            {/*<Win correct={correct} wrongLetters={wrong} selectedWord={selectedWord} contPlay={contPlay} playAgain={playAgain} />*/}
        </>
    );
}

export default App;
