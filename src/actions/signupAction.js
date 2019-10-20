import AxiosWithAuth from '../components/Auth/axiosWithAuth';

export const CREATE = "CREATE";
export const CREATING = "CREATING";

export const createAccount = ((userInfo) => {

    return (dispatch) => {
            dispatch({
                type: CREATING
            });
        setTimeout(() => {
            AxiosWithAuth()
                .post("https://lifegpa-zach-christy.herokuapp.com/api/register", userInfo)
                .then(res => {
                    dispatch({
                        type: CREATE,
                        payload: res.data
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }, 1000)
    }
})
