import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "env.key");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Messege sent Successfully", res);
        }
    };
    return (
        <div className='container  '>
            <h4 className=" fw-bold p-4 text-white" >Get in touch</h4>

            <div className='row  justify-content-center gap-5  p-4'>

                <div className="col-md-5 col-sm-10 p-2">
                    <div className=' p-4'>
                        <h2 className='bg-name'>Let's talk</h2>
                        <p className='text-white'>I'm currently avalible to take on new project, so fell  free to send me messege about anything that you want me to work on, You can Contact anytime.</p>
                        <ul className="list-unstyled pt-2 text-white">
                            <li className="p-2 flex-fill d-flex align-items-center">
                                <FontAwesomeIcon icon={faEnvelope} className=" p-2 " size="2x" />
                                <a href="mailto:udayladhi@gmail.com" className='link-light text-decoration-none'>
                                    <span className=' p-2'>udayladhi@gmail.com</span></a>
                            </li>
                            <li className="p-2 flex-fill d-flex align-items-center">
                                <FontAwesomeIcon icon={faPhone} className=" p-2 " size="2x" />
                                <span className=' p-2'>+91- 8767847893</span>
                            </li>
                            <li className="p-2 flex-fill d-flex align-items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className=" p-2 " size="2x" />
                                <a target='_blank' href='https://maps.app.goo.gl/VLg27BmmxFGGVS5h9' className=' p-2 text-decoration-none text-light'>Nagpur, Maharastra, India</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="col-md-5 col-sm-10 p-4   ">
                    <form onSubmit={onSubmit} className="mb-5 text-light" id="contactForm" name="contactForm">
                        <div className="row ">
                            <div className="col-md-12 form-group p-2">
                                <label className='p-2 w-100' name="name" id="name">Your Name</label>
                                <input type="text" name="name" required className='w-100' placeholder='your name' />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-group p-2">
                                <label className='p-2 w-100 ' name="email" id="email">Email</label>
                                <input type="email" name="email" className='w-100' placeholder='your email' required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 form-group p-2">
                                <label className='p-2 w-100' name="message" id="message">Messege</label>
                                <textarea name="message" className='w-100' placeholder='messege' rows={6} required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12  p-2">
                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                                <button type="submit" className='bg p-2 w-100 text-white text-center rounded-2'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
