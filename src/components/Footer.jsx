import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithub, faTwitter, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <div className="container " >
            <div className='row p-2 '>
                <div className="col-sm-12 col-md-6 text-light d-flex justify-content-center ">
                    <div className='p-2'>
                        <h4 className='bg-name text-center'> Follow Us  </h4>
                        <ul className="list-unstyled d-inline-flex ">
                            <li className="flex-fill d-flex align-items-center">
                                <a target="_blank" href="https://www.linkedin.com/in/uday-ladhi-14a10b244/" className='p-2 link-light '><FontAwesomeIcon icon={faLinkedin} className=" p-2 " size="2x" /></a>
                            </li>
                            <li className=" flex-fill d-flex align-items-center">
                                <a target="_blank" href="https://medium.com/@udayladhi" className='p-2 link-light'><FontAwesomeIcon icon={faMedium} className=" p-2 " size="2x" /></a>

                            </li>
                            <li className=" flex-fill d-flex align-items-center">
                                <a target="_blank" href="https://github.com/Udayl56" className='p-2 link-light'>
                                    <FontAwesomeIcon icon={faGithub} className=" p-2 " size="2x" />
                                </a>

                            </li>
                            <li className=" flex-fill d-flex align-items-center">
                                <a target="_blank" href="https://twitter.com/udayladhi" className='p-2 link-light'>
                                    <FontAwesomeIcon icon={faTwitter} className=" p-2 " size="2x" /></a>
                            </li>
                            <li className=" flex-fill d-flex align-items-center">
                                <a target="_blank" href="https://forum.freecodecamp.org/u/udayl56/activity" className='p-2 link-light'>
                                    <FontAwesomeIcon icon={faFreeCodeCamp} className=" p-2 " size="2x" /> </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" col-sm-12 col-md-6 text-light d-flex justify-content-center " >
                    <div className="  d-flex flex-row ">

                        <div className="p-md-4 p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link align-items-center' to='/'>Home</Link>
                        </div>
                        <div className="p-md-4 p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link'
                            to="/About">About</Link></div>
                        <div className="p-md-4  p-1  d-flex align-items-center hv justify-content-center "><Link className='link' aria-current="page" to="/Work">Work</Link></div>
                        <div className="p-md-4 p-sm-2 p-1  d-flex align-items-center hv justify-content-center"><Link className='link' to='/Contact'>Contact</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );

}