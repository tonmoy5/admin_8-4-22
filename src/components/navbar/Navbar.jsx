import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { ListAltOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search....' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img src="https://scontent.fdac20-1.fna.fbcdn.net/v/t1.6435-9/140823152_2813994122198897_1973829189617645390_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=k7h5tBoabcMAX8XAEWK&_nc_ht=scontent.fdac20-1.fna&oh=00_AT-DSbWtLwvr65ub43LSpCFfFBZGtMvcxW2oXGNCAcGcSA&oe=62755D6C" alt="image" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar