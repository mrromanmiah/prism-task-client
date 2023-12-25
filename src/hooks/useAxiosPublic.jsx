import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://prism-task-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;