import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    reducers: {
        changeName: (state, action) => state.name = action.payload,
        changeAvatar: (state, action) => state.avatar = action.payload
    }
})

// type: user/changeName type: user/changeAvatar

export const {changeName, changeAvatar} = userSlice.actions
export default userSlice.reducer
