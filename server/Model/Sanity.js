const sanity_client = require("@sanity/client");
require("dotenv").config();
/* Creatiion du client en variable statique */

const client = sanity_client.createClient({
    projectId : process.env.SANITY_PROJECT_ID,
    dataset : "production",
    apiVersion : "2022-02-01",
    useCdn : true,
    token : process.env.SANITY_TOKEN
})

const Get_last_contact_data = (last_send_id) => {
    const query = `*[_type == "contact"]`;
    let data_rx = {};
    client.fetch(query)
    .then(data => {
        data_rx = data;
    })
    .catch( e  => console.log(error));
    
    if(last_send_id != data_rx[0]._id){
        last_send_id = data_rx[0]._id
        return data_rx[0];
    }
}
module.exports = {
    client,
    Get_last_contact_data
};