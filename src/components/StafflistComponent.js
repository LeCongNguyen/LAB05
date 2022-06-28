import React from 'react';
import { Card, CardImg, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaff({ staff }) {
  return (
    <Link to={`/stafflist/${staff.id}`}>
      <Card className='mb-4'>
        <CardImg src={staff.image} />
        <CardText className='align-center m-2'>{staff.name}</CardText>
      </Card>
    </Link>
  )
}

function StaffList({ staffs }) {
  const staffList = staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6 col-6">
        <RenderStaff staff={staff} />
      </div>
    )
  })
  return (
    <div className='container'>
      <div className='row mt-4 mb-4'>
        <h4 className='col-12 m-0'>Nhân viên</h4>
      </div>
      <div className="row">
        {staffList}
      </div>
    </div>
  )
}

export default StaffList;