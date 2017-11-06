import React from 'react'
import PropTypes from 'prop-types'
import { Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './style.scss'

const SidebarContent = (props) => (
  <div className='sidebar-container'>
    <div>GLOBAL</div>

    <LinkContainer to={'/projects'}>
      <div><Glyphicon glyph='folder-close' /><span>Projects</span></div>
    </LinkContainer>

    <LinkContainer to={'/'}>
      <div><Glyphicon glyph='log-out' /><span>Logout</span></div>
    </LinkContainer>
  </div>
)

export default SidebarContent