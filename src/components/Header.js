import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../assets/images/1.png';
import StoryUI from './StoryUI';
// import logo2 from '../assets/images/png-clipart-letter-instagram-font-instagram-text-logo-thumbnail.png';
const Header = () => {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container className=''>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo1}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />{' '}
 {/* <img
              alt=""
              src={logo2}
              width="200"
              height="200"
              className="d-inline-block align-top"
            />{' '} */}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <StoryUI/>
    </>
  )
}

export default Header
