import React from 'react'
import { Select, Table } from 'antd'

const columns = [
  {
    title: 'Course Id',
    dataIndex: 'idCourse',
    key: 'id'
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
    title: 'Name Class',
    dataIndex: 'nameClass',
    key: 'nameClass'
  }
]

const dataSource = [
  {
    idCourse: '1',
    idClass: '2',
    yearSemeter: '20',
    nameClass: 'CO10'
  }
]

const CourseExpand = props => {
  const { course } = props
  return <Table columns={columns} dataSource={dataSource} />
}

export default CourseExpand
