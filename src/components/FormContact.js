import React from 'react'

import './FormContact.css'

export default function FormContact(){
    return(
        <div className="mt-5">
            <form>
                <div className="row">
                    <div className="col-lg-6 col-12 mb-2">
                        <div className="row">
                            <div className="col-12">
                                <input className="input100" autoComplete={"off"} type="text" placeholder="Enter full name" />
                            </div>
                            <div className="col-12">
                                <input className="input100" autoComplete={"off"} type="email" placeholder="Your email" />
                            </div>
                            <div className="col-12">
                                <input className="input100" autoComplete={"off"} type="text" placeholder="Where call you?" />
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-6 col-12 mb-2">
                        <div className="col-12">
                            <div className="row">
                                <textarea rows="4" className="textarea100" placeholder="Tell us what you want."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12  mb-2">
                        <button className="btn btn-widget">Send message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}