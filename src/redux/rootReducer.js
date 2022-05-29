import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: { incorrectGuess: 0, totalGuess: 0, word: '' },
    reducers: {
        getWord(state, action) {
            state.word = action.payload;
        },
        addIncorrectGuess(state, action) {
            state.incorrectGuess++;
        },
        addTotalGuess(state, action) {
            state.totalGuess++;
        },
        reset(state, action) {
            state.totalGuess = 0;
            state.incorrectGuess = 0;
        }
    }
})

export default gameSlice.reducer;