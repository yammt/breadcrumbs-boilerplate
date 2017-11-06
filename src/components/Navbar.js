import React, { Component } from 'react'
import {
  Glyphicon,
  Navbar,
  Nav,
  NavItem as NItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavItem = ({to, ...props}) => (
  <LinkContainer to={to||''}>
    <NItem {...props}></NItem>
  </LinkContainer>
)

const TheNavbar = ({children}) => (
  <Navbar inverse collapseOnSelect>

    <Navbar.Header>
      <Nav>
        <NavItem eventKey={1} to={'#'}>
          <Glyphicon glyph='menu-hamburger' />
        </NavItem>
      </Nav>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} to={'#'}>
          Projects
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default TheNavbar
