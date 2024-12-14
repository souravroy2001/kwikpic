import { useEffect, useState } from "react";
import axios from 'axios' 
import '../App.css'

export const Products = ()  =>{
    const url = 'https://fakestoreapi.in/api/products';
    const [apiData, setData] = useState([])
    async function fetchData(){
        try {
            const response = await axios.get(url);
            const data = response.data
            let arr = [];
            for(let key in data.products){
                arr.push(data.products[key])
            }
            setData(arr)
            console.log("Data response status", data.status)
            console.log("Data response status", data.message)

        } catch (error) {
            console.log("data fetching error", error)
        }
    }
    
    useEffect(()=>{
        fetchData()
    }, []);
    
    return (
        <>
        <div>
            <select name="" id="">
                <option value="">Filter</option>
                <option value="">Ascending order</option>
                <option value="">Descending order</option>
            </select>
        </div>
        <div id="main"> 
            {
               apiData.map((ele)=>{
                return(
                    <div key={ele.id} id="child">
                        <div>
                            <img src={ele.image} alt="" />
                        </div>
                        <div>
                            <p>{ele.price}</p>
                            <h2>{ele.title}</h2>
                            <p>{ele.brand}</p>
                        </div>
                    </div>
                )
               }) 
            }
        </div>
        </>
    )

}