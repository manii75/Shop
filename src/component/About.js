import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider from '../asset/single-slide-hm1-2.png'
import { Row ,Col, Container} from 'react-bootstrap';
import slider2 from '../asset/single-slide-2.png'
import Home from './Home';
import { Divider } from '@mui/material';


import p1  from'../asset/dresss1.jpg';
import p2  from'../asset/dress3.jpg';
import p3  from'../asset/dress4.jpg';
import p4  from'../asset/dress5.jpg';
import blog from '../asset/blog-1.jpg';
import blog2 from '../asset/blog-2.jpg';
import blog3 from '../asset/blog-3.jpg';
import './about.css';

import './Product1';






export default function About() {

 



   
 

  

  return (
    <>
   
   <Carousel style={{background:"#088f8f"}}>

   <Carousel.Item>
    <Container>
          <Row>
            <Col >
            <h4 style={{marginTop:"150px",fontSize:"45px",fontFamily:"Chiller",fontWeight:"600"}}>Smart Product</h4>
            <h1 style={{fontSize:"85px",fontFamily:"Arial Rounded MT Bold"}} class="mt-3">Winter  Offer</h1>
            <h1 style={{fontFamily:"Chiller",fontSize:"92px",color:"white"}} class="mt-3">2024 Collection</h1>
           
            
            <div class="button_slide slide_right" style={{fontSize:"18px"}}>SHOP NOW </div>



            
            
            </Col>
            <Col>
                <img src={slider} alt='heh'/> </Col>
          </Row>
          </Container>
    
    
      </Carousel.Item>

{/* second slider */}
<Carousel.Item>
    <Container>
          <Row>
            <Col >
            <h4 style={{marginTop:"150px",fontSize:"45px",fontFamily:"Chiller",fontWeight:"600"}}>Smart Product</h4>
            <h1 style={{fontSize:"85px",fontFamily:"Arial Rounded MT Bold"}} class="mt-3">Winter  Offer</h1>
            <h1 style={{fontFamily:"Chiller",fontSize:"92px",color:"white"}} class="mt-3">2024 Collection</h1>
           
            <div class="button_slide slide_right" style={{fontSize:"18px"}}>SHOP NOW </div>



            
            
            </Col>
            <Col>
                <img src={slider2} alt='heh'/> </Col>
          </Row>
          </Container>
    
    
      </Carousel.Item>

   </Carousel>

   <Divider class="mt-5"></Divider>

   {/* home  section */}
   <Home class="mt-5"></Home>


<Divider class="mt-5"></Divider>

   <div class="dress-item"style={{background:"#088f8f", height:"1000px"}}>
    <div>
    <h1 class="text-center py-4" style={{fontSize:"55px",fontFamily:"Chiller",color:"white",textDecoration:"underline"}}>Product List</h1>     
    </div>
    <Container>
      <Row>

        {/* flip card one */}
        <Col>
        
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">

       <img src={p1} alt="Avatar"  style={{width:"80%",borderRadius:""}}   /> 
  
    </div>
    <div class="flip-card-back">
      <img  src={p2}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>

<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary "> SHOP  NOW</a>
</div>

        </Col>


        <Col>
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={p2} alt="Avatar"  style={{width:"80%",borderRadius:""}}/>
    </div>
    <div class="flip-card-back">
      <img  src={p3}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>


<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary "> SHOP  NOW</a>
</div>
      
        </Col>


        <Col>
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={p3} alt="Avatar"  style={{width:"80%",borderRadius:""}}/>
    </div>
    <div class="flip-card-back">
      <img  src={p4}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>


<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary "> SHOP  NOW</a>
</div>
      
        
        
        </Col>
       
       
       
        <Col>

                <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={p4} alt="Avatar"  style={{width:"80%",borderRadius:""}}/>
    </div>
    <div class="flip-card-back">
      <img  src={p1}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>


<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary "> SHOP  NOW</a>
</div>
        
        
        </Col>




      </Row>
      </Container>
      <Divider class="mt-5"></Divider>
      <Container >
      <Row >
        <Col>
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={p3} alt="Avatar"  style={{width:"80%",borderRadius:""}}/>
    </div>
    <div class="flip-card-back">
      <img  src={p4}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>

<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary "> SHOP  NOW</a>
</div>
        </Col>


        <Col>
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={p4} alt="Avatar"  style={{width:"80%",borderRadius:""}}/>
    </div>
    <div class="flip-card-back">
      <img  src={p2}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>


<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary ">  SHOP NOW</a>
</div>
        </Col>


        <Col>
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={p1} alt="Avatar"  style={{width:"80%",borderRadius:""}}/>
    </div>
    <div class="flip-card-back">
      <img  src={p3}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>


<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary ">  SHOP NOW</a>
</div>
        
        </Col>

        <Col>

        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={p4} alt="Avatar"  style={{width:"80%",borderRadius:""}}/>
    </div>
    <div class="flip-card-back">
      <img  src={p3}  alt='hhyy' style={{width:"80%",borderRadius:"5%"}}/>
    </div>
  </div>
</div>


<div class="mt-4 bubtn">
<a href='/product1' class="btn btn-primary "> SHOP NOW</a>
</div>
       </Col>


      </Row>
      </Container>
      
   
      
   </div>


   {/* blog section */}

<section class="mt-5 blogingside">
   <Container>
    <div class="py-3">
      <h1 class="text-center" style={{fontFamily:"Chiller"}}>BLOG</h1>
    </div>
    <Row>

      <Col>
      
<img src={blog} alt='blog' class="blogimg1" />

<div class="blog1text">
  <h4 class="text-center text-light py-3">A guide to latest <br/> trends</h4>

</div>
      </Col>


      <Col>
      <img src={blog2} alt='blog' class="blogimg1"/>
      <div class="blog1text">
  <h4 class="text-center text-light py-3 ">A guide to latest <br/> trends</h4>

</div>
      </Col>



      <Col>
      <img src={blog3} alt='blog' class="blogimg1"/>
      <div class="blog1text">
  <h4 class="text-center text-light py-3">A guide to latest <br/> trends</h4>

</div>
      </Col>
      
    </Row>
   </Container>
   </section>




   {/* foooter section */}
   <section>

   
<footer class="text-center text-lg-start text-muted mt-5" style={{background:" #088f8f", color:"white"}}>
  

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span class="text-light">Get connected with us on social networks:</span>
    </div>
  
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
 
  <section class="" style={{color:"white"}}>
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        

        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        

        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        

        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      
      </div>
      
    </div>
  </section>
  

  
</footer>

   </section>
  
    </>
  )
}


