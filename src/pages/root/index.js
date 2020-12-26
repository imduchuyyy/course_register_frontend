import { useAuth } from '@contexts'
import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import WelComeImg from '@assets/welcome.jpg'
import './style.css'

const roles = {
  STUDENT: {
    path: '/student'
  },
  FAULTY: {
    path: '/faulty'
  }
}

const { Title } = Typography

function Root() {
  const { currentUser } = useAuth()
  console.log(currentUser)

  const location = useLocation()

  return (
    <Row>
      <Col span={12}>
        <img
          src={WelComeImg}
          style={{
            maxHeight: '430px'
          }}
        ></img>
      </Col>
      <Col className='welcome-text' span={12}>
        <Title level={3}>
          Welcome{' '}
          <i
            style={{
              color: 'green'
            }}
          >
            Superadmin
          </i>
        </Title>
        <div
          style={{
            textAlign: 'center'
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </Col>
    </Row>
  )
}

export default Root
