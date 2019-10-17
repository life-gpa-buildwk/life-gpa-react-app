import Axios from 'axios';

export const AxiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return Axios.create({
        headers: {
            'Content-type': 'application/json',
            'Authorization': token
        }
    })
}