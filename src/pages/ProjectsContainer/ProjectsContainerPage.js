import React, { Component, PropTypes } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

import './style.scss'

class ProjectsContainerPage extends Component {
  handleVisit = () => {
    this.props.history.push('/projects/1')
  }

  render() {
    return (
      <div className='projects-container'>
        <h4>MY PROJECT(S)</h4>
        <div className='projects-wrapper'>
          <div className='project'>
            <div>Test Project 1</div>
            <div className='content'>
              <input type='button' value='Visit' onClick={this.handleVisit} />
            </div>
          </div>
        </div>        
      </div>
    )
  }
}

ProjectsContainerPage.propTypes = {
  history: PropTypes.object
}

export default ProjectsContainerPage

