import React from "react";
import SidebarLeft from "../SidebarLeft";
import SidebarRight from "../SidebarRight";
import "./products.css";
import Divider from "@mui/material/Divider";
import photo from "../../../assets/ColorfulGirl.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../../redux/product/actions";
import { Link } from "react-router-dom";

function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [products]);

  const handledelete = (p) => {
    const { title } = p;
    dispatch(deleteProduct(title));
  };

  

  

  const onQuantityChange = (e) => {
    console.log("new: ", e);
  };
  return (
    <div className="products">
      <SidebarLeft />

      <div className="mainContent">
        <div className="heading">Products</div>
        <Divider />
        <div className="productsRow">
          <table>
            <tbody>
              {products.length > 0 &&
                products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.filePath} alt="" />
                    </td>
                    <td>{product.title}</td>
                    <td>
                      <button ><Link to={`/admin/editProduct/${product.title}`}>edit</Link></button>
                     
                    </td>
                    <td>
                      {product.quantity}
                     
                    </td>
                    <td>
                      <button onClick={() => handledelete(product)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              {products.length === 0 && ( // Show message if no products
                <tr>
                  <td colSpan="4">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="addProduct">
          <Link to="/admin/addProduct" className="add-link">
            Add Product
          </Link>
        </div>
      </div>

      <SidebarRight />
    </div>
  );
}

export default Products;
