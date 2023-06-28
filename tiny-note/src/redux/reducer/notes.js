
const initialState = {
    isLoading: false,
    isError: false,
    data: [],
}

const notes = (state = initialState, action) => {
    let tempData = state;
    switch (action.type) {


        case 'GET_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }



        case 'INSERT_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
            };
        case 'INSERT_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'INSERT_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: [...action.payload.data, ...state.data]
            };


        case 'UPDATE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
            };
        case 'UPDATE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'UPDATE_NOTES_FULFILLED':
            for (let i = 0; i < tempData.data.length; i++) {
                if (tempData.data[i].id == action.payload.data.id) {
                    tempData.data[i].title = action.payload.data.title;
                    tempData.data[i].note = action.payload.data.note;
                }
            }
            return {
                ...state,
                isLoading: false,
            };



        case 'DELETE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
            };
        case 'DELETE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'DELETE_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: [...state.data.filter(data => data.id != action.payload.data.id)]
            };



        default:
            return state;
    }
}


export default notes