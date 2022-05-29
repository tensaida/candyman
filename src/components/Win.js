import React, { useEffect } from 'react';

const Win = ({correct, wrong, selectedWord, contPlay, playAgain}) => {
    let playable = true;
        let status = 1;

        selectedWord.split('').forEach(letter => {
            if(!correct.includes(letter)){
                status = -1;
            }
        });

        // Check for lose
        if(wrong.length === 6) status = 0;
    if( status === 1 ) {
        alert('u won');
        playable = false;
    } else if( status === 0 ) {
        alert('u lost');
        alert(`...the word was: ${selectedWord}`);
        playable = false;
    }

    useEffect(() => {
        contPlay(playable);
    });

    return (
        <div>
                <button onClick={playAgain}>Play Again</button>
        </div>
    )
}

export default Win
