import { Link } from 'react-router-dom';
import { CardImg, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Moment from 'react-moment';

function StaffDetail({ staff }) {
    if (staff != null)
        return (
            <div className='container mb-5'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/stafflist'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='row'>
                    <CardImg width="100%" src={staff.image} className='col-lg-3 col-md-4 col-sm-12 col-12' />
                    <CardText className='col-lg-9 col-md-8 col-sm-12 col-12 mt-4'>
                        <h5>Họ và tên: {staff.name}</h5>
                        <p>
                            Ngày sinh: {<Moment format='DD/MM/YYYY'>{staff.doB}</Moment>} <br />
                            Ngày vào công ty: {<Moment format='DD/MM/YYYY'>{staff.startDate}</Moment>} <br />
                            Phòng ban: {staff.department.name} <br />
                            Số ngày nghỉ còn lại: {staff.annualLeave} <br />
                            Số ngày làm thêm: {staff.overTime}
                        </p>
                    </CardText>
                </div>
            </div>
        )
    else
        return (
            <div>NULL</div>
        )
}

export default StaffDetail;