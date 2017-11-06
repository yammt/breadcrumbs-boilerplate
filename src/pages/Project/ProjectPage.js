import React, { Component, PropTypes } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

import './style.scss'

const ProjectPage = ({ projectNo }) => (
  <div>
    <BreadcrumbsItem glyph='home' to={'/projects/'+projectNo}>
      <b>{`Test ${projectNo}`}</b>
    </BreadcrumbsItem>
    
    <h1>Test Project</h1>
  </div>
)

ProjectPage.propTypes = {
  projectNo: PropTypes.number,
}

export default ProjectPage

