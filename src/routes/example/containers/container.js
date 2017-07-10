import { connect } from 'react-redux'
import Info from '../components/index'
import {setInfo} from '../modules/reducers'

const mapDispatchToProps = {
  setInfo: () => setInfo(),
}

const mapStateToProps = (state) => ({
  info : state.info
})


export default connect(mapStateToProps, mapDispatchToProps)(Info)
