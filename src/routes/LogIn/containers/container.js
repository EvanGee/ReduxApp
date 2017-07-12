import { connect } from 'react-redux'
import Info from '../components/index'
import {logIn, changePassword, changeEmail, loggedIn} from '../modules/reducers'


const mapDispatchToProps = (dispatch) => ({
  logIn : (emailVal, passwordVal) => dispatch(logIn(emailVal, passwordVal)),
  changePassword : (e) => dispatch(changePassword(e.target.value)),
  changeEmail    : (e) => dispatch(changeEmail(e.target.value)),
  loggedIn       : (e) => dispatch(loggedIn())
})

const mapStateToProps = (state) => ({
  emailVal : state.LogInPage.email,
  passwordVal : state.LogInPage.password
})


export default connect(mapStateToProps, mapDispatchToProps)(Info)
