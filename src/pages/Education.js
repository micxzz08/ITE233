import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
    <>
      <Container className='hero d-flex flex-column'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>My academic qualifications:</p>
        <hr/>
        <Container className='p-5'>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pangasinan Nation High School "PNHS" | Year 2015</Accordion.Header>
          <Accordion.Body>
          Pangasinan National High School (PNHS) is a public secondary located in Lingayen, Pangasinan. Since its establishment in 1906, the school provides curriculum-based quality education in the community.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Lyceum NorthWestern University "LNU" | Year 2020</Accordion.Header>
          <Accordion.Body>
          LNU will be a highly ranked internationally recognized private university, and a model of integrated flexible learning, research, innovation, and sustainable public engagement.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>PHINMA University of Pangasinan "UPANG" | Current</Accordion.Header>
          <Accordion.Body>
          The PHINMA – University of Pangasinan, also known as UPang, is a private and non-sectarian university located at Dagupan, Pangasinan, Philippines. It is a member of the PHINMA Education Network (PEN). It offers practically all undergraduate and graduate courses that Metro Manila universities offer.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </Container>
      </Container>
    </>
  );
};

export default Education;
