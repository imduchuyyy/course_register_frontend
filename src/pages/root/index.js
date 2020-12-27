import { useAuth } from '@contexts'
import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import WelComeImg from '@assets/welcome.jpg'
import './style.css'

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
            {currentUser.LNAME + ' ' + currentUser.FNAME}
          </i>
        </Title>
        <div
          style={{
            textAlign: 'center'
          }}
        >
          This is the E-learning site of Vietnam National University Ho Chi Minh
          City - University of Technology
        </div>
      </Col>
    </Row>
  )
}

export default Root
