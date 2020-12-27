import React, { useState, useEffect, useMemo } from 'react'
import { Select, Input, Table, Button, Tooltip, notification } from 'antd'
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'
import { successList } from './sucessList'
import { useCallApi } from '@hooks'
import { LIST_API } from '@environments'
import './App.css'

const Student = () => {
  const [semester, setSemester] = useState('202')
  const [listCourse, setListCourse] = useState()
  const [listCourseRegistered, setListCourseRegistered] = useState()

  const column = useMemo(() => [
    {
      title: 'Mã môn học',
      dataIndex: 'COURSE_ID',
      key: 'course_id',
      width: 200
    },
    {
      title: 'Tên môn học',
      dataIndex: 'COURSE_NAME',
      key: 'course_id'
    },
    {
      title: 'Số tín chỉ',
      dataIndex: 'CREDIT',
      key: 'course_id',
      width: 150
    },
    {
      title: '',
      dataIndex: '',
      key: '',
      width: 150,
      render: row => {
        return (
          <Button
            type='primary'
            shape='round'
            onClick={() => registerCourse(row)}
          >
            Đăng ký
          </Button>
        )
      }
    }
  ])

  const { postMethod } = useCallApi()

  const fetchListCourse = async () => {
    const res = await postMethod(LIST_API.LIST_COURSE, {
      semester,
      faculty: 'F001'
    })
    setListCourse(res)
  }

  useEffect(() => {
    fetchListCourse()
  }, [semester])

  const onChange = e => {
    setSemester(e)
  }

  const registerCourse = async row => {
    const res = await postMethod(LIST_API.REGISTER_COURSE, {
      course_id: row.COURSE_ID
    })
    console.log(res)
    if (res && res.message == 'Success') {
      notification.success({
        message: 'Register Course Success',
        description: `You registered to ${row.COURSE_NAME}`,
        placement: 'bottomRight'
      })

      fetchListCourseRegistered()
    } else {
      notification.error({
        message: 'Register Course Failed',
        description: `Failed`,
        placement: 'bottomRight'
      })
    }
  }

  const fetchListCourseRegistered = async () => {
    const res = await postMethod(LIST_API.LIST_REGISTERED_COURSE, {
      semester
    })
    console.log(res)
    setListCourseRegistered(res)
  }

  useEffect(() => {
    fetchListCourseRegistered()
  }, [semester])

  if (!listCourse || !listCourseRegistered) {
    return <div></div>
  }

  return (
    <div className='registerContainer'>
      <p className='title'>Đăng ký môn học</p>
      <div className='outerComponent'>
        <p className='title'>Đăng ký môn học năm học 2020-2021</p>
        <div className='content'>
          <div className='component'>
            <p className='title'>Chọn học kỳ</p>
            <Select
              style={{ width: 200 }}
              placeholder='Chọn học kỳ'
              defaultValue='202'
              onChange={onChange}
            >
              <Select.Option value='202'>HK 202</Select.Option>
              <Select.Option value='201'>HK 201</Select.Option>
              <Select.Option value='192'>HK 192</Select.Option>
            </Select>
          </div>
          <div className='component'>
            <p className='title'>Chọn môn học đăng ký</p>
            <Input.Search
              placeholder='Mã môn học/Tên môn học'
              allowClear
              enterButton
            />
            <Table
              scroll={{ y: 350 }}
              columns={column}
              dataSource={listCourse}
              bordered={true}
              pagination={false}
            />
          </div>
        </div>
        <div className='component' style={{ margin: '15px' }}>
          <p className='title'>Phiếu đăng ký</p>
          <div className='outerComponent'>
            <p className='title'>Danh sách đã đăng ký</p>
            <div className='list-item'>
              {listCourseRegistered.listCourseRegistered.map(
                (element, index) => (
                  <div className='item'>
                    <div className='item-title'>
                      <p>{index + 1}</p>
                      <p>
                        {element.COURSE_ID + ' '} - {' ' + element.COURSE_NAME}
                      </p>
                      <p>{element.CREDIT.toFixed(1)}</p>
                    </div>
                    <div className='item-info'>
                      {/* <div>
                      <p>Nhóm lớp</p>
                      <p>{element.class_group}</p>
                    </div>
                    <div>
                      <p>Đăng ký/Sĩ số</p>
                      <p>
                        {element.amount}/{element.max_amount}
                      </p>
                    </div> */}
                      <div>
                        <p>Thoi gian</p>
                        <p>{element.REGISTER_TIME}</p>
                      </div>
                      <div>
                        <p>Thoả điều kiện DK</p>
                        <CheckOutlined className='icon' />
                      </div>
                      <div>
                        <p>Đã gửi đăng ký</p>
                        <CheckOutlined className='icon' />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <p>
            Tổng số môn đăng ký:{' '}
            <span>{listCourseRegistered.listCourseRegistered.length}</span>
          </p>
          <p>
            Tổng số tín chỉ đăng ký:{' '}
            <span>{listCourseRegistered.totalCredit || 0}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Student
