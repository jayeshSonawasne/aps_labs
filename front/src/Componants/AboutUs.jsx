import React,{useState,useEffect} from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AboutUs() {
    const [Counter, setCounter] = useState(0);
    const [Counter2, setCounter2] = useState(0);
    const [Counter3, setCounter3] = useState(0);
    const [Counter4, setCounter4] = useState(0);
    const [Counter5, setCounter5] = useState(0);

    useEffect(()=>{
        if(Counter<95){
            setTimeout(()=>{
                setCounter(Counter+1);
            },20)
        }
    },[Counter])

    useEffect(()=>{
        if(Counter2<91){
            setTimeout(()=>{
                setCounter2(Counter2+1);
            },20)
        }
    },[Counter2])

    useEffect(()=>{
        if(Counter3<80){
            setTimeout(()=>{
                setCounter3(Counter3+1);
            },20)
        }
    },[Counter3])

    useEffect(()=>{
        if(Counter4<99){
            setTimeout(()=>{
                setCounter4(Counter4+1);
            },20)
        }
    },[Counter4])

    useEffect(()=>{
        if(Counter5<95){
            setTimeout(()=>{
                setCounter5(Counter5+1);
            },20)
        }
    },[Counter5])


  return (
    <div className='container-fluid'>
        <div className="row justify-content-around py-5">
            <div className="col-md-2">
                <h3>About Us</h3>
                <button className='btn mt-3' style={{background:"#3498DB",color:"white",border:"none",borderRadius:"0px"}}>Home/AboutUs</button>
            </div>
            <div className="col-md-4">
                <img src="/Images/aboutus.png" alt="..." width='100%'/>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-4" style={{marginTop:"5%"}}>
                <img src="/Images/AboutUs1.jpg" alt="..." width='100%'/>
            </div>
            <div className="col-md-6" style={{fontSize:"15px"}}>
                <h3>Welcome to APS LABS</h3>
                <hr/>
                <p>Founded in year 2012, an ISO 9001:2008 certified company, it is situated just a mile a away from Pune International Airport in the state of Maharashtra, India. We have a global presence with established branch offices in UK, Sudan, Malaysia, Nigeria , Japan and distributors covering 30+ countries.</p>
                <p>APS LABS is an indigenous fast growing biotech company that is focused on manufacturing innovative and affordable Kits & Reagents for Molecular Biology & Molecular Diagnosis of highest quality.</p>
                <p>Being equipped with automated systems for production of high-quality molecular biology products & clinical reagents, we boast of over 2000 satisfied customers.We have state of art facility for Research & Development and Manufacturing units which integrates with best players in sourcing, testing, warehousing and logistics.</p>
                <p>The technical product-service package offered by APSLABS enables clients to tap the expertise of APSLABS's Laboratory products to their precise needs. Other areas of our expertise are Cell-biology, Immunology & Genomics, Forensics, Equipments, Nanotechnology and Robotics. APSLABS with its young & energetic team members are proud owners of 6 patents with many more to come.</p>
            </div>
        </div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-3">
                <h3>Key Notes</h3>
                <hr/>
                <BsFillCheckCircleFill style={{color:"#3498DB",fontSize:"200%"}}/> <b>Global Presence</b><br/><br/>
                <BsFillCheckCircleFill style={{color:"#3498DB",fontSize:"200%"}}/> <b>2K+ Satisfied Customers</b><br/><br/>
                <BsFillCheckCircleFill style={{color:"#3498DB",fontSize:"200%"}}/> <b>On-Demand Customer Support</b>
            </div>
            <div className="col-md-4">
                <h3>Our Culture</h3>
                <hr/>
                <button className='btn' style={{borderRadius:"0px"}}><Link to='imbibe' style={{color:"black",textDecoration:"none"}}>Imbibe</Link></button>
                <button className='btn' style={{borderRadius:"0px"}}><Link to='implement' style={{color:"black",textDecoration:"none"}}>Implement</Link></button>
                <button className='btn' style={{borderRadius:"0px"}}><Link to='innovate' style={{color:"black",textDecoration:"none"}}>Innovate</Link></button>
                <div className="row"  style={{background:"#F7F7F7"}}>
                <Outlet/>
                </div>
            </div>
            <div className="col-md-3">
                <h3>Skill-o-Meter</h3>
                <hr/>
                <div className="row justify-content-between">
                    <div className="col-md-8">Manufacture</div>
                <div className="col-md-2">{Counter}%</div>
                </div>
                <ProgressBar animated now={Counter } /><br/>
                <div className="row justify-content-between">
                    <div className="col-md-8">Branding</div>
                <div className="col-md-2">{Counter2}%</div>
                </div>
                <ProgressBar animated now={Counter2} /><br/>
                <div className="row justify-content-between">
                    <div className="col-md-8">Sales Marketing</div>
                <div className="col-md-2">{Counter3}%</div>
                </div>
                <ProgressBar animated now={Counter3} /><br/>
                <div className="row justify-content-between">
                    <div className="col-md-8">Technical Support</div>
                <div className="col-md-2">{Counter4}%</div>
                </div>
                <ProgressBar animated now={Counter4} /><br/>
                <div className="row justify-content-between">
                    <div className="col-md-8">Warehousing & Logistics.</div>
                <div className="col-md-2">{Counter5}%</div>
                </div>
                <ProgressBar animated now={Counter5} /><br/>
            </div>
        </div>
        <div className="row text-center mt-5 justify-content-center">
            <h4><b>Certificates | Registrations | Accolades</b></h4>
            <p>Certificates of Incoporation, Audits, Taxes , Accolades & many more !!.</p>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-2">
                <img src="/Images/cert1.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                <img src="/Images/cert2.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                <img src="/Images/cert3.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                <img src="/Images/cert4.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                <img src="/Images/cert5.png" alt="..."  width='100%'/>
            </div>
        </div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-2">
                <img src="/Images/cert6.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                <img src="/Images/cert7.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                <img src="/Images/cert8.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                <img src="/Images/cert9.png" alt="..."  width='100%'/>
            </div>
            <div className="col-md-2">
                
            </div>
        </div>
        
    </div>
  )
}
