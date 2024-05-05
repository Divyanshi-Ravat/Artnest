import React from "react";
import SidebarLeft from "../SidebarLeft";
import SidebarRight from "../SidebarRight";
import "./products.css";
import Divider from "@mui/material/Divider";
import photo from '../../../assets/ColorfulGirl.png'
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/product/actions";
import { Link } from "react-router-dom";

function Products() {
  const products = useSelector((state) => state.product.products)
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getProducts())
  }, [])
  
  
  return (
    <div className="products">
      <SidebarLeft />

      <div className="mainContent">
        <div className="heading">Products</div>
        <Divider />
        <div className="productsRow">
            <table>
            <tbody>
              {products.length > 0 && ( // Check if products exist
                products.map((product) => (
                  <tr key={product.id}> {/* Use a unique key for each product */}
                    <td>
                      <img src={product.filePath} alt="" />
                    </td>
                    <td>{product.title}</td> {/* Access product properties here */}
                    <td>{product.quantity}</td> {/* Access product properties here */}
                    <td><button>Delete</button></td> {/* Implement delete functionality */}
                  </tr>
                ))
              )}
              {products.length === 0 && ( // Show message if no products
                <tr>
                  <td colSpan="4">No products found.</td>
                </tr>
              )}
            </tbody>
            
              
             
             
              
            </table>
          
        </div>
      <div className="addProduct">
          <Link  to="/admin/addProduct" className="add-link" >Add Product</Link>
      </div>
      </div>

      <SidebarRight />
    </div>
  );
}

export default Products;
