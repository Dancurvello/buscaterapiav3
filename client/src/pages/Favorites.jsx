
import React from "react";
import { Navbar } from "../components/navbar";
import Axios from 'axios'
import { useEffect } from "react";


const Favorites = () => {

    Axios.defaults.withCredentials = true;

    useEffect(()=> {
        Axios.get("http://localhost:3001/login").then ((response)=>{
            console.log(response);
        })
    }, [])

    return (
        <>
        <div className="App">
         <Navbar />
        </div>
        <h1> Seus favoritos</h1>
        <label> Profissional: Daniel Curvello</label>
        <br></br>
        <br></br>
        <label> Idade: 23</label>

        </>
        
    )
}

export default Favorites