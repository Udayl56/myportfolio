import React from 'react';
import 'typeface-rubik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MyPhoto from '../assets/Myphoto.png';
import resumeurl from '../assets/UdayLadhi_resume.docx';
import './custom.css';

export function AboutCard() {

    const downloadPDF = () => {

        const pdfUrl = resumeurl;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'UdayLadhi_resume.docx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='row text-white justify-content-center'>
            <div className="col-12 p-2 d-flex justify-content-center ">
                <img src={MyPhoto} className="img-fluid slideInFromLeft rounded-circle" alt="profile" loading='lazy' style={{ background: '#dddddd', width: '200px' }} />
            </div>
            <div className=" p-2 col-md-6 col-sm-10  ">
                <h1 className="fw-bold  text-center fadeIn  " style={{ fontSize: '8vh' }}><span className=' bg-name' >I'm Uday Ladhi,</span> Frontend Developer.</h1>

                <div className='p-1  '>
                    <p className="fs-5 p-sm-2 text-justify fadeIn" style={{ fontFamily: 'Rubik, sans-serif' }}>I've over Three years of Programming Experience, primarily using C++, Java And Python. Additionally, My Area of Development are in Frontend & Backend Technology.</p>

                    <ul className='list-unstyled d-inline-flex justify-content-center w-100 gap-4'>
                        <li className="ps-sm-4 pe-sm-4 p-2 bg rounded-pill text-white "> <a target="_blank" href="https://www.linkedin.com/in/uday-ladhi-14a10b244/" className="ps-sm-4 pe-sm-4 p-2  rounded-pill text-white text-decoration-none " rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faLinkedin} /><span className=' p-1'> Connect</span> </a> </li>
                        <li >  <button onClick={downloadPDF} className="ps-sm-4 pe-sm-4 p-2 bg-dark rounded-pill text-white hv-resume" >Download Resume</button> </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
