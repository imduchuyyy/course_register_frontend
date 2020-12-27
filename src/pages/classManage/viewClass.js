import React, { useState, useCallback, useEffect } from 'react'
import { Select, Table, Row, Col } from 'antd'
import axios from 'axios'
import { LIST_API } from '@environments'
import { useCallApi } from '@hooks'

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

const ViewClass = props => {
  const { classSelected } = props

  const [dataSource, setDataSource] = useState()

  const { postMethod } = useCallApi()

  const fetchData = async () => {
    const res = await postMethod(LIST_API.VIEW_CLASS, {
      course_id: classSelected.COURSE_ID,
      class_id: classSelected.CLASS_ID
    })
    console.log(res)

    setDataSource({
      students: res.listStudent,
      teachers: res.listInstructor,
      document: res.listDocument
    })
  }

  useEffect(() => {
    fetchData()
  }, [classSelected])

  const onChange = useCallback(e => {
    console.log(e)
  }, [])

  if (!dataSource) {
    return <div></div>
  }

  return (
    <div>
      {/* <Table
        columns={columnsStudent}
        dataSource={dataSource.students}
        title={() => <p>List Student</p>}
        footer={() => <p>Total student: 1</p>}
      /> */}
      <Table
        columns={columnsStudent}
        dataSource={dataSource.students}
        title={() => <p>List Student</p>}
        footer={() => <p>Total student: {dataSource.students.length} </p>}
      />
      <Table
        columns={columnsTeacher}
        dataSource={dataSource.teachers}
        title={() => <p>List Teacher</p>}
        footer={() => <p>Total teacher: {dataSource.teachers.length} </p>}
      />
    </div>
  )
}

export default ViewClass
