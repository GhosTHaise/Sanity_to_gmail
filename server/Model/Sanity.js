const sanity_client = require("@sanity/client");
const fs = require("fs");
require("dotenv").config();
/* Creatiion du client en variable statique */

const writeFile = (_text) => {
    fs.writeFileSync("./id_store.ghost",_text,(err)=>{
        console.log("Unable to save data :"+err);
    });
}

const client = sanity_client.createClient({
    projectId : process.env.SANITY_PROJECT_ID,
    dataset : "production",
    apiVersion : "2022-02-01",
    useCdn : true,
    token : process.env.SANITY_TOKEN
})

const Get_last_contact_data = async () => {
    const query = `*[_type == "contact"]`;
    try{
        const data = await client.fetch(query);
        if(data[0]){
            writeFile(data[0]?._id) ;
            return data[0];
        }
    }catch( e ){
        console.log(e);
    }
}
module.exports = {
    client,
    Get_last_contact_data
};