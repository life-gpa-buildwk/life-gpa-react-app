import AxiosWithAuth from '../components/Auth/axiosWithAuth';

export const LOGIN = "LOGIN";
export const FETCHING = "FETCHING";
export const ISLOADING = "ISLOADING";

export const login = ((loginInfo) => {
    return (dispatch) => {
        dispatch({
            type: FETCHING
        });

        console.log("hi")
        setTimeout(() => {
            AxiosWithAuth()
                .post("https://lifegpa-zach-christy.herokuapp.com/api/login", loginInfo)
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('token', res.data.token)
                    dispatch({
                        type: LOGIN,
                        payload: res.data
                    })

                    // push to dashboard route
                })
                .catch(err => {
                    console.log(err);
                })
        }, 1000)
    }
})

export const isLoading = (value) => {
    return dispatch => {
        dispatch({
            type: ISLOADING,
            payload: value
        });
    }
}
