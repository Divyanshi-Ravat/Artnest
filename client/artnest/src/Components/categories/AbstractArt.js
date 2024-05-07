import React from "react";

import "./abstarctart.css";
import Card from "../cards/Card";
import logo from "../../assets/artnest_logo.png";
import Divider from '@mui/material/Divider';
import { useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, getByCategory, getProductByTitle, getProducts } from "../../redux/product/actions";
import axios from 'axios'
import { Link } from "react-router-dom";
//import { getProducts } from "../../redux/product/actions";


function AbstractArt() {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.product.categoryProducts);

  useEffect(() => {
    
    const res = dispatch(getByCategory("Abstract Art"))
   
    console.log(products)
  }, [])
  

  const handle = (e)=>{
    dispatch(getProducts())
    // const response = await axios.get("http://localhost:8080/api/all/getAllProducts")
    // console.log("result of access: ", response)

    console.log("products in ad", products)



  }

  function card_object(val){
    
    return(
      <>
      
      <Card className="card"
      imgsrc={val.filePath}
      title={val.title}
      category={val.category.name}
      price={val.price}
    />
      </>
     

    )
   
  }
  
  return (
    <>
      <div className="abstract-logo_block">
        
          <img src={logo} alt="artnest_logo" />
          <text className="dancing-script-artnest "><Link className=".link" to="/">ArtNest</Link></text>
        
      </div>
      <Divider/>
      <div className="quote">
         <h3>Abstract Art</h3>
        <br/>
        <p>"Let your imagination dance with the colors and shapes. This art is a gateway to your inner world."</p>
        <Divider/>

      </div>
      <div className="card-grid">
        {products.map(card_object)}   
      </div>

     
    </>
  );
}

export default AbstractArt;
