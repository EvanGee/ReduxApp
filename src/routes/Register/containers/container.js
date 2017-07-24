import { connect } from 'react-redux'
import Page from '../components/index'
import {register} from '../modules/reducers'

const mapDispatchToProps = (dispatch) => ({
  registerUser : (formData) => dispatch(register(formData))
})

const mapStateToProps = (state) => ({
  registered: state.Register

})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
