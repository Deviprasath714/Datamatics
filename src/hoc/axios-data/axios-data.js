import axios from 'axios';

const instance = axios.create({
    baseURL:'http://dummy.restapiexample.com/api/v1/employees'
});

export default instance;