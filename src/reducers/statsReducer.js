import {CHANGE_FOLLOWERS, CHANGE_FOLLOWING} from "../actions/userAction.js";
const defaultState = {
    followers: 0,
    following: 0
}

export function statsReducer(state=defaultState, action) {
    switch (action.type) {
        case CHANGE_FOLLOWERS:
            return {...state,followers: Math.max(0, state.followers + action.payload)};
        case CHANGE_FOLLOWING:
            return {...state,following: Math.max(0, state.following + action.payload)};
        default:
            return state;
    }
}