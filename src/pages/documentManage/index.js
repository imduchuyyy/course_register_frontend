import React, { useState, useCallback } from 'react'
import { Table, Row, Col, Button, Drawer, Select, Typography } from 'antd'

const { Option } = Select
const { Title } = Typography

const columns = [
  {
    title: 'ISBN',
    dataIndex: 'isbn',
    key: 'isbn'
  },
  {
    title: 'Document Name',
    dataIndex: 'docName',
    key: 'docName'
  },
  {
    title: 'Publish Name',
    dataIndex: 'publishName',
    key: 'publishName'
  }
]

const dataSource = [
  {
    isbn: '1',
    docName: 'ABC',
    publicName: 'ABC'
  }
]

const DocumentManage = () => {
  const [visibleAdd, setVisibleAdd] = useState()
  const [visibleView, setVisibleView] = useState()
  const [selectedRows, setSelectedRows] = useState()

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
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRows(selectedRows)
          }
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  )
}

export default DocumentManage
