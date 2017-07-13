import { connect } from 'react-redux'
import Info from '../components/index'
import {fetchPosts} from '../modules/reducers'

const mapDispatchToProps = {
  fetchPosts: () => fetchPosts(),
}

const mapStateToProps = (state) => ({
  info : state.info
})


export default connect(mapStateToProps, mapDispatchToProps)(Info)
