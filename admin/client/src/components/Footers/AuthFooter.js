/*eslint-disable*/

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-9">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://rank-word-version1-5.herokuapp.com/login"
                  target="_blank"
                >
                  jobs library
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="https://rank-word-version1-5.herokuapp.com/login"
                    target="_blank"
                  >
                    Jobs 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://rank-word-version1-5.herokuapp.com/login"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://rank-word-version1-5.herokuapp.com/login"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://rank-word-version1-5.herokuapp.com/login"
                    target="_blank"
                  >
                   License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
