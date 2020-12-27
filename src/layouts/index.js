import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '@contexts'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, notification } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import './style.css'

const { Header, Content, Footer } = Layout

const LayoutDesign = props => {
  const { logout, currentUser } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const breadcrumb = location.pathname.substring(1)
  const { children } = props

  const routes = {
    student: [
      <Menu.Item key='student' onClick={() => history.push('/student')}>
        Student
      </Menu.Item>,
      <Menu.Item key='classManage' onClick={() => history.push('/classManage')}>
        Class Manage
      </Menu.Item>,
      <Menu.Item
        key='courseManage'
        onClick={() => history.push('/courseManage')}
      >
        Course Manage
      </Menu.Item>
    ],
    instructor: [
      <Menu.Item key='classManage' onClick={() => history.push('/classManage')}>
        Class Manage
      </Menu.Item>,
      <Menu.Item
        key='courseManage'
        onClick={() => history.push('/courseManage')}
      >
        Course Manage
      </Menu.Item>,
      <Menu.Item
        key='courseManage'
        onClick={() => history.push('/courseManage')}
      >
        Document Manage
      </Menu.Item>
    ],
    aao_staff: [
      <Menu.Item key='classManage' onClick={() => history.push('/classManage')}>
        Class Manage
      </Menu.Item>,
      <Menu.Item
        key='studentManage'
        onClick={() => history.push('/studentManage')}
      >
        Student Manage
      </Menu.Item>,
      <Menu.Item
        key='teacherManage'
        onClick={() => history.push('/teacherManage')}
      >
        Teacher Manage
      </Menu.Item>,
      <Menu.Item
        key='courseManage'
        onClick={() => history.push('/courseManage')}
      >
        Course Manage
      </Menu.Item>,
      <Menu.Item
        key='documentManage'
        onClick={() => history.push('/documentManage')}
      >
        Document Manage
      </Menu.Item>
    ],
    faculty: [
      <Menu.Item key='classManage' onClick={() => history.push('/classManage')}>
        Class Manage
      </Menu.Item>,
      <Menu.Item
        key='studentManage'
        onClick={() => history.push('/studentManage')}
      >
        Student Manage
      </Menu.Item>,
      <Menu.Item
        key='teacherManage'
        onClick={() => history.push('/teacherManage')}
      >
        Teacher Manage
      </Menu.Item>,
      <Menu.Item
        key='courseManage'
        onClick={() => history.push('/courseManage')}
      >
        Course Manage
      </Menu.Item>,
      <Menu.Item
        key='documentManage'
        onClick={() => history.push('/documentManage')}
      >
        Document Manage
      </Menu.Item>
    ],
    superadmin: [
      <Menu.Item key='classManage' onClick={() => history.push('/classManage')}>
        Class Manage
      </Menu.Item>,
      <Menu.Item
        key='studentManage'
        onClick={() => history.push('/studentManage')}
      >
        Student Manage
      </Menu.Item>,
      <Menu.Item
        key='teacherManage'
        onClick={() => history.push('/teacherManage')}
      >
        Teacher Manage
      </Menu.Item>,
      <Menu.Item
        key='courseManage'
        onClick={() => history.push('/courseManage')}
      >
        Course Manage
      </Menu.Item>,
      <Menu.Item
        key='documentManage'
        onClick={() => history.push('/documentManage')}
      >
        Document Manage
      </Menu.Item>
    ]
  }

  const handleLogout = useCallback(() => {
    const { message } = logout()
    notification.success({
      message: 'Logout Success',
      description: message,
      placement: 'bottomRight'
    })
  }, [])

  console.log(currentUser)

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' selectedKeys={[breadcrumb]}>
          {routes[currentUser.USER_ROLE].map(item => {
            return item
          })}
          <Menu.Item
            key='logout'
            style={{
              float: 'right'
            }}
            onClick={handleLogout}
          >
            <PoweroffOutlined />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
        </Breadcrumb>
        <div className='site-layout-content'>{children}</div>
      </Content>
    </Layout>
  )
}

export default LayoutDesign
