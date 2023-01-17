import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io'; 
import { DiGithubBadge } from 'react-icons/di';  
import {FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/joseph-efraim-galvez-bab4a11a4/"> <IoLogoLinkedin /> </a>    
        </div>
        <div>
          <a href="https://web.facebook.com/josh.fraim.5"> <FaFacebookF /> </a>    
        </div>
        <div>
          <a href="https://github.com/joshfraim?tab=repositories"> <DiGithubBadge /> </a>    
        </div>
    </div>
  )
}

export default SocialMedia