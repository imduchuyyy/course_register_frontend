import React, { useState, useEffect, useCallback } from 'react'
import { Table, Row, Col, Button, Drawer, Select, Typography } from 'antd'
import ViewClass from './viewClass'
import { useCallApi } from '@hooks'
import { LIST_API, API_LINK } from '@environments'

const { Option } = Select
const { Title } = Typography

const columns = [
  {
    title: 'Course Id',
    dataIndex: 'COURSE_ID',
    key: 'id'
  },
  {
    title: 'Class Id',
    dataIndex: 'CLASS_ID',
    key: 'idClass'
  },
  {
    title: 'Year Semeter',
    dataIndex: 'YEAR_SEMESTER',
    key: 'yearSemeter'
  },
  {
    title: 'Period',
    dataIndex: 'PERIOD',
    key: 'period'
  }
]

const ClassManage = () => {
  const [visibleAdd, setVisibleAdd] = useState()
  const [visibleView, setVisibleView] = useState()
  const [selectedRows, setSelectedRows] = useState()

  const [semester, setSemester] = useState('201')

  const { postMethod } = useCallApi()

  const [dataSource, setDataSource] = useState()

  const fetchData = useCallback(async () => {
    const res = await postMethod(LIST_API.LIST_CLASS, {
      semester
    })
    const result = res.map((item, index) => {
      return {
        ...item,
        key: index
      }
    })
    setDataSource(result)
  }, [semester])

  useEffect(() => {
    fetchData()
  }, [semester])

  const onChange = useCallback(e => {
    setSemester(e)
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
                <Option value='191'>191</Option>
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
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
        title='View Class'
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
        <ViewClass classSelected={selectedRows}></ViewClass>
      </Drawer>

      <div
        style={{
          margin: '10px'
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
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRows(selectedRows)
          }
        }}
        columns={columns}
        dataSource={dataSource}
        footer={() => <p>Total class: {dataSource?.length} </p>}
      />
    </div>
  )
}

export default ClassManage
