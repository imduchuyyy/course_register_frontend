import React, { useState, useCallback, useEffect } from 'react'
import {
  Table,
  Tag,
  Space,
  Button,
  Drawer,
  Select,
  Typography,
  Row,
  Col
} from 'antd'
import ViewTeacher from './viewTeacher'
import { useCallApi } from '@hooks'
import { LIST_API } from '@environments'

const { Option } = Select
const { Title } = Typography

const columns = [
  {
    title: 'Teacher Id',
    dataIndex: 'idTeacher',
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

const TeacherManage = () => {
  const [visibleAdd, setVisibleAdd] = useState()
  const [visibleView, setVisibleView] = useState()
  const [selectedRows, setSelectedRows] = useState()
  const [dataSource, setDataSource] = useState()

  const { postMethod } = useCallApi()

  const fetchData = async () => {
    const res = await postMethod(LIST_API.LIST_TEACHERS)
    setDataSource([
      {
        key: '1',
        idTeacher: '1',
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
    console.log(e)
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
        title='View Teacher'
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
        <ViewTeacher></ViewTeacher>
      </Drawer>
      <Row>
        <Col>
          <Title level={5}>Select Semeter:</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Select
            style={{ width: 200 }}
            placeholder='Select Semeter'
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
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRows(selectedRows)
          }
        }}
      />
    </div>
  )
}

export default TeacherManage
