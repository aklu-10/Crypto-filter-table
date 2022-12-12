import Table from "./Table/Table";
import './Crypto.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Crypto() {

    let [coins,updateCoins]=useState("");
    let [query,updateQuery]=useState("");

    useEffect(()=>
    {
        (async function(){ 
         await axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=EUR")
        .then(res=>updateCoins(res.data.coins))
        })()
    },[])

    return ( 
        <>
        <div className="crypto">
            <input className="margin" onChange={(e)=>updateQuery(e.target.value)} type="text" placeholder="Search by coin,price or ranking" />
            <Table coins={coins} query={query} />
        </div>

        </>
     );
}

export default Crypto;
