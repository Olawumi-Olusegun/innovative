import React, { useState } from 'react'
import { tabs } from '../../sources';
import { Link } from 'react-scroll';
import Logo from '../../Commons/Logo';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import "./Navbar.css";


const Navbar = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className='navbar flex'>
      { openSidebar ? <div onClick={() => setOpenSidebar((prevState) => !prevState)}  className='overlay' /> : null }
      <Logo />
      <div className={`box flex-center tabs-group sidebar ${openSidebar ? "visible" : "" }`}>
        <div onClick={() => setOpenSidebar((prevState) => !prevState)} className="flex-center icon-wrapper cancel-btn">
          <FaTimes />
        </div>
        {
          tabs.map((tab) => (
            <Link 
            to={tab.id} 
            smooth={true} 
            spy={true}
            className='tab'
            activeClass='active'
            key={tab.id}
            >
              {tab.name}
            </Link>
          ))
        }
      </div>
      <div className="box flex-center buttons">
          <Link 
          to='contact' 
          smooth={true}
          className='btn primary contact-btn'
          >
            Hire me
          </Link>
      
          <Link 
          to='contact' 
          smooth={true}
          className='btn services-btn'
          >
            Services
          </Link>

          <div onClick={() => setOpenSidebar((prevState) => !prevState)} className="flex-center icon-wrapper menu-btn">
            <HiMenu />
          </div>
      </div>
    </nav>
  )
}

export default Navbar