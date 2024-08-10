
import axios from 'axios';

const fetchItems = async (API_URL) => {
    try {
        const res = await axios.get(API_URL);
        return res.data
    }
    catch (error){
        console.log('error', error)
    }

}

export default fetchItems;