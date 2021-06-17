import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    threadId: null,
    threadName: null,
};


export const threadSlice = createSlice({
    name: 'thread',
    initialState,

    reducers: {
        setThread: (state, action) => {
            state.threadId = action.payload.threadId;
            state.threadName = action.payload.threadName;
        },

    }
});

export const { setThread } = threadSlice.actions;

export const selectThreadId = (state) => state.thread.thread;
export const selectThreadName = (state) => state.thread.threadName;

export default threadSlice.reducer;
