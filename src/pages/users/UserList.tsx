import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data/data";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import "../../styles/userList.css";

function UserList() {
  const [userData, setUserData] = useState(userRows);

  const columns: GridColDef<(typeof userData)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 260,
      renderCell: (params) => {
        return (
          <>
            <Link to="#">
              <div className="userList-user">
                <img src={params.row.img} className="userList-image" />
                {params.row.username}
              </div>
              <button className="userList-edit">Edit</button>
            </Link>
          </>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transactions", headerName: "Transactions", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="useList-action">
            <Link to={`/user/${params.row.id}`}>
              <button className="userList-edit-user">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userList-delete-user"
              onClick={() => userDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const userDelete = (userId: number) => {
    setUserData(userData.filter((user) => user.id !== userId));
  };

  return (
    <div className="userList">
      <DataGrid
        rows={userData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default UserList;
