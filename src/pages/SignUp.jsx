import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../features/auth/authSlice';
import { Form, Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleSignUp = (values) => {
    dispatch(signup(values));
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div style={{ maxWidth: 300, margin: 'auto', paddingTop: 100 }}>
      <h2>Sign Up</h2>
      {error && <Alert message={error} type="error" />}
      <Form onFinish={handleSignUp}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            type="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            placeholder="Password"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{
              background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
              border: 'none',
            }}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <Link to="/login">Already have an account? Log In</Link>
    </div>
  );
};

export default SignUp;
