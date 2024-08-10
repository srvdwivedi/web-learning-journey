
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const fetchItems = async () => {
    try {
        const res = await axios.get(API_URL);
        return res.data
    }
    catch (error){
        console.log('error', error)
    }

}

export default fetchItems;