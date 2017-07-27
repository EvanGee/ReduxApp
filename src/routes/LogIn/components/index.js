import React from 'react'
import PropTypes from 'prop-types'
//<SignUpForm logIn={logIn} chPass={changePassword} chEmail={changeEmail}/>
import Form from './Form'
export const Page = ({
  login,
  changePassword,
  changeEmail,
  emailVal,
  passwordVal
}) => (
    <div style={{ margin: '0 auto' }} >
      <h2>Log In Now!</h2>
      <Form formObjs={[
      {
        Lable: "Email",
        Placeholder: "User Name",
        onChangeFunc: changeEmail,
        Type: "email"
        
      },
      {
        Lable: "Password",
        onChangeFunc: changePassword,
        Placeholder: "Password",
        Type: "password"

      },
    ]} />

<button type="button" className="btn btn-primary" onClick={() => login(emailVal, passwordVal)}>/api/login</button>
    </div>

  )

Page.propTypes = {
  login: PropTypes.func.isRequired,
}

export default Page
