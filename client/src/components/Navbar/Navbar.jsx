import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavLink, useNavigate } from 'react-router-dom'; 
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux'; 
import './Navbar.css';

export const Navbar = ({ children }) => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const handleDelete = () => {
    localStorage.setItem('token', 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/');
    localStorage.removeItem('login');
    dispatch({ type: 'logout' }); 
    navigate('/');
  };

  const menuItem = [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      icone: <DashboardIcon />,
    },
    {
      path: '/Doctors',
      name: 'Doctors',
      icone: <MedicalInformationIcon />,
    },
    {
      path: '/MRList',
      name: 'MRList',
      icone: <NoteAddIcon />,
    },
    {
      path: '/Reports',
      name: 'Reports',
      icone: <AssessmentIcon />,
    },
    {
      path: '/',
      name: 'LogOut',
      icone: <LogoutIcon />,
      onClick: handleDelete, // Corrected onClick attribute
    },
  ];

  return (
    <div className='container'>
      <div className='Top-Section'>
        <div className='logo'>
          <img src='/src/assets/logo.png' alt='Logo' className='logo-img' />
        </div>
        <div className='navbar'>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className='link' activeClassName='active'>
              <div className='icon'>{item.icone}</div>
              <div className='link_text'>{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};
