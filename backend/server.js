const express =  require('express')
const app = express()
const port = 8080
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()
app.use(cors())


let data  


const getNasaPhotoOfTheDay = async () =>{

    const config = {
        method : 'GET',
        url : `https://api.nasa.gov/planetary/apod`,
        params : {
         api_key : process.env.NASA_API_KEY,
        }

    }

    try {
        const res = await axios.request(config);
        data = res.data
    } catch (error) {
        console.log(error)
    }

    
}

getNasaPhotoOfTheDay()

app.get('/', (req,res)=>{
    // Sending This is the home page! in the page
    res.json(data);
  });

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})


