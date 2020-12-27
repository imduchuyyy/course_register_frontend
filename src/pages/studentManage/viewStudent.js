import React, { useState, useCallback, useEffect } from 'react'
import { Select, Table } from 'antd'
import { useCallApi } from '@hooks'
import { LIST_API } from '@environments'

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

const ViewStudent = props => {
  const { student } = props
  const [dataSource, setDataSource] = useState()
  const [semester, setSemester] = useState('201')

  const { postMethod } = useCallApi()

  const fetchData = async () => {
    const res = await postMethod(LIST_API.LIST_CLASS_BY_STUDENT, {
      student_id: 'SD1800000',
      semester
    })
    console.log(res)
    setDataSource([
      {
        idCourse: '1',
        idClass: '2',
        yearSemeter: '201',
        credit: '4'
      }
    ])
  }

  useEffect(() => {
    fetchData()
  }, [])
  const onChange = useCallback(e => {
    setSemester(e)
  }, [])

  return (
    <div>
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
      <Table
        columns={columns}
        dataSource={dataSource}
        title={() => 'List class of student'}
        footer={() => 'Total credit: 4'}
      />
    </div>
  )
}

export default ViewStudent
