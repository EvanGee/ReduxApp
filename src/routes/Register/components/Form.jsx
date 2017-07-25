import React from 'react'
import PropTypes from 'prop-types'

export const form = ({ register }) => (
    <div className="container">
        <form className="form-horizontal" role="form">
            <h2>Registration Form</h2>
            <div className="form-group row">
                <label for="User Name" className="col-sm-3 control-label">User Name</label>
                <div className="col-sm-9">
                    <input type="text" id="firstName" placeholder="User Name" className="form-control" autofocus />
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
            
        </form >
    </div>
)

form.propTypes = {
}

export default form
