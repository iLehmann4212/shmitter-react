import {CHANGE_AVATAR, CHANGE_FOLLOWERS, CHANGE_FOLLOWING, CHANGE_NAME} from "../actions/userAction.js";

// typeof State = {
//     user: {
//         name: string,
//         avatar: string
//     },
//     stats: {
//         followers: number,
//         following: number
//     }
// }


export const shmitterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        case CHANGE_FOLLOWERS:
            return {...state, stats: {...state.stats, followers: Math.max(0, state.stats.followers + action.payload)}};
        case CHANGE_FOLLOWING:
            return {...state,stats: {...state.stats, following: Math.max(0, state.stats.following + action.payload)}};
        default:
            return state;
    }
}
