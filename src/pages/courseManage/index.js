import React, { useState, useCallback, useEffect, useRef } from 'react'
import {
  Table,
  Tag,
  Select,
  Button,
  Drawer,
  Row,
  Col,
  Typography,
  Input,
  notification
} from 'antd'
import CourseExpand from './courseExpand'
import { useCallApi } from '@hooks'
import { LIST_API } from '@environments'

const { Option } = Select
const { Title } = Typography

const columns = [
  {
    title: 'Course Id',
    dataIndex: 'COURSE_ID',
    key: 'id'
  },
  {
    title: 'Course Name',
    dataIndex: 'COURSE_NAME',
    key: 'name'
  },
  {
    title: 'Credit',
    dataIndex: 'CREDIT',
    key: 'credit'
  },
  {
    title: 'Faculty Code',
    dataIndex: 'FCODE',
    key: 'fcode'
  }
]

const CourseManage = () => {
  const [visibleAdd, setVisibleAdd] = useState()
  const [visibleView, setVisibleView] = useState()
  const [selectedRows, setSelectedRows] = useState()
  const [semester, setSemester] = useState('201')
  const [faculty, setFaculty] = useState('F001')

  const [dataSource, setDataSource] = useState()

  const courseIdRef = useRef()
  const courseNameRef = useRef()
  const courseCreditRef = useRef()
  const courseFcodeRef = useRef()

  const { postMethod } = useCallApi()

  const fetchData = async () => {
    const res = await postMethod(LIST_API.LIST_COURSE, {
      semester,
      faculty
    })
    console.log(res)
    setDataSource(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onChangeSemester = useCallback(e => {
    setSemester(e)
  }, [])

  const onChangeFaculty = useCallback(e => {
    setFaculty(e)
  }, [])

  const createNewCourse = async () => {
    const res = await postMethod(LIST_API.ADD_COURSE, {
      course_id: courseIdRef.current.state.value,
      course_name: courseNameRef.current.state.value,
      credit: courseCreditRef.current.state.value,
      fcode: courseFcodeRef.current.state.value
    })

    console.log(res)

    if (res) {
      notification.success({
        message: 'Create Course Success',
        description: `You created to ${courseNameRef.current.state.value}`,
        placement: 'bottomRight'
      })
    } else {
      notification.error({
        message: 'Create Course Failed',
        description: `Failed`,
        placement: 'bottomRight'
      })
    }
    fetchData()
  }

  return (
    <div>
      <Row gutter={16}>
        <Col>
          <Row>
            <Col>
              <Title level={5}>Select Semeter:</Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Select
                style={{ width: 200 }}
                placeholder='Select semeter'
                optionFilterProp='children'
                onChange={onChangeSemester}
                defaultValue='201'
              >
                <Option value='202'>202</Option>
                <Option value='201'>201</Option>
                <Option value='192'>192</Option>
              </Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Title level={5}>Select falcuty:</Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Select
                style={{ width: 200 }}
                placeholder='Select falcuty'
                optionFilterProp='children'
                onChange={onChangeFaculty}
                defaultValue='F001'
              >
                <Option value='F001'>F001</Option>
                <Option value='F002'>F002</Option>
                <Option value='F003'>F003</Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
      <Drawer
        title='Create new Course'
        width={720}
        onClose={() => setVisibleAdd(false)}
        visible={visibleAdd}
        footer={
          <div
            style={{
              textAlign: 'right'
            }}
          >
            <Button
              onClick={() => setVisibleAdd(false)}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            <Button onClick={createNewCourse} type='primary'>
              Ok
            </Button>
          </div>
        }
      >
        <Row>
          Course Id: <Input ref={courseIdRef}></Input>
        </Row>
        <Row>
          Course Name: <Input ref={courseNameRef}></Input>
        </Row>
        <Row>
          Course Credit: <Input ref={courseCreditRef}></Input>
        </Row>
        <Row>
          Course Fcode: <Input ref={courseFcodeRef}></Input>
        </Row>
      </Drawer>
      <Drawer
        title='View Course'
        width={720}
        onClose={() => setVisibleView(false)}
        visible={visibleView}
        footer={
          <div
            style={{
              textAlign: 'right'
            }}
          >
            <Button
              onClick={() => setVisibleView(false)}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            <Button onClick={createNewCourse} type='primary'>
              Ok
            </Button>
          </div>
        }
      >
        <CourseExpand course={selectedRows}></CourseExpand>
      </Drawer>
      <div
        style={{
          margin: '10px 0px 10px 0'
        }}
      >
        <Button
          style={{
            marginRight: '4px'
          }}
          onClick={() => setVisibleAdd(true)}
        >
          Add
        </Button>
        <Button
          danger
          style={{
            marginRight: '4px'
          }}
        >
          Delete
        </Button>
        <Button
          type='dashed'
          style={{
            marginRight: '4px'
          }}
        >
          Edit
        </Button>
        <Button
          type='dashed'
          onClick={() => setVisibleView(true)}
          disabled={selectedRows == undefined ? true : false}
        >
          View
        </Button>
      </div>
      <Table
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(selectedRows, selectedRowKeys)
            setSelectedRows(selectedRows)
          }
        }}
        columns={columns}
        dataSource={dataSource}
        footer={() => <p>Total Course: 1</p>}
      ></Table>
    </div>
  )
}

export default CourseManage
