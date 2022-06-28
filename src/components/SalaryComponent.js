import { Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';

function Salary({ staffs }) {
    const salaryShow = staffs.map((staff) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <Card className='mt-4'>
                    <CardTitle className='ml-2'>{staff.name}</CardTitle>
                    <CardText className='ml-2'>
                        Mã nhân viên: {staff.id} <br/>
                        Hệ số lương: {staff.salaryScale} <br/>
                        Số ngày làm thêm: {staff.overTime} <br/>
                        Lương: {Math.round(staff.salaryScale*3000000 + staff.overTime*200000)} VND
                    </CardText>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/stafflist'>Nhân viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                {salaryShow}
            </div>
        </div>
    )
}

export default Salary;