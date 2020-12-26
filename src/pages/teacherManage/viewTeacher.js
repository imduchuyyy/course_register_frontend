import React, { useState, useCallback } from 'react'
import { Select, Table, Row, Col, Typography } from 'antd'

const { Title } = Typography
const { Option } = Select

const columns = [
  {
    title: 'Course Id',
    dataIndex: 'idCourse',
    key: 'idCourse'
  },
  {
    title: 'Class Id',
    dataIndex: 'idClass',
    key: 'idClass'
  },
  {
    title: 'Year Semeter',
    dataIndex: 'yearSemeter',
    key: 'yearSemeter'
  },
  {
    title: 'Credit',
    dataIndex: 'credit',
    key: 'credit'
  }
]

const dataSource = [
  {
    idCourse: '1',
    idClass: '2',
    yearSemeter: '201',
    credit: '4'
  }
]

const ViewTeacher = props => {
  const { teacher } = props

  const onChange = useCallback(e => {
    console.log(e)
  }, [])

  return (
    <div>
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
            defaultValue='201'
          >
            <Option value='202'>202</Option>
            <Option value='201'>201</Option>
            <Option value='192'>192</Option>
          </Select>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={dataSource}
        title={() => 'List class of teacher'}
      />
    </div>
  )
}

export default ViewTeacher
