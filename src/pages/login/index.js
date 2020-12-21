import React, { useCallback, useState, useRef } from 'react'
import { useAuth } from '@contexts'
import { Form, Input, Button, Checkbox, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import './style.css'

const Login = props => {
  const { login } = useAuth()

  const history = useHistory()

  const usernameInputRef = useRef()
  const passwordInputRef = useRef()

  const onHandleLogin = useCallback(async () => {
    const username = usernameInputRef.current.state.value
    const password = passwordInputRef.current.state.value
    const result = await login(username, password)
    const { success, message } = result
    if (success) {
      notification.success({
        message,
        placement: 'bottomRight'
      })
      history.push('/')
    } else {
      notification.error({
        message,
        placement: 'bottomRight'
      })
    }
  }, [])

  return (
    <div>
      <h1 className='header'>LEARNING SYSTEM</h1>
      <Form
        name='normal_login'
        className='Outline'
        initialValues={{
          remember: true
        }}
      >
        <Form.Item
          name='username'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input
            ref={usernameInputRef}
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input.Password
            ref={passwordInputRef}
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox className='fontstyle'>Remember Me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={onHandleLogin}
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
