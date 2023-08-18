import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center' >
        <Row className='hero gap-5'>
          <Col className='d-flex justify-content-center align-items-center'>
            <Image src='https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/337165377_119818207728178_7286435727942883573_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHChjfMqfzbEN9kvdogUbfMqKavTYlhAeSopq9NiWEB5EBG0mTARj6Z-AWwTAPsYv6tEXxkhErSxPJ65jiY_UZd&_nc_ohc=8BOG6S_5isAAX-7nWC7&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBBOpejWVed8Xgl4wfCm481AEd2pxTRlyqsRNZKv5RV8Q&oe=64E4B164' className='w-100 h-100 bg-black'style={{minWidth:250,minHeight:250}} rounded fluid/>
          </Col>
          <Col>
            <h1 className='display-1 fw-bold'>Michael Kearney Lameg</h1>
            <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
            <hr />
            <p>
              A 21 year's old BSIT Student in PHINMA University of Pangasinan who loves coffee and programming.
            </p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/work'>
                <Button className='btn-lg' variant='dark'>View Work</Button>
              </Link>
              <SocialLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
