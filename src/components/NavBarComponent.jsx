import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const NavBarComponent = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/favorite">
          Favorite
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavBarComponent
