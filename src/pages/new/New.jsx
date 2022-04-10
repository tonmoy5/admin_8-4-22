import React, { useState } from 'react'
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import FileUploadIcon from '@mui/icons-material/FileUpload';

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="image" />
          </div>

          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <FileUploadIcon className='icon' />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
              </div>
              {
                inputs.map((input, index) => {
                  return (
                    <div className="formInput" key={index}>
                      <label htmlFor={input.name}>{input.label}</label>
                      <input type={input.type} id={input.name} placeholder={input.placeholder} />
                    </div>
                  )
                })
              }

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New