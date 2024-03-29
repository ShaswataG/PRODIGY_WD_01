import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function LoginUser(props) {
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
      <Button onClick={handleShow} className={props.darkMode ? "login-button-dark" : "login-button-light"} >Login</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='popup'
      >
        <Modal.Header closeButton>
          <Modal.Title>XYZ Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3 className='login-heading'>Sign in</h3>
            <form className='login-form'>
                <label className='login-fields'>
                  {/* <span>Email</span> */}
                  <input type='email' name="email" placeholder='Email'/>
                </label>
                <label className='login-fields'>
                  {/* <span>Password</span> */}
                  <input type='password' name="confirmPassword" placeholder='Password'/>
                </label>
                {/* <label className="terms" htmlFor="terms">
                  <input required id="terms" type="checkbox"/>
                  <span>I accept the terms & conditions</span>
                </label> */}
                <Button className="login-button" type="submit" variant="primary">Sign In</Button>
            </form>
            <a className="forgot-password" href="">Forgot password?</a>
        </Modal.Body>
        <Modal.Footer className='model-footer'>
        <p>New to XYZ Booking? <a href="register">Create account</a></p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginUser;