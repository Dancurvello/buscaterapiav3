
import React, { useState } from 'react';
import SelectSpecialty from "../components/body/selectSpecialty";
import { Navbar } from "../components/navbar";
import Axios from 'axios'
import { useEffect } from "react";


const Home = () => {

    Axios.defaults.withCredentials = true;

    useEffect(()=> {
        Axios.get("http://localhost:3001/login").then ((response)=>{
            if (response.data.loggedIn === true) {
                console.log(response);
                setLoginStatus("Logado")

            } else {
                setLoginStatus("Deslogado")
                console.log(response);
            }
            
            
        })
    }, [])

    const [loginStatus, setLoginStatus] = useState('');

    return (
        <>
        <div className="App">
         <Navbar />
        </div>
        <br></br>
        <br></br>
        <br></br>
      
        <h1> Pagina inicial</h1>
        <br></br>
                
        <br></br>
        <SelectSpecialty/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {loginStatus && <h1>{loginStatus}</h1>} 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Fugiat commodi debitis ab aliquam dolorem minima, illum vel, 
        illo distinctio fuga voluptates repellendus corrupti 
        neque recusandae laborum. Similique consequatur fugit 
        illo.
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Natus ea ex fugit necessitatibus harum assumenda quas tempore 
        ducimus, vero laborum voluptas fuga aliquam exercitationem, id 
        nam. Sapiente laudantium temporibus quae.
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Natus ea ex fugit necessitatibus harum assumenda quas tempore 
        ducimus, vero laborum voluptas fuga aliquam exercitationem, id 
        nam. Sapiente laudantium temporibus quae.
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        </>
        
    )
}

export default Home