import React from "react"

export default function Register() {
    const [userData, setUserData] = React.useState(
        {
            name: "",
            password: "",
            confirmPassword: ""
        }
    )
    
    function handleChange(event) {
        const { id, value, name, type } = event.target
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: type === "checkbox" ? true : value
        }))
    }

    function handleSubmit(event) {
        
    }
    
    return (
        <>
            <form className="register-form" onSubmit={handleSubmit}>
                <h3>Register</h3>
                <label htmlFor="username"><span>Username</span><input onChange={handleChange} type="text" name="username" id="username" /></label>
                <label htmlFor="password"><span>Email</span><input onChange={handleChange} type="email" name="email" id="email" /></label>
                <label htmlFor="password"><span>Password</span><input onChange={handleChange} name="password" id="password" type="password" /></label>
                <label htmlFor="confirm-password"><span>Confirm Password</span><input onChange={handleChange} name="confirmPassword" id="confirm-password" type="password"/></label>
                {/* <label className="terms">
                    <input type="checkbox" id="terms" name="terms"/>
                    <span>I accept the terms & conditions</span>
                </label> */}
                <p>By Continuing you agree to our <a href="">Privacy Policy</a> and <a href="">Terms of use</a></p>
                <button>Create account</button>
            </form>
        </>
    )
}