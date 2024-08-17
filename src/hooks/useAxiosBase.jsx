import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://product-finder-server-one.vercel.app/',
})

const useAxiosBase = () => {
    return axiosBase;
};

export default useAxiosBase;