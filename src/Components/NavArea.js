import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/nftx-apocalypse.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavArea() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home"
          className="container-fluid w-100">
            <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top rounded-5"
            />{' '}
            NFT Apocalypse
          </Navbar.Brand>
          <Navbar.Brand>
          <Button variant="light">Night</Button>{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavArea;