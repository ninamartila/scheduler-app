import store from '..'
import {
    SCHEDULER_ERROR,
    SCHEDULER_LOADING,
    SCHEDULER_SUCCESS,
} from './actionType'

export function setSchedulerLoading(payload) {
    return {
        type: SCHEDULER_LOADING,
        payload
    }
}

export function setSchedulerSuccess(payload) {
    return {
        type: SCHEDULER_SUCCESS,
        payload
    }
}

export function setSchedulerError(payload) {
    return {
        type: SCHEDULER_ERROR,
        payload
    }
}