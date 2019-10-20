import AxiosWithAuth from '../components/Auth/axiosWithAuth';
import axios from "axios"
export const CREATE = "CREATE";
export const CREATING = "CREATING";

export const createAccount = ((userInfo) => {
    return (dispatch) => {
        dispatch({
            type: CREATING
        });
        setTimeout(() => {
            axios.post("https://lifegpa-zach-christy.herokuapp.com/api/register", userInfo)
                .then(res => {
                    console.log(res.data)
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