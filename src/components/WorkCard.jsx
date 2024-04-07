import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import './custom.css'


export const WorkCard = ({ title, src, projectlink }) => {
    return (
        <div className="col-sm-12 col-md-4 p-4" >
            <div className="    p-0 thumbnail" style={{
                position: ' relative'
            }}>
                <img src={src} className="  rounded-2 p-0" alt="courseImg" loading='lazy' style={{ height: "270px", width: "100%", position: ' relative', objectfit: 'cover' }} />
                <div className='d-flex flex-row bottom-left w-100 p-0 bg-g text-white rounded-bottom '>

                    <div className="flex-fill p-2">
                        <h5 className=" c-g">{title}</h5>
                    </div>
                    <div className="flex-fill  text-end p-2 text-dark">

                        <a href={projectlink} className='p-2 link' target='_blank' rel="noreferrer noopener">  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' /></a></div>
                </div>
            </div>
        </div>



    );
}

