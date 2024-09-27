import React from 'react';
import './Mandeep.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bodyimg from'../asset/teenager-student-arm-studio-body-removebg-preview.png'
import './Home.css'


export default function Home() {

  
  return (
    <>


  <div className='mainbody'>
    <Container>
      <Row>
      <Col>
        <img  src={bodyimg} alt='text' style={{marginTop:"40px"}} />
        
        </Col>


       <Col>
        <div class=" py-5 mt-5" style={{color:"white",marginTop:"85px"}}>
        <h3 style={{fontSize:"40px",color:"black",fontWeight:"700",marginTop:"45px"}}>Save Up To Your 20% Off</h3>
          <h1 class="mt-4" style={{fontSize:"50px"}}>NEW FLORENCE WRAP</h1>
       <p style={{fontSize:"18px"}} class="mt-3">A dress is a garment predominantly worn by women or girls consisting of a skirt with an attached bodice It consists of a top piece that covers the torso and ...</p>
        </div>

          <div class="button_slide slide_right" style={{fontSize:"18px"}}>SHOP NOW </div>
        </Col>



       
      </Row>
    </Container>

  </div>




       



    </>
  )
}
