import axios from 'axios'


let axiosInstance = axios.create({
    headers : {

        'Content-Type' : 'application/json',
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
})

const resetAxiosInstance = () => {
    axiosInstance = axios.create({
        headers : {
    
            'Content-Type' : 'application/json',
            'authorization' : `Bearer ${localStorage.getItem('token')}`
        }
    })
}


export { axiosInstance, resetAxiosInstance };