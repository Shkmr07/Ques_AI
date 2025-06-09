import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../toolkit/reducers/user.slice"
import projectReducer from "../toolkit/reducers/project.slice"
import episodeReducer from "../toolkit/reducers/episode.slice"

export const store = configureStore({
    reducer : {
        user : userReducer,
        project : projectReducer,
        episode : episodeReducer
    }
})