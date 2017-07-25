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

    <Form formObjArray={[
      {
        Lable: "User Name",
        HelpText: "This is the name other people will recognize you as",
        Placeholder: "User Name",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        }
      },
      {
        Lable: "User Name",
        HelpText: "This is the name other people will recognize you as",
        Placeholder: "User Name",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        }
      },
      {
        Lable: "User Name",
        HelpText: "This is the name other people will recognize you as",
        Placeholder: "User Name",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        }
      },
      {
        Lable: "User Name",
        HelpText: "This is the name other people will recognize you as",
        Placeholder: "User Name",
        onChangeFunc: (e) => {
          console.log(e.target.value)
        }
      },
    ]} />
    <button className='btn btn-primary' onClick={registerUser}>
      Register Now!
    </button>

  </div>
)

Page.propTypes = {
  registerUser: PropTypes.func.isRequired,

}

export default Page
