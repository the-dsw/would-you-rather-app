import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { handleInitialData } from "./shared";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleSaveQuestion (info) {
    return dispatch => {
        dispatch(showLoading())

        return saveQuestion({
            ...info,
            author: info.authedUser
        })
        .then(res => dispatch(handleInitialData(res.author)))
        .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveQuestionAnswer (info) {
    return dispatch => {
        dispatch(showLoading())

        return saveQuestionAnswer({
            ...info
        })
        .then(() => dispatch(handleInitialData(info.authedUser)))
        .then(() => dispatch(hideLoading()))

    }
}