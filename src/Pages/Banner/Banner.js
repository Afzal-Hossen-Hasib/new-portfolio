import React from 'react';
import './Banner.css'
import github from '../../image/icon/github.png'
import linkedin from '../../image/icon/linkedin.png'
import mypic from '../../image/pic/shape-3 (1).png'
import crown from '../../image/icon/crown.png'
import emoji from '../../image/icon/glassesimoji.png'
import Floating from '../Floating/Floating';
import resume from './resume.pdf'

const Banner = () => {
    return (
        <div className='banner-div'>
            <div className="banner-left">
                <div className="b-name">
                    <span>Hi!! I Am </span>
                    <span>Afzal Hossen Hasib</span>
                    <p>Passionate web developer. Always eager to learn new technologies. The last few months made me skilled in the web development field.</p>
                </div>
                <a href={resume} download>

                <button className='b-button'>DOWNLOAD RESUME</button>
                </a>
                
                <div className="b-icon">
                    <a href="https://github.com/afzahossenhasib" target="_blank">
                    <img src={github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/afzal-hossen-hasib-ba159b241/" target="_blank">
                    <img src={linkedin} alt="" />
                    </a>
                </div>
            </div>

            <div className="banner-right">
                    <img src={mypic} alt="" />
                    <img src={emoji} alt="" />
                    <div style={{top: '-4%', left : '68%'}}>
                        <Floating image={crown}></Floating>
                    </div>
            </div>
        </div>
    );
};

export default Banner;