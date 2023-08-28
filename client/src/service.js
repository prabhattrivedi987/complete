import axios from 'axios';


axios.get("http://localhost:8080/all")
.then((Response)=>{
    console.log(Response.data);
}).catch((err)=>{
    console.log(err);
})