import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Sidebar from 'react-sidebar'
import { Grid } from 'react-bootstrap'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

import { BreadcrumbsWithIcon } from '../components/AppBreadcrumbs'

import SidebarContent from '../components/SideBar/index'
import Navbar from '../components/Navbar'
import DashboardPage from './Dashboard'
import ProjectsContainerPage from './ProjectsContainer/index'
import ProjectPage from './Project/index'

class App extends Component {
  render() {
    const sidebar = <SidebarContent />

    return (
      <Sidebar
        sidebar={sidebar}
        docked={true}
        open={true}
      >
        <BreadcrumbsItem glyph='folder-close' to={'/projects'}>
          Projects
        </BreadcrumbsItem>

        <Navbar/>

        <BreadcrumbsWithIcon />

        <Grid>
          <Route exact path='/' component={DashboardPage} />
          <Route exact path='/projects' component={ProjectsContainerPage} />
          <Route path='/projects/1' component={ProjectPage} />
        </Grid>

      </Sidebar>
    )
  }
}

export default App
