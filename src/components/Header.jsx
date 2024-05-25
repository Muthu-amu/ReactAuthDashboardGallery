import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice.jsx';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/photo-gallery">Photo Gallery</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/portfolio">Portfolio</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/account-settings">Account Settings</Link>
      </Menu.Item>
      <Menu.Item key="5" onClick={() => dispatch(logout())}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px', background: '#f0f2f5' }}>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </header>
  );
};

export default Header;
