import axios from 'axios'

const submitForm = async(url, formData,method,headers) => {
    
    try {
        const res = await axios({
            method,
            url,
            data: formData,
            headers
        })
        return res;
    } catch (err) {
        console.log(err.response.data);
        throw err;
    }

  
}

export default submitForm