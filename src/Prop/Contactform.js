import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../asset/Homepage_1stFold_Banner.webp"

function Contactform() {

  const [username,setusername]=useState('');

  const [email,setemail]=useState('');

  const [pass,setpass]=useState('');
  const [confirmpass,setconfirmpass]=useState('');
  

  const [error,seterror]=useState({});





  

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(pass);
    console.log(confirmpass);


    const newError={};

    if(!username){
      newError.username="user name is required";
    }

    if(!email){
      newError.email="email is Required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(email)){
      newError="Invalid email address";
    }
      

    seterror(newError);
    if(Object.keys(newError).length===0){

      //submit thr form data to the server or perfrom
      console.log('form submitted',{username,email})
      
    }


    if(!pass){
      newError.pass='password is required'
    }
    else if(pass.length<8){
           newError.pass='password must be at least 8 character long';
    }

    if(!confirmpass){
      newError.confirmpass="Confirm password is required";
    }
    else if(pass!== confirmpass){
      newError.confirmpass="Password does not match";
      
    }









 




  };

  return (
    < >
    

      <section className='form' style={{width:"80%", height:"650px", borderRadius:"45px",margin:"auto",backgroundColor:"rgb(239,179,17)", marginTop:"45px"}}>
        <div className='row'>
          <div className='col-6'>
            <img src={img1} style={{width:"100%"}}></img>
          </div>


          <div className='col-6'>
            <div className='shadow' style={{width:"400px", height:"600px",marginTop:"25px",marginLeft:"25px",backgroundColor:"#rgb(239,179,17)",borderRadius:"25px 25px 25px 25px"}}>
              <h1 style={{fontSize:"45px",textAlign:"center", fontWeight:"700",color:"black",marginTop:"25px"}}>CONTACT US</h1>
             
             
              <form onSubmit={handleSubmit}>

                {/* name */}


                <input type="text"
                placeholder='Name' 
                style={{width:"350px",height:"40px",borderRadius:"5px",marginTop:"35px",marginLeft:"15px",border:"none",backgroundColor:"white"}}
                value={username}

                onChange={(e)=>setusername(e.target.value)}
                />
                {error.username && <div style={{color:"red"}}>{error.username}</div>}

                {/* email */}
             <input type="email"
             placeholder='e-mail'
              style={{width:"550",height:"40px",borderRadius:"5px",marginTop:"10px",marginLeft:"15px",border:"none",backgroundColor:"white"}}
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              />
                    {error.email && <div style={{color:"red"}}>{error.email}</div>}


              {/* password */}

                <input type="password"
                placeholder='password'
                 style={{width:"350px",height:"40px",borderRadius:"5px",marginTop:"35px",marginLeft:"15px",border:"none",backgroundColor:"white"}}
                 value={pass}

                 onChange={(e)=>setpass(e.target.value)}
                 
                 />
                             {error.pass && <div style={{color:"red"}}>{error.pass}</div>}



{/* confirm password */}

                <input type="text"
                placeholder='Confirm Password' 
                style={{width:"350px",height:"40px",borderRadius:"5px",marginTop:"10px",marginLeft:"15px",border:"none",backgroundColor:"white"}}
                value={confirmpass}
                onChange={(e)=>setconfirmpass(e.target.value)}
              

                />
                
                {error.confirmpass && <div style={{color:"red"}}>{error.confirmpass}</div>}
   
       


   


         
                <button style={{width:'200px',height:"45px",backgroundColor:"black",color:"white",marginLeft:"80px",marginTop:"10px"}}>Submit</button>
              </form>


            </div>
            
          </div>
        </div>

      </section>
    </>
  )
}

export default Contactform
