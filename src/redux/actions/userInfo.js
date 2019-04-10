
export const GET_USER_INFO = "userInfo/GET_USER_INFO";

export const getUserInfo = (data) => {
    return dispatch=>{
        dispatch({
            type: GET_USER_INFO,
            payload:data
        });
    }
}