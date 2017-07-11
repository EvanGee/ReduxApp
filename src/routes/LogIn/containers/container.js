import { connect } from 'react-redux'
import Info from '../components/index'
import {logIn} from '../modules/reducers'

const mapDispatchToProps = {
  logIn: () => logIn(),
}

const mapStateToProps = (state) => ({
  loggedIn : state.LoggedIn
})


export default connect(mapStateToProps, mapDispatchToProps)(Info)
