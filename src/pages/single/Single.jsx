import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from '../../components/table/Table'


const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singleContent">
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Item Image" className="itemImg" />

                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email: </span>
                    <span className="itemValue">tonmoy52532@gamil.com </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone: </span>
                    <span className="itemValue">+88 01889983314</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address: </span>
                    <span className="itemValue">#37, Shekertek-8, Dhaka </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country: </span>
                    <span className="itemValue">Bangladesh</span>
                  </div>
                </div>

              </div>
            </div>
            <div className="right">
              <Chart aspect={3 / 1} title="User Spending ( Last 6 Month )" />
            </div>
          </div>

          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single