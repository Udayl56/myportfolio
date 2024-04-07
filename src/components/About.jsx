


import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faPython, faNode, faJava } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from "@ramonak/react-progress-bar";
import { AboutCard } from './AboutCard'


export function About() {


    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        const counters = [
            { setCounter: setCounter1, target: 150 },
            { setCounter: setCounter2, target: 170 },
            { setCounter: setCounter3, target: 500 },
        ];

        counters.forEach(({ setCounter, target }) => {
            let value = 0;
            const interval = setInterval(() => {
                value++;
                setCounter(value);
                if (value === target) clearInterval(interval);
            }, 20);
        });
    }, []);

    return (
        <div className='container'>
            <div className="row justify-content-around  pt-4 pb-4" >
                <AboutCard />
                <h2 className=" fw-bold text-white text-center mb-4" style={{ fontSize: '6vh' }}>My Coding Journey</h2>

                <div className="col-12 d-none d-md-flex flex-md-row text-c pt-4 pb-4 justify-content-center mb-4">

                    <div className="w-25 flex-fill  p-4 border border-bottom-0 border-top-0 border-start-0 border-4 text-center " >
                        <h2 className='fw-bold bg-name'>{counter1}+</h2>
                        <p> DSA problem solved on GeeksforGeeks platform with have 51th Institute Rank</p>

                    </div>
                    <div className="flex-fill w-25 p-4  border border-bottom-0 border-top-0 border-start-0 border-4  text-center">
                        <h2 className='fw-bold bg-name'>{counter2}+</h2>
                        <p> DSA problem solved on leetcode</p>
                    </div>
                    <div className="flex-fill w-25 p-4  border border-bottom-0 border-top-0 border-start-0 border-4  text-center">
                        <h2 className='fw-bold bg-name'>{counter3}+</h2>
                        <p> Coding problem solved on coding ninjas platform with holding expert level</p>
                    </div>
                    <div className="flex-fill w-25 p-4  text-center ">
                        <h2 className='fw-bold bg-name'>5🌟</h2>
                        <p>Rating using Java programming on Hackerrank</p>
                    </div>

                </div>
                <div className="col-12 d-md-none d-sm-flex flex-sm-column text-c pt-4 pb-4 justify-content-center">

                    <div className="w-100 flex-fill  p-4 border border-end-0 border-top-0 border-start-0 border-4 text-center " >
                        <h2 className='fw-bold bg-name'>150 +</h2>
                        <p> DSA problem solved on GeeksforGeeks platform with have 51th Institute Rank</p>

                    </div>
                    <div className="flex-fill w-100 p-4  border border-end-0 border-top-0 border-start-0 border-4  text-center">
                        <h2 className='fw-bold text-cg'>200 +</h2>
                        <p> DSA problem solved on leetcode</p>
                    </div>
                    <div className="flex-fill w-100 p-4  border border-end-0 border-top-0 border-start-0 border-4  text-center">
                        <h2 className='fw-bold bg-name'>500 +</h2>
                        <p> Coding problem solved on coding ninjas platform with holding expert level</p>
                    </div>
                    <div className="flex-fill w-100 p-4  text-center ">
                        <h2 className='fw-bold bg-name'>5🌟</h2>
                        <p>Rating using Java programming on Hackerrank</p>
                    </div>

                </div>

                <div className='col-sm-12 col-12 p-0  mt-4 nb-4' >

                    <div className="container   ">
                        <div className="row  d-flex justify-content-around gap-4" >
                            <div className="col-md-5 col-sm-12 p-4 border border-2 rounded-2 text-light">
                                <h2 className=" fw-bold text-cg" style={{ fontSize: '5vh' }}>Education</h2>
                                <div className="  text-start  mb-4 mt-4 ">
                                    <div className="p-2 d-flex flex-column wrap m-1 ">
                                        <div className=' flex-fill p-2 '>
                                            <h4 className='fw-bolder' style={{ fontSize: '3vh' }}> Bachelor Of Technology - 2024</h4>
                                            <hr className='w-100' />
                                        </div>
                                        <div className='d-flex align-items-center shadow-sm flex-fill p-2'>
                                            <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                                            <span className='p-2 fw-bold'>Yeshwantrao Chavan College Of Engineering, Nagpur</span>
                                        </div>
                                        <div className=' flex-fill  p-2'>
                                            <ul className='ps-5'>
                                                <li className='p-2 '>Information Technology</li>
                                                <li className='p-2 text-c'> Full time</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5 col-sm-12 border border-2 rounded-2 p-4 text-light">
                                <h2 className=" fw-bold text-cg" style={{ fontSize: '5vh' }}>Skills</h2>
                                <div className="  text-start  mb-4 mt-4 ">
                                    <div className="p-2 d-flex flex-row wrap m-1  shadow-sm">
                                        <div className='d-flex align-items-center w-25 p-2'>
                                            <FontAwesomeIcon icon={faJs} size="2x" color='#F0DB4F' />
                                            <span className='p-2 ' >JavaScript</span>

                                        </div>

                                        <div className='d-flex align-items-center  flex-fill w-75 p-2 justify-content-center'>
                                            <ProgressBar completed='90' className='w-75' />

                                        </div>

                                    </div>
                                    <div className="p-2 d-flex flex-row flex-wrap m-1  shadow-sm">
                                        <div className='d-flex align-items-center w-25  p-2'>
                                            <FontAwesomeIcon icon={faReact} size="2x" color='#56BFDE' />
                                            <span className='p-2' >React</span>

                                        </div>

                                        <div className='d-flex align-items-center justify-content-center w-75 flex-fill p-2'>
                                            <ProgressBar completed='80' className='w-75' />
                                        </div>

                                    </div>
                                    <div className="p-2 d-flex flex-row flex-wrap m-1  shadow-sm">
                                        <div className='d-flex align-items-center w-25  p-2'>
                                            <FontAwesomeIcon icon={faNode} size="2x" color='#07f50f' />
                                            <span className='p-2' >Node</span>

                                        </div>

                                        <div className='d-flex align-items-center w-75 flex-fill justify-content-center p-2'>
                                            <ProgressBar completed='60' className='w-75' />
                                        </div>

                                    </div>
                                    <div className="p-2 d-flex flex-row flex-wrap m-1  shadow-sm">
                                        <div className='d-flex align-items-center  w-25  p-2'>
                                            <FontAwesomeIcon icon={faJava} size="2x" color='#f5b207' />
                                            <span className='p-2' >Java8</span>

                                        </div>

                                        <div className='d-flex align-items-center w-75 flex-fill p-2 justify-content-center'>
                                            <ProgressBar completed='50' className='w-75' />
                                        </div>

                                    </div>
                                    <div className="p-2 d-flex flex-row flex-wrap m-1  shadow-sm">
                                        <div className='d-flex align-items-center w-25  p-2'>
                                            <FontAwesomeIcon icon={faPython} size="2x" color='#F0DB4F' />
                                            <span className='p-2' >Python3</span>

                                        </div>

                                        <div className='d-flex align-items-center w-75  flex-fill p-2 justify-content-center'>
                                            <ProgressBar completed='70' className='w-75' />
                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>

    );
}

