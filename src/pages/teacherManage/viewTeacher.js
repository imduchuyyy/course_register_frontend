import React, { useState, useCallback, useEffect } from 'react'
import { Select, Table, Row, Col, Typography } from 'antd'
import { useCallApi } from '@hooks'
import { LIST_API } from '@environments'

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
    title: 'Year Semester',
    dataIndex: 'yearSemester',
    key: 'yearSemester'
  },
  {
    title: 'Credit',
    dataIndex: 'credit',
    key: 'credit'
  }
]

const ViewTeacher = props => {
  const { teacher } = props

  const { postMethod } = useCallApi()
  const [dataSource, setDataSource] = useState()
  const [selectSemester, setSelectSemester] = useState()

  const fetchData = async () => {
    const res = await postMethod(LIST_API.LIST_CLASS_BY_TEACHER)
    setDataSource([
      {
        idCourse: '1',
        idClass: '2',
        yearSemester: '201',
        credit: '4'
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
