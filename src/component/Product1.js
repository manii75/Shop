import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import product1 from '../asset/dress7.jpg';
import { Divider } from '@mui/material';
import './product.css';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

import p1  from'../asset/dresss1.jpg';
import p2  from'../asset/dress3.jpg';
import p3  from'../asset/dress4.jpg';
import { BorderBottom } from '@mui/icons-material';
// import p4  from'../asset/dress5.jpg';


export default function Product1() {
  function btn1(){
    document.getElementById("displayone").style.display="block";
    document.getElementById("displaytwo").style.display="none";
    document.getElementById("displaythree").style.display="none";
  }
  function btn2(){
    document.getElementById("displayone").style.display="none";
    document.getElementById("displaytwo").style.display="block";
    document.getElementById("displaythree").style.display="none";
  }
  function btn3(){
    document.getElementById("displayone").style.display="none";
    document.getElementById("displaytwo").style.display="none";
    document.getElementById("displaythree").style.display="block";
  }


  return (
    <>
    
    <div class="Product-full-details mt-5">
    
    <Container>
        <Row>
            <Col>
            <img src={product1} style={{width:"80%"}}/>

            </Col>
            {/* product 2 */}
            <Col>
                    <div class="prodcutpart2  py-3">
                <h2 class="mt-3 ">Lorem ipsum fashion female top</h2>
                <h4 class="mt-3 ">€35.6</h4>
        
                <StarBorderPurple500OutlinedIcon  style={{color:"white",fontSize:"32px"}}/>
                
               <StarBorderPurple500OutlinedIcon  style={{color:"white",fontSize:"32px"}}/>

               <StarBorderPurple500OutlinedIcon  style={{color:"white",fontSize:"32px"}}/>
               
               <StarBorderPurple500OutlinedIcon style={{color:"white",fontSize:"32px"}}/>
               
                <StarBorderPurple500OutlinedIcon style={{color:"white",fontSize:"32px"}}/>
               
               <br/>

                <p class="mt-4 ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
               


                <Divider style={{border:"1px solid black"}}></Divider>
                <div class="button_slide slide_right mt-5" style={{fontSize:"18px",background:"black"}}>SHOP NOW </div>


                <h5 class="mt-5" style={{color:"white"}}>Categories :
                fashion women</h5>

                <h5 class="mt-3"style={{color:"white"}}>
                Tags : fashion   women  tops  leeveless
                </h5>

                


                </div>
            </Col>
 </Row>
 
 </Container>
      </div>

       {/* product full details */}
       <section class="product-list mt-5" style={{height:"300px"}}>
        <Container>

        <div class="product-heading  d-flex">
          
          <h4 onClick={btn1} class="ms-5" >Additional Information</h4>
          
          <h4 onClick={btn2} >Description</h4>
          <h4  onClick={btn3}>Reviews(2)</h4>
          
        </div>
        <Divider style={{borderBottom:"2px solid black"}}></Divider>
        {/* display screen */}
        
        <div class="mt-5">
              <div id="displayone" >
                <p> Weight  gram:-  <span class="ms-5"> 400 g </span></p>
                <p>Dimensions:- <span class="ms-5">10 x 10 x 15 cm</span></p>
                <p> Materials:-<span class="ms-5"> 60% cotton, 40% polyester</span></p>
                <p>Other Info:- <span class="ms-5"> American heirloom jean shorts pug seitan letterpress</span></p>
              </div>
              <div id="displaytwo" style={{display:"none"}} >
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
              <div id="displaythree"style={{display:"none"}} >my</div>
        </div>
        </Container>
       </section>



        {/* related product */}
<div style={{height:"800px", background:" rgb(246,246,246)"}} class="mt-5 ">
    <Container>

        <div class="py-5">
            <h2 class="text-center" style={{fontFamily:"Bahnschrift Condensed",fontSize:"40px",textDecoration:"underline"}}>Related Product</h2>
        </div>
 <Row>
 <Col>

 <div class="slideimg">
  <img src={p1} alt='Avatar' class="image shadow" />
  <div class="overlay">
    <div class="text">
        <h6>lOREM ISPUM JEACKET</h6>
        <p>$112</p>
        <button>Buy</button>
    </div>
  </div>
</div>

</Col>


<Col>
<div class="slideimg3">
  <img src={p2} alt='Avatar' class="image3 shadow"/>
  <div class="overlay3">
    <div class="text">
        <h6>lOREM ISPUM JEACKET</h6>
        <p>$112</p>
        <button>Buy</button>
    </div>
  </div>
</div>

</Col>


<Col>
<div class="slideimg3">
  <img src={p3} alt='Avatar' class="image3 shadow"/>
  <div class="overlay3">
    <div class="text">
        <h6>lOREM ISPUM JEACKET</h6>
        <p>$112</p>
        <button>Buy</button>
    </div>
  </div>
</div>



</Col>
<Col>
<div class="slideimg3">
  <img src={p3} alt='Avatar' class="image3 shadow"/>
  <div class="overlay3">
    <div class="text">
        <h6>lOREM ISPUM JEACKET</h6>
        <p>$112</p>
        <button>Buy</button>
    </div>
  </div>
</div>



</Col>
</Row>

{/* row two */}
<Row>



<Col>
<div class="slideimg3 mt-5">
  <img src={p2} alt='Avatar' class="image3 shadow"/>
  <div class="overlay3">
    <div class="text">
        <h6>lOREM ISPUM JEACKET</h6>
        <p>$112</p>
        <button>Buy</button>
    </div>
  </div>
</div>

</Col>


<Col>
<div class="slideimg3 mt-5">
  <img src={p3} alt='Avatar' class="image3 shadow"/>
  <div class="overlay3">
    <div class="text">
        <h6>lOREM ISPUM JEACKET</h6>
        <p>$112</p>
        <button>Buy</button>
    </div>
  </div>
</div>



</Col>
<Col>
<div class="slideimg3 mt-5">
  <img src={p3} alt='Avatar' class="image3 shadow"/>
  <div class="overlay3">
    <div class="text">
        <h6>lOREM ISPUM JEACKET</h6>
        <p>$112</p>
        <button>Buy</button>
    </div>
  </div>
</div>
</Col>


<Col>

<div class="slideimg mt-5">
 <img src={p1} alt='Avatar' class="image shadow" />
 <div class="overlay">
   <div class="text">
       <h6>lOREM ISPUM Coat</h6>
       <p>$112</p>
       <button>Buy</button>
   </div>
 </div>
</div>

</Col>

</Row>
</Container>
</div>




     
  


{/* FOOTER */}
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
