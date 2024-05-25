import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice.jsx';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // You can also perform any other necessary cleanup or redirection here
  };

  const menuItems = [
    { key: '1', title: 'Dashboard', link: '/dashboard' },
    { key: '2', title: 'Photo Gallery', link: '/photo-gallery' },
    { key: '3', title: 'Portfolio', link: '/portfolio' },
    { key: '4', title: 'Account Settings', link: '/account-settings' },
    { key: '5', title: 'Logout', onClick: handleLogout },
  ];

  const menu = (
    <Menu>
      {menuItems.map(item => (
        <Menu.Item key={item.key}>
          {item.link ? <Link to={item.link}>{item.title}</Link> : <span onClick={item.onClick}>{item.title}</span>}
        </Menu.Item>
      ))}
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
