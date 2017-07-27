import React from 'react'
import PropTypes from 'prop-types'
import Form from "./Form"
import "./style.scss"

const onChangeUserName = event => {
  console.log(event.target.value)
}

const onChangeEmail = event => {
  console.log(event.target.value)
}

const onChangePassword = event => {
  console.log(event.target.value)
}

const onChangePasswordVerify = event => {
  console.log(event.target.value)
}

export const Page = ({ registerUser }) => (
  <div>

    <Form formObjs={[
      {
        Lable: "User Name",
        HelpText: "This is the name other people will recognize you as",
        Placeholder: "User Name",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        },
      },
      {
        Lable: "Email",
        Placeholder: "Email",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        }
      },
      {
        Lable: "Password",
        Placeholder: "Password",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        }
      },
      {
        Lable: "Verify Password",
        Placeholder: "Please type password again",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        }
      },

    ]} />
    <div className="form-group row">
      <label className="col-sm-5 control-label"></label>
      <div className="col-sm-2">
        <input onChange={()=>{console.log("wassip")}} type="checkbox"  className="form-control" autoFocus />
        <span className="help-block">Are you over 18</span>
      </div>
      <div className="col-sm-5"></div>
    </div>

  <button className='btn btn-primary' onClick={registerUser}>
    Register Now!
    </button>

  </div >
)

Page.propTypes = {
  registerUser: PropTypes.func.isRequired,

}

export default Page
