import AxiosWithAuth from '../components/Auth/axiosWithAuth';

export const LOGIN = "LOGIN";
export const onChange = "ONCHANGE"
export

export const login = ((username, password) => {
    return (dispatch) => {
        setTimeout(() => {
            AxiosWithAuth()
            .get("someBack end")
            .then(res => {

            })
        },1000)
    }
})