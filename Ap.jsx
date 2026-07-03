import { useState } from "react";

function Ap({name,pass}){
let[count,setCount]=useState(0);
let get=()=>{
    setCount(count+1);
}
return(
    <>
    <div>
        <h2>username:{name}</h2>
        <h4>password:{pass}</h4>
    </div>
    <h1>Aishwarya Deatils</h1>
    <a href="http://localhost:5173/">React Link</a>
    <a href="https://github.com/Aishwarya-kk">Git hub</a>
    <a href="https://www.linkedin.com/in/aishwarya-k-842a68352/">Linkdin</a>
    </>
)

}

export default Ap;