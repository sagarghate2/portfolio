import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Experiences(){
              return(
                <>
                <div id="experience">
                    <div className="expbox">Experience</div>
                </div>
                 <div className="part">
                  <div className="twodpart">
                     <DotLottieReact className='twod'
                 src="https://lottie.host/c0bc7d1a-0a92-4ed6-98b3-ebb60cc2b847/iB3bk1aucz.lottie"
                loop
                 autoplay
                    />
                  </div>
                  <div className="expart">
                       
                          <div className="expline">
                            <p className='timeline'>(Nov 2025 - Present)</p>
                          <div className="one">  <div className="userImag"> <FontAwesomeIcon icon={faUser} /> </div>
                            <div className="cmp">
                               <p className='role'>Software Associate</p>
                               <p>Capgemini</p>
                            </div>
                            </div>
                          </div>
                  </div>
                 </div>
                
                </>
              )
}