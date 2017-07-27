import { connect } from 'react-redux'
import Page from '../components/index'
import {register, valPass, valValidatePass, valEmail, valUserName} from '../modules/reducers'


const mapDispatchToProps = (dispatch) => ({
  registerUser    : (formData) => dispatch(register(formData)),
  setPass         : (value)    => dispatch(valPass(value)),
  setValidatePass : (value)    => dispatch(valValidatePass(value)),
  setEmail        : (value)    => dispatch(valEmail(value)),
  setUserName     : (value)    => dispatch(valUserName(value))
})

const mapStateToProps = (state) => ({
  registered: state.Register

})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
