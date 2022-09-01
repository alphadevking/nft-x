import React from 'react';
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

    this.state = ({
      theme: alert('hello')
      }
    )

    this.setState = {
      theme: alert('hey')
    }
  }

  const themeHover = () =>{
    this.setState = this
  }

  return (
    <>
      <Navbar variant="dark" className='position-fixed w-100 fixed-top' style={{backgroundColor: 'black'}}>

        <Container fluid>

          <Navbar.Brand href="#home"
          className="">
            <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block rounded-5"
            />{' '}
            <row style={{fontWeight: `bold`}}>NFT Apocalypse</row>
          </Navbar.Brand>

          <Navbar.Brand className=''>

            <button className='text-warning bg-real-dark rounded-5 border-0 mt-1'><BsFillBrightnessHighFill className='mb-1' style={{fontSize: `27px`}}/></button>

          </Navbar.Brand>

        </Container>
        
      </Navbar>
    </>
  );
}

export default NavArea;