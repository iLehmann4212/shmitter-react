import {createSlice} from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0,
    },
    reducers: {
        changeFollowers: (state, action) => state.followers = Math.max(0, state.followers + action.payload),
        changeFollowing: (state, action) => state.following = Math.max(0, state.following + action.payload)
    }
})

export const {changeFollowers, changeFollowing} = statsSlice.actions
export default statsSlice.reducer

