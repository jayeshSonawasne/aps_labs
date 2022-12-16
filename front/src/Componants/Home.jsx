import React from 'react'
import {FaRegDotCircle} from 'react-icons/fa'
import ControlledCarousel from './Carousel'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <NavBar/>
    <ControlledCarousel/>
    <div className='container-fluid'>
        <div className="row text-center mt-4">
            <b><h1>Our Vision</h1></b>
            <p> Build the best product, use business to inspire and implement solutions to make biotech affordable to everyone providing cost-effective solutions.<br/>To bring inspiration and innovation to every reseacher on work and create a better life for people around us.<br/>
           <span style={{fontSize:"30px"}}> .........</span></p>
        </div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5">
                <img src="Images/milestones.jpg" alt="..." width='100%'/>
            </div>
            <div className="col-md-5" style={{fontSize:"14.79px"}}>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2013 </span>- UK & India incorporation. Becomes Biological & Analytical service provider.<br/>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2014 </span>- Ventures into Product Development. APS LABS brand emerges.<br/>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2015 </span>- Ventures into IVF & Lab Research products. BIRAC grant under GOI"s DST program.<br/>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2016 </span>- Development of product of molecular diagnostics, food safety, Health care and nanotechnology.<br/>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2017 </span>-  Enters NGS & Agriculture segments. Export Lab reagents to 16 countries. IVF exporter to 8 countries. Became preferred vendor for AIIMS, India & Thyrocare.<br/>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2018 </span>- JV with Addbio Korea incorporated. Manufactures Dignostic Kits Panel & Forensic Kits.<br/>Offices setup in Sudan, Nigeria, Japan & UK. Approval of Y-Chromosome kits by ICMR.<br/>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2019 </span>- New facility by December. Upcoming offices in Malaysia & USA.<br/>
                    <FaRegDotCircle/> <span style={{fontWeight:"600"}}> 2020 </span>- Roadmap to manufacture IVF media. Plans to open Diagnostic centres chain PAN india.<br/>
                    <button className='btn mt-3' style={{background:"#3498DB",color:"white",border:"none",borderRadius:"2px",fontSize:"1.077em",padding:"0.557em 1.714em"}}>Product Info</button>
            </div>
        </div>
        <div className="row text-center mt-5">
            <b><h1>Our Clients</h1></b>
            <p> Our clients drive everything we do. We work in partnership with our clients & they can rely on us to spring into action with spot-on solutions at<br/>moments critical to the company"s development. Our modest size enables our specialists to work closely together to develop tailor-made solutions<br/>that meet their evolving needs.<br/>
           {/* <span style={{fontSize:"30px"}}> .........</span> */}
           </p>
        </div>

        <div className="row">
          <OwlCarousel
   className='owl-theme'
    items='4'
    autoplay
    // nav
    // dots
    loop
    margin={10}
   >
    <div className='item'>
      <img src='/ImgCarouselTwo/AIIMS.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/Aurigen.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/Bejo.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/CSIR.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/CSU.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/ICAR.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/ICMR.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/IIH.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/IIT.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/JIPMER.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/Korea University.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/NCBS.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/NCCS.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/NIV.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/NUS.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/sine moribus.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/The university of Nottinghan.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/UCSI.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/Warwicensis.png'/>
    </div>
    <div className='item'>
      <img src='/ImgCarouselTwo/Yonsei university.png'/>
    </div>

   </OwlCarousel>
   <Footer/>
          </div>
        </div>
        
    </>
  )
}
