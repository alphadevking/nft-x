import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/nftx-apocalypse.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsFillBrightnessHighFill } from 'react-icons/bs';
import Stack from 'react-bootstrap/Stack';

function NavArea() {

  const changeTheme = () => {
    // let theToggle = document.getElementById("change-color");
    // theToggle.toggleStatus = "on";
    // switch (theToggle.toggleStatus) {
    //   case "on":
    //     theToggle.toggleStatus = "off";
    //     theToggle.style.color = "purple";
    //     theToggle.style.backgroundColor = "yellow";
    //     break;
    //   case "off":
    //     theToggle.toggleStatus = "on";
    //     theToggle.style.color = "yellow";
    //     theToggle.style.backgroundColor = "purple";
    //     break;
    // }

    this.state = {
      theme: alert('hello')
    }

  }
  return (
    <>
      <Navbar bg="dark" variant="dark" className='position-fixed w-100 top'>
        <Container fluid>
          <Navbar.Brand href="#home"
          className="">
            <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block rounded-5"
            />{' '}
            NFT Apocalypse
          </Navbar.Brand>
          <Navbar.Brand>
          <Button variant="outline-light" id='change-theme' onClick={() =>changeTheme()}><BsFillBrightnessHighFill /></Button>{''}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavArea;