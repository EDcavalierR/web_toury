const INITIAL_STATE = {
    loading: false,
    data: [],
    error: '',
    site: {},
    filterCategory: -1,
    filterGeneral: '',
    showModal: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true}

        case 'LOAD_DATA':
            return {...state, data: action.payload, loading: false, error: ''}

        case 'ERROR':
            return {...state, error: action.payload, loading: false}

        case 'SET_SITE':
            return {...state, site: action.payload}
        case 'SET_FILTER_CATEGORY':
            return {...state, filterCategory: action.payload}
        case 'SET_FIlTER_GENERAL':
            return {...state, filterGeneral: action.payload}
        case 'SET_SHOW_MODAL':
            return {...state, showModal: action.payload}
        default:
            return state;
    }
}