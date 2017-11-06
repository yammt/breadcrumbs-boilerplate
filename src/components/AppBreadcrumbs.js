import React, { Component } from 'react'
import { Glyphicon, Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'

const Item = ({to, glyph, ...props}) => (
  <LinkContainer to={to}>
    <Breadcrumb.Item {...props}>
    </Breadcrumb.Item>
  </LinkContainer>
)

const ItemWithIcon = ({to, glyph, children, ...props}) => (
  <LinkContainer to={to}>
    <Breadcrumb.Item {...props}>
      {glyph ? <span><Glyphicon glyph={glyph} /> {children}</span> : children}
    </Breadcrumb.Item>
  </LinkContainer>
)

export const BreadcrumbsWithIcon = () => (
  <Breadcrumbs
    container={Breadcrumb}
    item={ItemWithIcon}
    finalProps={{active: true}}
    duplicateProps={{to: 'href'}}
  />
)
