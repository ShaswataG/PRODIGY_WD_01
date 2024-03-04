import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterUser from './RegisterUser'

function LoginUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userData, setUserData] = React.useState(
    {
        email: "",
        password: "",
        confirmPassword: ""
    }
  )

  return (
    <div>
      <Button onClick={handleShow} className="login">Login</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>XYZ Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3 className='login-heading'>Sign in</h3>
            <form className='login-form'>
                <input type='email' name="email" placeholder='Email id.'/>
                <input type='password' name="confirmPassword" placeholder='Password' />
                <label htmlFor="terms"><input required id="terms" type="checkbox"/><span>I accept the terms & conditions</span></label>
            </form>
            <a className="forgot-password" href="">Forgot password?</a>
            <hr />
            <p>New to XYZ Booking?<a href="./RegisterUser.js">Create account</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button type="submit" variant="primary">Sign In</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginUser;