import axios from "axios"
import { useState } from "react"


const App = () => {
    
  
  let data 

  const [title, setTitle] = useState('')
  const [explanation, setExplanation] = useState('')
  const [image, setImage] = useState('')
  
 

  const getPic = async () =>{
    try {
      const res = await axios.get('http://localhost:8080/')
      data = res.data
      setTitle(data.title)
      setImage(data.hdurl)
      setExplanation(data.explanation)
    } catch (error) {
      console.log(error.message);
    }
  }





  return ( 
    <div>
        <div className=" container mx-auto mt-2">
        <img src= {image} alt="Nasa Image of the day"  className="object-contain mx-auto h-2/3 rounded-3xl"/>
        </div>

        <div className="container mx-auto mt-4">
          <p className="font-poppins text-center">{title}</p>
        </div>

        <div className="container mx-auto">
          <p className="font-poppins text-center">{explanation}</p>
        </div>


        <div className="container flex items-center justify-center mt-6">
            <button className="bg-teal-100 p-4  m -4 rounded-full text-xl font-poppins" onClick={getPic}> Nasa Pic of the day </button>
         </div>

        
    </div>
   );
}
 
export default App;