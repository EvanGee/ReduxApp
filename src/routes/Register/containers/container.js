import { connect } from 'react-redux'
import Page from '../components/index'
import {register, setPass, setValidatePass, setEmail, setUserName} from '../modules/reducers'


const mapDispatchToProps = (dispatch) => ({
  registerUser    : (formData) => dispatch(register(formData)),
  setPass         : (value) => dispatch(setPass(value)),
  setValidatePass : (value) => dispatch(setValidatePass(value)),
  setEmail        : (value) => dispatch(setEmail(value)),
  setUserName     : (value) => dispatch(setUserName(value))
})

const mapStateToProps = (state) => ({
  registered: state.Register

})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
