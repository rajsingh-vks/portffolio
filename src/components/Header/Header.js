import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();
        this.state = {
          loader: true,
          sticky: false,
          isOpen: false
        };
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.scrollFunction, true);
      };
      componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollFunction, true);
      }
      scrollFunction = () => {
        var navbar = this.navRef;
        var stickybar = navbar.current.offsetTop;
        if (window.pageYOffset > stickybar) {
          this.setState({ sticky: true });
        } else {
          this.setState({ sticky: false });
        }
    };

    render() {
        return (
            <div>
               <header className={
              this.state.sticky ? `sticky-wrapper sticky` : `sticky-wrapper`
            } ref={this.navRef}>
                <div className="container">
                    <Navbar.Brand href="#home">
                    <Link to="/">
                        <img src="../images/logo.png" alt="Raaz Portfolio Logo"/>
                    </Link>
                    </Navbar.Brand>
                    <Navbar collapseOnSelect expand="lg" variant="light">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Link to="/about">About</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            </Nav>
                            <Nav className="social_track">
                            <Nav.Link  href="https://www.naukri.com/mnjuser/profile?id=&orgn=homepage" target="_blank">
                                <img src="../images/favicon.ico" alt="naukari"/>
                            </Nav.Link>
                            <Nav.Link  href="https://www.linkedin.com/in/raj-singh-11731010b/" target="_blank">
                                <i className="fa fa-linkedin"></i>
                            </Nav.Link>
                            <Nav.Link  href="https://www.facebook.com/profile.php?id=100006921578541" target="_blank">
                                <i className="fa fa-facebook"></i>
                            </Nav.Link>
                            <Nav.Link  href="https://www.instagram.com/rajsingh.raavan/" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </Nav.Link>
                            <Nav.Link  href="https://twitter.com/Raaz__Singh" target="_blank">
                                <i className="fa fa-twitter"></i>
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                </header> 
            </div>
        )
    }
}

export default Header
