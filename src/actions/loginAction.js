import AxiosWithAuth from '../components/Auth/axiosWithAuth';

export const LOGIN = "LOGIN";
export const FETCHING = "FETCHING";

export const login = ((loginInfo) => {
    return (dispatch) => {
            dispatch({
                type: FETCHING
            });

        setTimeout(() => {
            AxiosWithAuth()
            .get("someBack end", loginInfo)
            .then(res => {
                dispatch({type:LOGIN, payload:res.data})
            })
            .catch(err => {
                console.log(err);
            })
        },1000)
    }
})

