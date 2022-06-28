import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import StaffList from './StafflistComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffDetail from './StaffdetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';

const staffId = 0;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    };
  }


  render() {
    const StaffwithId = ({ match }) => {
      return (
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]} />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/stafflist' component={() => <StaffList staffs={this.state.staffs} />} />
          <Route path='/stafflist/:staffId' component={StaffwithId} />
          <Route path='/department' component={() => <Department departments={this.state.departments} />} />
          <Route path='/salary' component={() => <Salary staffs={this.state.staffs} />} />
          <Redirect to="/stafflist" />
        </Switch>
        <Footer />

      </div>
    )
  }
}
export default Main;