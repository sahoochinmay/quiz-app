import {QUIZ_START,QUIZ_NEXT , QUIZ_SUBMIT} from '../constant/quizConstant' 

export const startQuiz = () => dispatch =>{
    dispatch({
        type: QUIZ_START,
        payload: null
    })
}

export const nextQuiz = ({answers}) => dispatch =>{
    dispatch({
        type: QUIZ_NEXT,
        payload:answers
    })
}

export const submitQuiz = ({answers}) => dispatch =>{
    dispatch({
        type: QUIZ_SUBMIT,
        payload:answers
    })
}