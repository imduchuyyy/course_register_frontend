import React, { useState, useCallback, useEffect } from 'react'
import { Table, Tag, Select, Button, Drawer, Row, Col, Typography } from 'antd'
import CourseExpand from './courseExpand'

const { Option } = Select
const { Title } = Typography

const columns = [
  {
    title: 'Course Id',
    dataIndex: 'idCourse',
    key: 'id'
  },
  {
    title: 'Course Name',
    dataIndex: 'nameCourse',
    key: 'name'
  },
  {
    title: 'Credit',
    dataIndex: 'credit',
    key: 'credit'
  },
  {
    title: 'Faculty Code',
    dataIndex: 'fcode',
    key: 'fcode'
  },
  {
    title: 'Main Document',
    dataIndex: 'mainDocument',
    key: 'mainDocument'
  },
  {
    title: 'Total student',
    dataIndex: 'totalStudent',
    key: 'totalStudent'
  }
]

const dataSource = [
  {
    idCourse: 1,
    nameCourse: 'coding',
    credit: '3',
    fcode: 'khmt',
    totalStudent: 1,
    mainDocument: 'ABC'
  }
]

const CourseManage = () => {
  const [visibleAdd, setVisibleAdd] = useState()
  const [visibleView, setVisibleView] = useState()
  const [selectedRows, setSelectedRows] = useState()

  const onChange = useCallback(e => {
    console.log(e)
  }, [])

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
                onChange={onChange}
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
                onChange={onChange}
                defaultValue='201'
              >
                <Option value='202'>202</Option>
                <Option value='201'>201</Option>
                <Option value='192'>192</Option>
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
            <Button onClick={() => setVisibleAdd(false)} type='primary'>
              Ok
            </Button>
          </div>
        }
      >
        <div></div>
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
            <Button onClick={() => setVisibleView(false)} type='primary'>
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
