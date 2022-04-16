import React, { useEffect, useState } from 'react'
import "./dataTable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userColumns, userRows } from '../../datatablesource'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { async } from '@firebase/util'


const DataTable = () => {

  const [data, setData] = useState([]);

  useEffect(async () => {
    const fatchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    }
    fatchData();
  }, [])

  const handleDelete = (id) => {
    setData(data.filter(row => row.id !== id));
  }

  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className='dataTable'>
      <div className="datatableTitle">
        Add New Users
        <Link to="/users/new" style={{ textDecoration: "none" }} className='link'>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        className='datagrid'
      />
    </div>
  )
}

export default DataTable