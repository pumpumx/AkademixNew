import axios from "axios";

const registerUser = async(formdata)=>{
   try {
     console.log("formdata")
     const response = axios.post("http://localhost:8000/api/users/v1/register" , formdata)
 
     return response.json()
 
   } catch (error) {
    console.log("Error while registering user" , error)
    return null;
   }
}



const loginUser = ()=>{

}

export {
    registerUser,
    loginUser
}