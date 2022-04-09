import React from 'react'
import "./dataTable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userColumns, userRows } from '../../datatablesource'



const DataTable = () => {

  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className='dataTable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default DataTable