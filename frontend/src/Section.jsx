import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import{ faUser } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



export default function Section(){
    return(
        <>
         <div className="section">
            
            <div className="sectionOne">
               <div className="text">
                <h1>Hello, <br /> This is <span id='one'>Sagar Ghate</span>, I'm a <br /> Professional <span id='two'>Aspiring Software <br />Engineer</span>.</h1>
               </div>
               <div className="icons">
                    <a href="https://github.com/sagarghate2"><FontAwesomeIcon icon={faGithub} className='github-icon'/></a>
                    <a href="https://www.linkedin.com/in/sagarghate/"><FontAwesomeIcon icon={faLinkedin} className='linkedIn-icon' /></a>
                    <a href="https://www.instagram.com/sagarh_ghate/"><FontAwesomeIcon icon={faInstagram} className='instagram-icon'/></a>
                    <a href="https://x.com/sagarh_ghate"><FontAwesomeIcon icon={faTwitter} className='twitter-icon'/></a>
               </div>
               <div className="buttons">
            <div className="contact-me"> <a href="#contact"> CONTACT ME  <FontAwesomeIcon icon={faUser} className='userIcon'/> </a> </div>
            <div className="getResume"> <a href="#">GET RESUME <FontAwesomeIcon icon={ faDownload} className='download'/> </a> </div>
               </div>
          </div>

            <div className="sectionTwo">
                   <div className="projectTitle">
               <div className="coloors">
                    <div className="pink"></div>
                    <div className="orange"></div>
                    <div className="white"></div>
                    </div>
             </div>
             <div className="code">
                 <div className="lineOne">
                    <span className='pink'>const </span>
                    <span className='white'>coder</span>
                    <span className='pink'> = </span>
                    <span className='dk'>  &#123; </span>
                 </div>
                 <div className="lineTwo">
                    <span className='white leftPadding'>name: </span>
                    <span className='dk'> '</span>
                    <span className='yellow'>Sagar Ghate</span>
                    <span className='dk'>',</span>
                 </div>
                 <div className="lineThree">
                    <span className='white leftPadding'>skills: </span>
                    <span className='dk'>&#91; '</span>
                    <span className='yellow'>React</span>
                    <span className='dk'>' , </span>
                    <span className='dk'> ' </span>
                    <span className='yellow'>NodeJS</span>
                    <span className='dk'>' , &nbsp;'</span>
                    <span className='yellow'>Express</span>
                    <span className='dk'>' ,</span>
                 </div>
                 <div className="lineFour">
                    <span className='dk leftPadding'>'</span>
                    <span className='yellow '>MongoDB</span>
                    <span className='dk'>' , &nbsp;'</span>
                    <span className='yellow'>Java</span>
                    <span className='dk'>' , &nbsp;'</span>
                    <span className='yellow'>C/C++</span>
                    <span className='dk'>' , &nbsp;'</span>
                    <span className='yellow'>HTML</span>
                    <span className='dk'>' , &nbsp;'</span>
                    <span className='yellow'>CSS</span>
                    <span className='dk'>' ,</span>
                   
                   
                 </div>
                 <div className="lineFive">
                    <span className='dk leftPadding'>'</span>
                    <span className='yellow '>Javascript</span>
                    <span className='dk'>' , &nbsp;'</span>
                    <span className='yellow'>REST APIs</span>
                    <span className='dk'>' &#93;,</span>
                 </div>
                 <div className="lineSix">
                    <span className='white leftPadding'>smartworker: &nbsp;</span>
                    <span className='orange'>true,</span>
                 </div>
                 <div className="lineSeven">
                    <span className='white leftPadding'>quickLearner: &nbsp;</span>
                    <span className='orange'>true,</span>
                 </div>
                 <div className="lineEight">
                    <span className='white leftPadding'>problemSolver: &nbsp;</span>
                    <span className='orange'>true,</span>
                 </div>
                 <div className="lineNine">
                    <span className='green leftPadding'>teamplayer: </span>
                    <span className='orange'>function</span>
                    <span className='dk'>( ) &#123;</span>
                 </div>
                  <div className="lineTen">
                    <span className='orange leftMargin'>return </span>
                    <span className='dk'>&#40;</span>
                  </div>
                  <div className="lineEleven">
                    <span className='blue leftMargin2'>this.</span>
                    <span className='white'>smartworker  </span>
                    <span className='yellow'>&&</span>
                  </div>
                   <div className="lineTwelve">
                    <span className='blue leftMargin2'>this.</span>
                    <span className='white'>problemSolver  </span>
                    <span className='yellow'>&&</span>
                  </div>
                  <div className="lineThirteen">
                    <span className='blue leftMargin2'>this.</span>
                    <span className='white'>skills.length</span>
                    <span className='yellow'>&gt;=</span>
                    <span className='orange'>5</span>
                  </div>
                  <div className="lineFourteen">
                    <span className='dk leftMargin'>&#41;;</span>
                  </div>
                  <div className="lineFifteen">
                    <span className='dk leftPadding'> &#125;;</span>
                  </div>
                  <div className="lineSixteen">
                     <span className='dk'> &#125;;</span>
                  </div>
             </div>
            </div>
           </div>
        </>
    )
}