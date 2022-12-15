import React from 'react'
import {FaRegDotCircle} from 'react-icons/fa'
// import {GrFacebookOption} from 'react-icons/gr'
// import {TiSocialLinkedin} from 'react-icons/ti'
// import {BsFacebook,BsLinkedin} from 'react-icons/bs'
import {AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'
import './Footer.css'

export default function Footer() {
  return (
    <div className='container-fluid mt-5' style={{background:"#202020",color:"white"}}>
        <div className="row pt-3 justify-content-center">
            <div className="col-md-5">
                    <img src="/Images/logo-light.png" alt="..." style={{width:"50%"}}/>                    
                    <p>Row House-27/B, SR no-241/2B, Jayprakash Nagar, Airport Rd, Lohegaon,PUNE-411032, Maharashtra, India P: 020-26686683 | E: info@apslabs.in </p>    
                    <span>Follow Us On: </span><span style={{fontSize:"150%",color:"white",background:"none"}}><AiFillFacebook/> </span> 

                    <span style={{fontSize:"150%",color:"white"}}><AiFillLinkedin/></span>               
            </div>

            <div className="col-md-3 tagscloud">
                <h5>Support</h5>
                <hr/>
                <span>Terms and Conditions</span><br/>
                <span>Privacy</span><br/>
                <span>Refund policy</span><br/>
                <span>Partner</span>                
            </div>
            
            <div className="col-md-3 tagscloud">
            <h5>Tags Cloud</h5>
            <hr/>
            <FaRegDotCircle/> <span> Home</span><br/>
            <FaRegDotCircle/> <span> About Us</span><br/>
            <FaRegDotCircle/> <span> Product</span><br/>
            <FaRegDotCircle/> <span> Research</span><br/>
            <FaRegDotCircle/> <span> Contact</span><br/>
            </div>
        </div>
        <hr/>
        <div className="row justify-content-around">
            <div className="col-md-4">
                <p style={{fontSize:"80%"}}>© 2022 APS LABS</p>
            </div>
            <div className="col-md-4">
                <p style={{fontSize:"80%"}}>Designed & Developed by © Axiomtech IT Solutions</p>
            </div>
        </div>
        
    </div>
  )
}

