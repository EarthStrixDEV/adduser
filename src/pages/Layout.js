import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { BsTable } from "react-icons/bs";
import { CgInsertBeforeR } from "react-icons/cg";
import { TiUserAdd } from "react-icons/ti";
import { IoLogOut } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

import '../style.css';

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>

      <div className={`mini-drawer ${isDrawerOpen ? 'open' : 'closed'}`}>
        {/* Drawer content goes here */}
        <div className='drawerMenu'>
          <div>เมนู</div>
          <button onClick={toggleDrawer} >
            <IoMenu size={40} />
          </button>
        </div>

        <div className='drawerList'>
          <Link to="/">โปรไฟล์</Link>
          <Link to="/"><FaCircleUser size={40} /></Link>
        </div>

        <div className='drawerList'>
          <Link to="/main">หน้าหลัก</Link>
          <Link to="/main"><FaHome size={40} /></Link>
        </div>

        <div className='drawerList'>
          <Link to="/blogs">ตารางสอน</Link>
          <Link to="/blogs"> <BsTable size={40} /></Link>
        </div>

        <div className='drawerList'>
          <Link to="/contact">นำเข้าหลักสูตร</Link>
          <Link to="/contact"><CgInsertBeforeR size={40} /></Link>
        </div>

        <div className='drawerList'>
          <Link to="/adduser">ข้อมูลผู้ใช้งาน</Link>
          <Link to="/adduser"> <FaUserCheck size={40} /></Link>
        </div>

        <div className='drawerList'>
          <Link to="/adduser_">เพิ่มผู้ใช้งาน</Link>
          <Link to="/adduser_"> <TiUserAdd size={40} /></Link>
        </div>

        <div className='drawerList'>
          <div className='bg-lime-600 p-1 rounded-md w-3/6'>เปิด</div>
          <button onClick={toggleDrawer} >
            <IoLockOpen size={40} />
          </button>
        </div>

        <div className='drawerList'>
          <Link to="/logout">ออกจากระบบ</Link>
          <button onClick={toggleDrawer} >
            <IoLogOut size={40} />
          </button>
        </div>
      </div>


      <Outlet />
    </>
  )
};

export default Layout;