import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '@contexts'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import './style.css'

const { Header, Content, Footer } = Layout

const LayoutDesign = props => {
    const location = useLocation()
    const history = useHistory()
    const breadcrumb = location.pathname.substring(1)
    const { children } = props
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" selectedKeys={[breadcrumb]}>
                    <Menu.Item key="classManage" onClick={() => history.push('/classManage') }>Class Manage</Menu.Item>
                    <Menu.Item key="studentManage" onClick={() => history.push('/studentManage')}>Student Manage</Menu.Item>
                    <Menu.Item key="teacherManage" onClick={() => history.push('/teacherManage')}>Teacher Manage</Menu.Item>
                    <Menu.Item key="courseManage" onClick={() => history.push('/courseManage')}>Course Manage</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Course Registed</Footer>
        </Layout>
    )
}

export default LayoutDesign
