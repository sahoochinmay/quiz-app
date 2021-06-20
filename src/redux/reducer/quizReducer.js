import {QUIZ_START , QUIZ_RESET , QUIZ_NEXT,QUIZ_SUBMIT} from '../constant/quizConstant'

const initialState = {
    step : 1,
    activeQuestion: 0,
    answers: []
}

const quizReducer = (state = initialState , action) =>{
    const {type , payload} = action
    switch (type) {
        case QUIZ_START:
            return {
                ...state,step:2
            }
        case QUIZ_NEXT:
            return{
                ...state,answers: [...payload],activeQuestion: state?.activeQuestion+1
            }
        case QUIZ_SUBMIT:
            return{
                ...state,step:3,answers:[...payload]
            }
        default:
            return state;
    }
}

export default quizReducer;