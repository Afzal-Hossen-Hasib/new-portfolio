import React from 'react';
import './Service.css'
import heartEmoji from '../../image/icon/heartemoji.png'
import glasses from '../../image/icon/glasses.png'
import humble from '../../image/icon/humble.png'
import Card from '../Card/Card';

const Service = () => {
    return (
        <div className='service'>
            <div className="awsome">
                <span>My Skills</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas, tempora voluptates at fugiat veniam. <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque delectus animi aperiam repellat </span>
                <button className='h-button'>Hire Me</button>
            </div>
            <div className="cards">
                <div style={{left: '16rem'}}>
                    <Card
                    emoji = {heartEmoji}
                    heading = {'EXPERTISE'}
                    detail = {'HTML5, CSS3, Bootstrap5, JavaScript, ES6, Rest API, ReactJS, React-Router, React-Bootstrap, And React Firebase Hooks.'}
                    ></Card>
                </div>
            </div>

            <div className="cards">
                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                    emoji = {glasses}
                    heading = {'COMFORTABLE'}
                    detail = {'Node JS, MongoDB, Express Js,Tailwind CSS, And Stripe.'}
                    ></Card>
                </div>
            </div>

            <div className="cards">
                <div style={{top: '25rem', left: '15rem'}}>
                    <Card
                    emoji = {humble}
                    heading = {'FAMILIAR'}
                    detail = {'React Query, React Hook Form, And TypeScript.'}
                    ></Card>
                </div>
            </div>
        </div>
    );
};

export default Service;