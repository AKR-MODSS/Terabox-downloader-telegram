const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://www.terabox.com/share/list?app_id=250528&shorturl={key}&root=1`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
