import React, { useState } from 'react'
import { Table, Tag, Space, Button, Drawer, Select } from 'antd'
const { Option } = Select

const columns = [
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

const Class = () => {
    const [visibleAdd, setVisibleAdd] = useState()
    const [visibleView, setVisibleView] = useState()

    return (
        <div>
            <Drawer
                title="Create New Student"
                width={720}
                onClose={() => setVisibleAdd(false)}
                visible={visibleAdd}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={() => setVisibleAdd(false)} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={() => setVisibleAdd(false)} type="primary">
                            Ok
                        </Button>
                    </div>
                }
            >
                            <div></div> 
            </Drawer>
            <Drawer
                title="View Student"
                width={720}
                onClose={() => setVisibleView(false)}
                visible={visibleView}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={() => setVisibleView(false)} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={() => setVisibleView(false)} type="primary">
                            Ok
                        </Button>
                    </div>
                }
            >
                            <div></div>    
                        </Drawer>

            <div style={{
                margin: '10px'
            }}>
                <Button 
                    style={{
                        marginRight: '4px'
                    }}
                    onClick={() => setVisibleAdd(true)}
                >Add</Button>
                <Button danger style={{
                    marginRight: '4px'
                }}>Delete</Button>
                <Button 
                    type="dashed"
                    style={{
                        marginRight: '4px'
                    }}
                >
                    Edit
                </Button>
                
                <Button 
                    type="dashed"
                    onClick={() => setVisibleView(true)}
                >
                    View
                </Button>
            </div>
            <Table columns={columns} ></Table>   
        </div>
    )
}

export default Class
