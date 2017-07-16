import { connect } from 'react-redux'
import Info from '../components/index'
import {login, changePassword, changeEmail, loggedIn} from '../modules/reducers'


const mapDispatchToProps = (dispatch) => ({
  login : (emailVal, passwordVal) => dispatch(login(emailVal, passwordVal)),
  changePassword : (e) => dispatch(changePassword(e.target.value)),
  changeEmail    : (e) => dispatch(changeEmail(e.target.value)),
  loggedIn       : (e) => dispatch(loggedIn()),
})

const mapStateToProps = (state) => ({
  emailVal : state.LoginPage.email,
  passwordVal : state.LoginPage.password
})


export default connect(mapStateToProps, mapDispatchToProps)(Info)
