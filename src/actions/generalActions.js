import axios from "axios";

const url = 'http://192.168.0.9:3333/'

export const loadData = () => async (dispatch) => {
    dispatch({type: 'LOADING'})
    
    await axios.post('http://192.168.0.9:3333/web/getDataHome')
        .then(res => {
            let response = res.data
        
            if(response.status === 200){
                dispatch({
                    type: 'LOAD_DATA',
                    payload: response.dataHome
                })
            }else if(response.status === 400){
                dispatch({
                    type: 'ERROR',
                    payload: 'Ha ocurrido un error, intentelo más tarde'
                })
            }
        })
        .catch(error => {
            dispatch({
                type: 'ERROR',
                payload: 'Ha ocurrido un error, intentelo más tarde'
            })
        })
}

export const setSite = (site) => async (dispatch) => {
    dispatch({
        type: 'SET_SITE',
        payload: site
    })
}

export const setFilterCategory = (filterCategory) => async (dispatch) => {
    dispatch({
        type: 'SET_FILTER_CATEGORY',
        payload: filterCategory
    })
}

export const setFilterGeneral = (filterGeneral) => async (dispatch) => {
    dispatch({
        type: 'SET_FIlTER_GENERAL',
        payload: filterGeneral
    })
}

export const setShowModal = (showModal) => async (dispatch) => {
    dispatch({
        type: 'SET_SHOW_MODAL',
        payload: showModal
    })
}