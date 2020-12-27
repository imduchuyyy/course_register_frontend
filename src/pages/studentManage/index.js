import React, { useState, useCallback, useEffect } from 'react'
import { Table, Row, Col, Button, Drawer, Select, Typography } from 'antd'
import ViewStudent from './viewStudent'
import { useCallApi } from '@hooks'
import { LIST_API } from '@environments'

const { Option } = Select
const { Title } = Typography

const columns = [
  {
    title: 'Student Id',
    dataIndex: 'idStudent',
    key: 'id'
  },
  {
    title: 'Fist Name',
    dataIndex: 'fname',
    key: 'fname'
  },
  {
    title: 'Last Name',
    dataIndex: 'lname',
    key: 'lname'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }
]

const StudentManage = () => {
  const [visibleAdd, setVisibleAdd] = useState()
  const [visibleView, setVisibleView] = useState()
  const [selectedRows, setSelectedRows] = useState()
  const [dataSource, setDataSource] = useState()
  const [fcode, setFcode] = useState('F001')

  const { postMethod } = useCallApi()

  const fetchData = async () => {
    const res = await postMethod(LIST_API.LIST_STUDENTS, {
      fcode
    })
    setDataSource([
      {
        key: '1',
        idStudent: '1',
        fname: 'Duc',
        lname: 'Huy',
        gender: 'name',
        email: 'duchuy@gmail.com'
      }
    ])
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onChange = useCallback(e => {
    setFcode(e)
  }, [])

  return (
    <div>
      <Drawer
        title='Create New Student'
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
        title='View Student'
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
        <ViewStudent student={selectedRows}></ViewStudent>
      </Drawer>
      <Row>
        <Col>
          <Title level={5}>Select Faculty:</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Select
            style={{ width: 200 }}
            placeholder='Select Faculty'
            optionFilterProp='children'
            onChange={onChange}
            defaultValue='F001'
          >
            <Option value='F001'>F001</Option>
            <Option value='F002'>F002</Option>
            <Option value='F003'>F003</Option>
          </Select>
        </Col>
      </Row>
      <div
        style={{
          margin: '10px 0 10px 0'
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
          disabled={selectedRows == undefined ? true : false}
        >
          Delete
        </Button>
        <Button
          type='dashed'
          style={{
            marginRight: '4px'
          }}
          disabled={selectedRows == undefined ? true : false}
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
            setSelectedRows(selectedRows)
          }
        }}
        dataSource={dataSource}
        columns={columns}
        footer={() => <p>Total Student Registed: 1</p>}
      />
    </div>
  )
}

export default StudentManage
