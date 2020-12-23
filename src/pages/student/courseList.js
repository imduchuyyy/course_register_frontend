import {Button} from 'antd';
import React from 'react' 

export const courseList = [
    {
        course_id: 'C01',
        course_name: 'Mon A',
        credit: 2
    },
    {
        course_id: 'C02',
        course_name: 'Mon C',
        credit: 1
    },
    {
        course_id: 'C03',
        course_name: 'Mon E',
        credit: 2
    },
    {
        course_id: 'C04',
        course_name: 'Mon B',
        credit: 2
    },
    {
        course_id: 'C05',
        course_name: 'Mon D',
        credit: 3
    },
    {
        course_id: 'C06',
        course_name: 'Mon F',
        credit: 3
    },
    {
        course_id: 'C07',
        course_name: 'Mon G',
        credit: 3
    },
    {
        course_id: 'C08',
        course_name: 'Mon H',
        credit: 3
    }
];


export const column = [
    {
      title: 'Mã môn học',
      dataIndex: 'course_id',
      key: 'course_id',
      width: 200
    },
    {
      title: 'Tên môn học',
      dataIndex: 'course_name',
      key: 'course_id',
    },
    {
      title: 'Số tín chỉ',
      dataIndex: 'credit',
      key: 'course_id',
      width: 150
    },
    {
        title: '',
        dataIndex: '',
        key: '',
        width: 150,
        render: () => <Button type="primary" shape="round">Đăng ký</Button>
    }
  ];
