import React from 'react'

import './Header.css'
import FormContact from './FormContact'

export default function Header(){
    return(
        <header className="masthead d-flex">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                        <div className="box-widget">
                            <h2 className="text-white">Looking For Investment Properties?</h2>
                            <h4 className="text-white-70">Spend less time & money, contact us and we provide you an awesome offer</h4>

                            <FormContact />
                        </div>
                    </div>
                </div>                            
            </div>
            <div className="overlay"></div>
        </header>
    )
}