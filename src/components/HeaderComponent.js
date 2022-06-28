import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse} from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !(this.state.isNavOpen)
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="primary" dark expand="md">
          <div className="container">
            <NavbarToggler navbar onClick={this.toggleNav} className='mr-4' />
            <NavbarBrand
              className="mr-auto respond-hide"
              href="/">
              <img
                src="assets/images/logo.png"
                width="50"
                alt="company logo"
                className="mr-3"
              />
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav navbar>
                <NavItem>
                  <Link
                    className="nav-link mr-2"
                    to="/stafflist">
                    <span className="fa fa-users fa-lg mr-1"></span>
                    Nhân viên
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link mr-2"
                    to="/department">
                    <span className="fa fa-address-card-o fa-lg  mr-1"></span>
                    Phòng ban
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/salary">
                    <span className="fa fa-money fa-lg  mr-1"></span>
                    Bảng lương
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;