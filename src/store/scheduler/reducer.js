import {
    SCHEDULER_ERROR,
    SCHEDULER_LOADING,
    SCHEDULER_SUCCESS
} from './actionType'

const initialState = {
    isDataScheduler: [],
    isLoadingScheduler: false,
    isErrorScheduler: null,
}

export default function reducerScheduler(state = initialState, action) {
    switch (action.type) {
        case SCHEDULER_LOADING:
            return {
                ...state,
                isLoadingScheduler: action.payload
            }
        case SCHEDULER_SUCCESS:
            return {
                ...state,
                isDataScheduler: action.payload,
                nextUrl,
            }
        case SCHEDULER_ERROR:
            return {
                ...state,
                isErrorScheduler: action.payload
            }

        default:
            return state
    }
}