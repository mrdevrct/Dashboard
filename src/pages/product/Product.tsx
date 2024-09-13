import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productsData } from "../../data/data";
import PublishIcon from "@mui/icons-material/Publish";
import "../../styles/product.css";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/new-product">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In Month" data={productsData} dataKey="sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59dZ4dE4ytFCQrGcAUY8ZK6ZlHQWTts_KKw&s"
              className="productInfoImg"
            />
            <span className="productName">Dell Laptop </span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID :</div>
              <div className="productInfoValue">123</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Name :</div>
              <div className="productInfoValue">Dell Laptop</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Sales :</div>
              <div className="productInfoValue">$90000</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Active :</div>
              <div className="productInfoValue">yes</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">In Store :</div>
              <div className="productInfoValue">no</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Dell Laptop" />

            <label>In Stock</label>
            <select id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>

            <label>Active</label>
            <select id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUploader">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59dZ4dE4ytFCQrGcAUY8ZK6ZlHQWTts_KKw&s"
                className="productUploaderImg"
                alt=""
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>

            <button className="productButton">Upload (edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
