import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { products } from "../../data/data";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import "../../styles/products.css";

function Products() {
  const [productData, setProductData] = useState(products);

  const columns: GridColDef<(typeof productData)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Name",
      width: 260,
      renderCell: (params) => {
        return (
          <>
            <Link to="#">
              <div className="userList-user">
                <img src={params.row.img} className="userList-image" />
                {params.row.title}
              </div>
              <button className="userList-edit">Edit</button>
            </Link>
          </>
        );
      },
    },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="useList-action">
            <Link to={`/product/${params.row.id}`}>
              <button className="userList-edit-user">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userList-delete-user"
              onClick={() => productDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const productDelete = (productId: number) => {
    setProductData(productData.filter((product) => product.id !== productId));
  };

  return (
    <div className="userList">
      <DataGrid
        rows={productData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        disableRowSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}

export default Products;
