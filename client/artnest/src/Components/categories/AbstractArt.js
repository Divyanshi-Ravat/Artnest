import React from "react";
import Home from "../home/Home";
import "./abstarctart.css";
import Card from "../cards/Card";
import logo from "../../assets/artnest_logo.png";
import Divider from '@mui/material/Divider';
import { useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, getProductByTitle } from "../../redux/product/actions";
import axios from 'axios'
//import { getProducts } from "../../redux/product/actions";


function AbstractArt() {
  //const products = useSelector((state)=>(state.))
  //const products = useSelector((state) => state.product.products);
  //console.log("product names:", products.map((product) => product.imgUrl));
  
  const [products, setproducts] = useState([])
  

  const handle = async(e)=>{

    const { data } = await axios.get("http://localhost:8080/api/all/getAllProducts")
    console.log("result of access: ", data)
    setproducts(data);

  }

  function card_object(val){
    
    return(
      <>
      
      <Card className="card"
      imgsrc={val.filePath}
      title={val.title}
      sname={val.category}
    />
      </>
     

    )
   
  }
  
  return (
    <>
      <div className="logo_block">
        <div className="img">
          <img src={logo} alt="artnest_logo" />
          <text className="dancing-script-artnest ">ArtNest</text>
        </div>
      </div>
      <Divider/>
      <button onClick={handle}>submit</button>
      <div className="quote">
         <h3>Abstract Art</h3>
        <br/>
        <p>"Let your imagination dance with the colors and shapes. This art is a gateway to your inner world."</p>
        <Divider/>

      </div>
      <div className="grid">
        {products.map(card_object)} 
      </div>

     
    </>
  );
}

export default AbstractArt;
