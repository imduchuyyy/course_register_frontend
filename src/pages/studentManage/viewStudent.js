import React, { useState, useCallback } from 'react'
import { Select, Table } from 'antd'

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
    },
]

const dataSource = [
    {
        idCourse: '1',
        idClass: '2',
        yearSemeter: '201',
        credit: '4'
    }
]

const ViewStudent = (props) => {
    const { student } = props
    
    const onChange = useCallback((e) => {
        console.log(e)
    }, [])

    return (
        <div>
            <Select
                style={{ width: 200 }}
                placeholder="Select semeter"
                optionFilterProp="children"
                onChange={onChange}
                defaultValue='201'
            >
                <Option value="202">202</Option>
                <Option value="201">201</Option>
                <Option value="192">192</Option>
            </Select>
            <Table 
                columns={columns}
                dataSource={dataSource}
                title={() => "List class of student"}
                footer={() => "Total credit: 4"}
            />
        </div>
    )
}

export default ViewStudent
