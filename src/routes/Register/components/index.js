import React from 'react'
import PropTypes from 'prop-types'
import Form from "./Form"
import "./style.scss"

export const Page = ({ registerUser, setPass, setValidatePass, setEmail, setUserName }) => (
  <div>

    <Form formObjs={[
      {
        Lable: "User Name",
        Placeholder: "User Name",
        onChangeFunc: (e) => setUserName(e.target.value),
      },
      {
        Lable: "Email",
        Placeholder: "Email",
        onChangeFunc: (e) => setEmail(e.target.value),
        Type: "email"
      },
      {
        Lable: "Password",
        Placeholder: "Password",
        onChangeFunc: (e) => setPass(e.target.value),
        Type: "password"
      },
      {
        Lable: "Verify Password",
        Placeholder: "Please type password again",
        onChangeFunc: (e) => setValidatePass(e.target.value),
        Type: "password"
      },

    ]} />
    <div className="form-group row">
      <label className="col-sm-5 control-label"></label>
      <div className="col-sm-2">
        <input onChange={()=>{console.log("wassip")}} type="checkbox"  className="form-control" autoFocus />
        <span className="help-block">Are you over 18 and agree to our terms and service</span>
      </div>
      <div className="col-sm-5"></div>
    </div>

  <button className='btn btn-primary' onClick={()=>registerUser("formData")}>
    Register Now!
    </button>

  </div >
)

Page.propTypes = {
  registerUser: PropTypes.func.isRequired,

}

export default Page
