import { GET_USER_INFO } from 'actions/userInfo';


const initState = {
    list:[]
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
}