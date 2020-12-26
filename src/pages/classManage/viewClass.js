import React, { useState, useCallback } from 'react'
import { Select, Table, Row, Col } from 'antd'

const { Option } = Select

const columnsStudent = [
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

const dataSourceStudent = [
  {
    key: '1',
    idStudent: '1',
    fname: 'Duc',
    lname: 'Huy',
    gender: 'name',
    email: 'duchuy@gmail.com'
  }
]

const columnsTeacher = [
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

const dataSourceTeacher = [
  {
    key: '1',
    idStudent: '1',
    fname: 'Duc',
    lname: 'Huy',
    gender: 'name',
    email: 'duchuy@gmail.com'
  }
]

const ViewClass = props => {
  const { classSelected } = props
  console.log(classSelected)

  const onChange = useCallback(e => {
    console.log(e)
  }, [])

  return (
    <div>
      <Row>
        <Col>Document: ABC</Col>
      </Row>
      <Table
        columns={columnsStudent}
        dataSource={dataSourceStudent}
        title={() => <p>List Student</p>}
        footer={() => <p>Total student: 1</p>}
      />
      <Table
        columns={columnsTeacher}
        dataSource={dataSourceTeacher}
        title={() => <p>List Teacher</p>}
        footer={() => <p>Total teacher: 1</p>}
      />
    </div>
  )
}

export default ViewClass
