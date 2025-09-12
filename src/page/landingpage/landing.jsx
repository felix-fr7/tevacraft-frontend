import React from 'react'
import { landingdata } from '../../constant/Landingdata'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Landing = () => {  
  return (
    <div className='containerhero'>
      <div className='containerhero2'>
      <h2 className='welcome'>{landingdata.heading}</h2>
      <span className='ai'>{landingdata.highlight}</span>
      <p className='welcomepara'>{landingdata.hero_section_paragraph}</p>
      </div>
      <div className='heromain'>
      <img className='heroimage' src={landingdata.heroimage} alt="" />
      <div className='side1'>
      </div>
      <div className='side2'>

      </div>
      </div>
   
      {/* OUR EXPERTISE */}
      <div className='lineback'>
        <div className='subheading'>
      <div className='ourexpertise'>
      <h4 >{landingdata.subheading}</h4>
      </div>
      <h2>{landingdata.heading2}</h2>
      <p className='ourai'>{landingdata.ourexpertise_paragraph}</p>
      </div>
      <div className='iconecontainer'>
        <div className='note1'>
        <img className='icone1' src={landingdata.education} alt=''/>
        <p>{landingdata.iconepara1}</p>
      </div>
        <div className='note2'>
        <img className='icone2' src={landingdata.entertainment} alt=''/>
        <p className='note2'>{landingdata.iconepara2}</p>
        </div>
        <div className='note3'>
        <img className='icone3' src={landingdata.media} alt=''/>
        <p>{landingdata.iconepara3}</p>
        </div>
      </div>
   </div>
   {/* why choose*/}
   <div className='whychoosecontainer'>
    <div className='whychoose'>
    <h2>{landingdata.question}</h2>
    <span className='subquestion'>{landingdata.question1}</span>
    </div>
    <div className='imgsection'>
      <img src={landingdata.robo} alt=''/>
    <div className='paramcontainer'>
    <p>{landingdata.answer1}</p>
    <p>{landingdata.answer2}</p>
    <p>{landingdata.answer3}</p>
    <p>{landingdata.answer4}</p>
    <p>{landingdata.answer5}</p>
    </div>
    </div>

   </div>
   <hr></hr>
  
   <div className='footercontainer'>
   <h2>{landingdata.footerhead}</h2>
   <div className='footer'>
    <div className='whowearecontant'>
    <h4>{landingdata.footersubhead1}</h4>
    <Link to='/aiservice'><p>{landingdata.item1}</p></Link>
    <Link to='/human'><p>{landingdata.item2}</p></Link>
    <Link to='/mtaudits'><p>{landingdata.item3}</p></Link>
    <Link to='/Transcription'><p>{landingdata.item4}</p></Link>
    <Link to='/videosubtitle'><p>{landingdata.item5}</p></Link>
    <Link to='/websitelocation'><p>{landingdata.item6}</p></Link>
    <Link to='/elearning'><p>{landingdata.item7}</p></Link>
  </div>
  <div className='contact'>
  <h4>{landingdata.footersubhead3}</h4>
    <div className='subcontact'>
         <HiOutlineMail className='icon'/>
       <p className='mail'>{landingdata.email}</p>
    </div>
    <div className='subcontact'>
       <FaPhoneVolume className='icon'/>
       <p>{landingdata.phone1}</p>
    </div>
    <div className='subcontact'>
        <FaPhoneVolume className='icon'/>
    <p>{landingdata.phone2}</p>
    </div>
  </div>
  <div className='industriescontant'>
    <h4>{landingdata.footersubhead2}</h4>
    <p>{landingdata.subitem1}</p>
    <p>{landingdata.subitem2}</p>
    <p>{landingdata.subitem3}</p>
    <p>{landingdata.subitem4}</p>
    <p>{landingdata.subitem5}</p>
  </div>
  </div>
   </div>
   </div> 
  )
}
export default Landing