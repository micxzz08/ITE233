import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero'>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <hr />
        <ul>
          <li>
            <h4>"PANGASINAN'S PRODUCTS</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>"DRAGON'S SPICE"</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>"BOOK RESERVATION" </h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/366396232_670916551724592_8351530521408924884_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEMDzNbJHMrgXSKFEYEsZ2ZVG1huGTsDNdUbWG4ZOwM19_UvI5SHKtitvWEtjzDefcEXVv47MUkCaTj_ibKQuDo&_nc_ohc=HO42bmKCEAwAX8ezosj&_nc_ht=scontent.fbag1-2.fna&_nc_e2o=f&oh=03_AdSod7mITle_cbbgjjKgziUa2MG3Ra0L40AUZaPko8zXDw&oe=6506FA62" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 1</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/366736733_683450113135618_6560603183012519082_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGqxT-RIDfHcovvgxtU-HmLqMbHWxqbpPyoxsdbGpuk_IPwzj-BgIm0-x7DMVjLP8O2oULtrTzrnpM5hsML01en&_nc_ohc=ld4Rlh-pumIAX9bgl8S&_nc_ht=scontent.fbag1-2.fna&_nc_e2o=f&oh=03_AdSPL2suFEKDSFqgy0IhMl0Vn7ui816VfHhhuLImahmW2w&oe=6507064E" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 2</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/368189586_195409850201377_5279528349391279648_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHc3mluyFOANRdnw548cUnuBFjoHzlNQUQEWOgfOU1BREW_B3B26yO2hVh0gBFR32dLpJNAgNPgq0Tn4D173NZi&_nc_ohc=VXY_am9o8WoAX8UC1MG&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdS7-8L8cUe3QIGoMeqfyly1dyT2OBIwyx2qRAdtgDSOCQ&oe=65070F4B" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 3</h3>    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;