import AxiosWithAuth from '../components/Auth/axiosWithAuth';

export const LOGIN = "LOGIN";
export const FETCHING = "FETCHING";

export const login = ((loginInfo) => {
    return (dispatch) => {
        dispatch({ type: FETCHING });

        setTimeout(() => {
            AxiosWithAuth()
                .get("https://lifegpa-zach-christy.herokuapp.com/api/login", loginInfo)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    dispatch({ type: LOGIN, payload: res.data })
                })
                .catch(err => {
                    console.log(err);
                })
        }, 1000)
    }
})