import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../features/auth/authSlice.jsx';
import { Button, Alert } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(login(values));
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', paddingTop: 100 }}>
      <h2>Login</h2>
      {error && <Alert message={error} type="error" />}
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading || isSubmitting}
              style={{
                background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
                border: 'none',
              }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Login;
