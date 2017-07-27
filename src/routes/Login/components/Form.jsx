import React from 'react'
import PropTypes from 'prop-types'


const generateForm = ({ Type = "text", Lable, HelpText, Placeholder, onChangeFunc}, i) =>
    (
        <div key={i}>
        <div className="form-group row">
            <label className="col-sm-3 control-label">{Lable}</label>
            <div className="col-sm-9">
                <input onChange={onChangeFunc} type={Type} id={Lable} placeholder={Placeholder} className="form-control" autoFocus />
                <span className="help-block">{HelpText}</span>
            </div>
        </div>
        </div>
    )


export const form = ({formObjs}) => {
    return (
        <div className="container">
            <form className="form-horizontal" role="form">
                {
                    formObjs.map((d, i ) => generateForm(d, i))
                }
            </form >
        </div>
    )
}


form.propTypes = {
}

export default form
