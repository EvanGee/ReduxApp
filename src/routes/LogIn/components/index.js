import React from 'react'
import PropTypes from 'prop-types'
//<SignUpForm logIn={logIn} chPass={changePassword} chEmail={changeEmail}/>

export const Page = ({logIn, changePassword, changeEmail, emailVal, passwordVal, loggedIn}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Log In Now!</h2>
    
    <form>
        Email: <input type="email" name="email" id="Email" onChange={changeEmail}/><br/>
        Password: <input type="password" name="password" id="Password" onChange={changePassword}/><br/>
        <button type="button" onClick={()=> logIn(emailVal, passwordVal)}>SUBMIT</button>
        <button type="button" onClick={loggedIn}>LOGGEDIN</button>
    </form>

  {emailVal} 
  <br></br>
  {passwordVal}
  </div>

)

Page.propTypes = {
  logIn: PropTypes.func.isRequired,
}

export default Page
