
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export function Header() {
    return (


        <div className='container bg-dark' >
            <div className="row p-2 d-flex justify-content-center align-items-center " >

                <div className=' col-6 col-md-3  p-sm-2  d-md-flex d-flex align-items-center'>
                    <a target="_blank" href="https://github.com/Udayl56" className='p-2 text-white text-decoration-none fs-4 '> <FontAwesomeIcon icon={faGithub} /><span className=' p-1'> Udayl56</span></a>
                </div>

                <div className='d-sm-none d-none col-md-6 d-md-flex flex-md-row gap-md-5 gap-sm-1 justify-content-center d-flex align-items-center'>

                    <div className=" p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link align-items-center' to='/'>Home</Link>
                    </div>
                    <div className=" p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link'
                        to="/About">About</Link></div>
                    <div className="  p-1  d-flex align-items-center hv justify-content-center "><Link className='link' aria-current="page" to="/Work">Work</Link></div>
                    <div className=" p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link' to='/Contact'>Contact</Link></div>
                </div>
                <div className="  col-6 col-md-3 p-md-4 p-sm-2 p-1 d-flex align-items-center justify-content-end ">


                    <a target="_blank" href="https://www.linkedin.com/in/uday-ladhi-14a10b244/" className="ps-sm-4 pe-sm-4 p-2 bg rounded-pill text-white text-decoration-none ">
                        <FontAwesomeIcon icon={faLinkedin} /><span className=' p-1'> Connect</span> </a>
                </div>

                <div className='  d-md-none col-6 d-flex flex-row gap-md-5 gap-sm-1 justify-content-center '>



                    <div className=" p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link align-items-center' to='/'>Home</Link>
                    </div>
                    <div className=" p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link'
                        to="/About">About</Link></div>
                    <div className="  p-1  d-flex align-items-center hv justify-content-center "><Link className='link' aria-current="page" to="/Work">Work</Link></div>
                    <div className=" p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link' to='/Contact'>Contact</Link></div>
                </div>
            </div>
        </div>
    );
}

