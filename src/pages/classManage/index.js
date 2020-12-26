import React, { useState } from 'react'
import { Table, Tag, Space, Button, Drawer, Select } from 'antd'
import ViewClass from './viewClass'

const { Option } = Select

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

const ClassManage = () => {
  const [visibleAdd, setVisibleAdd] = useState()
  const [visibleView, setVisibleView] = useState()
  const [selectedRows, setSelectedRows] = useState()

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
        footer={() => <p>Total class: 1</p>}
      />
    </div>
  )
}

export default ClassManage
