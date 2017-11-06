import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import Component from './ProjectPage'

const mapStateToProps = state => ({
  projectNo: 1
})

export default connect(mapStateToProps, null)(Component)