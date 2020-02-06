import usersReducer from './users-reducer';
import userPostsReducer from './user-posts-reducer';
import commentsReducer from './comments-reducer'
import postReducer from './post-reducer'
import {combineReducers } from 'redux';


const rootReducer = combineReducers({
    users: usersReducer,
    userPosts: userPostsReducer,
    comments: commentsReducer,
    post: postReducer
})

export default rootReducer