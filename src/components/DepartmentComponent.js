import { Card, CardTitle, CardText } from "reactstrap";


function Department({ departments }) {
    const DepartmentInfo = departments.map((dpmt) => {
        return (
            <div key={dpmt.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
            <Card className="mt-4">
                <CardTitle className='ml-2'>{dpmt.name}</CardTitle>
                <CardText className='ml-2'>Số lượng nhân viên: {dpmt.numberOfStaff}</CardText>
            </Card>
            </div>
        )
    }
    )
    return (
        <div className="container">
            <div className="row mt-4">
                <h4 className="col-12 m-0">Phòng ban</h4>
            </div>
            <div className="row">
                {DepartmentInfo}
            </div>
        </div>
    )
}

export default Department;