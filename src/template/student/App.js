import React from 'react';
import { Select, Input, Table, Button, Tooltip } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { courseList, column } from './courseList';
import { successList } from './sucessList';
import './App.css';


export default class App extends React.Component {
	render = () => (
		<div className="registerContainer">
			<p className="title">Đăng ký môn học</p>
			<div className="outerComponent">
				<p className="title" >Đăng ký môn học năm học 2020-2021</p>
				<div className="content">
					<div className="component">
						<p className="title">Chọn học kỳ</p>
						<Select style={{ width: 200 }} placeholder="Chọn học kỳ">
							<Select.Option value="1">HK 181</Select.Option>
							<Select.Option value="2">HK 182</Select.Option>
							<Select.Option value="3">HK 191</Select.Option>
						</Select>
					</div>
					<div className="component">
						<p className="title">Chọn môn học đăng ký</p>
						<Input.Search
							placeholder="Mã môn học/Tên môn học"
							allowClear
							enterButton
    					/>
						<Table 
							scroll={{y: 350}} 
							columns={column} 
							dataSource={courseList}
							bordered={true}
							pagination={false} 
						/>
					</div>
				</div>
				<div className="component" style={{margin: '15px'}}>
					<p className="title">Phiếu đăng ký</p>
					<div className="outerComponent">
						<p className="title" >Danh sách đã đăng ký</p>
						<div className="list-item">
							{successList.map((element, index) => (
								<div className="item">
									<div className="item-title">
										<p>{index + 1}</p>
										<p>{element.course_id + ' '} - {' ' + element.course_name}</p>
										<p>{element.credit.toFixed(1)}</p>
									</div>
									<div className="item-info">
										<div>
											<p>Nhóm lớp</p>
											<p>{element.class_group}</p>
										</div>
										<div>
											<p>Đăng ký/Sĩ số</p>
											<p>{element.amount}/{element.max_amount}</p>
										</div>
										<div>
											<p>Giảng viên</p>
											<p>{element.instructor_name}</p>
										</div>
										<div>
											<p>Thoả điều kiện DK</p>
											<CheckOutlined className="icon" />
										</div>
										<div>
											<p>Đã gửi đăng ký</p>
											<CheckOutlined className="icon" />
										</div>
										<div>
											<Tooltip title="Hủy đăng ký môn học">
												<Button danger shape="circle" icon={<DeleteOutlined />} />
											</Tooltip>
										</div>
									</div>
									<div className="item-sub-info">
										<div>
											<p>Thứ</p>
											<p>{element.dayweek}</p>
										</div>
										<div>
											<p>Tiết</p>
											<p>{element.period}</p>
										</div>
										<div>
											<p>Tuần học</p>
											<p>{element.weeks}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<p>Tổng số môn đăng ký: <span>5</span></p>
					<p>Tổng số tín chỉ đăng ký: <span>18</span></p>
				</div>
			</div>
		</div>
	);
}