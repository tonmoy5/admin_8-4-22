import React from 'react'
import "./dataTable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userColumns, userRows } from '../../datatablesource'
import { Link } from 'react-router-dom'



const DataTable = () => {

  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
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
        rows={userRows}
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