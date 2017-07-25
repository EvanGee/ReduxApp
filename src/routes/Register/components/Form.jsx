import React from 'react'
import PropTypes from 'prop-types'


const generateForm = ({ Lable, HelpText, Placeholder, onChangeFunc}, i) =>
    (
        <div key={i}>
        <div className="form-group row">
            <label className="col-sm-3 control-label">{Lable}</label>
            <div className="col-sm-9">
                <input onChange={onChangeFunc} type="text" id={Lable} placeholder={Placeholder} className="form-control" autoFocus />
                <span className="help-block">{HelpText}</span>
            </div>
        </div>
        </div>
    )


export const form = ({formObjArray}) => {
    return (
        <div className="container">
            <h2 className="">Registration Form</h2>
            <form className="form-horizontal" role="form">
                {
                    formObjArray.map((d, i ) => generateForm(d, i))
                }
            </form >
        </div>
    )
}


form.propTypes = {
}

export default form


/*
            <div className="form-group row">
                <label for="User Name" className="col-sm-3 control-label">User Name</label>
                <div className="col-sm-9">
                    <input onChange={validationFuncs[0]} type="text" id="firstName" placeholder="User Name" className="form-control" autofocus />
                    <span className="help-block">This is the name you want other people to view you as</span>
                </div>
            </div>
            <div className="form-group row">
                <label for="email" className="col-sm-3 control-label">Email</label>
                <div className="col-sm-9">
                    <input type="email" id="email" placeholder="Email" className="form-control" />
                </div>
            </div>

            <div className="form-group row">
                <label for="password" className="col-sm-3 control-label">Password</label>
                <div className="col-sm-9">
                    <input type="password" id="password" placeholder="Password" className="form-control" />
                </div>

            </div>
            <div className="form-group row">
                <label for="password" className="col-sm-3 control-label">Verify Password</label>
                <div className="col-sm-9">
                    <input type="password" id="password" placeholder="Password" className="form-control" />
                </div>
            </div>
    */