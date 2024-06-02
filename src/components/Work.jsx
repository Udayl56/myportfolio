
import React from 'react';
import projectimg_1 from '../assets/portfolioProject.png'
import projectimg_2 from '../assets/mockup.png'
import projectimg_3 from "../assets/resume-builder.png"
import projectimg_4 from "../assets/birthday-wish-notifier.png"
import projectimg_5 from '../assets/diabetesPrediction.png'
import projectimg_6 from '../assets/stockdata.png'
import projectimg_7 from '../assets/js-coding-stack.png'
import projectimg_8 from '../assets/contact-managment.png'

import { WorkCard } from './WorkCard';



export function Work() {
    return (
        <div className='container  '>

            <h4 className=" fw-bold p-4 text-cg" >Explore My Latest Works</h4>
            <div className="row d-flex-flex-wrap">

                <WorkCard title={"Js Coding stack"} src={projectimg_7} projectlink={'https://js-coding-stack-vite.vercel.app/'} />
                <WorkCard title={"Contact Managment using redux toolkit"} src={projectimg_8} projectlink={'https://contact-managment-beta.vercel.app/'} />
                <WorkCard title={"My portfolio"} src={projectimg_1} projectlink={'https://github.com/Udayl56/portfolio'} />
                <WorkCard title={"Responsive Mockup"} src={projectimg_2} projectlink={'https://github.com/Udayl56/rapidQuest-Assignment-'} />
                <WorkCard title={"Resume Builder Application"} src={projectimg_3} projectlink={'https://github.com/Udayl56/resume-builder'} />
                <WorkCard title={"Birthday wish notifier app using Nodejs"} src={projectimg_4} projectlink={'https://github.com/Udayl56/birthdaywish-sender-nodejs'} />
                <WorkCard title={"Diabetes Prediction Web App"} src={projectimg_5} projectlink={'https://github.com/Udayl56/Diabetes_Prediction_Web_App'} />
                <WorkCard title={"Stack data Analysis & Visualization"} src={projectimg_6} projectlink={'https://github.com/Udayl56/yfinance-stock-app'} />

            </div>


        </div>




    );
}


