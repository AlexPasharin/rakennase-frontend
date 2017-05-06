import React from 'react'

import DeveloperBox from './DeveloperBox'

function Frontpage(props){

  const {dict} = props

  const developers = [
    {name: 'Aleksandr Pasharin', photoSrc: '../kuvat/profile_alex.jpg', textIndex: 'Alex'},
    {name: 'Mikko Saarinen', photoSrc: '../kuvat/profile_mikko.jpg', textIndex: ''},
    {name: 'Jussi Selänen', photoSrc: '../kuvat/profile_jussi.jpg', textIndex: 'Jussi'},
    {name: 'Tuomas H', photoSrc: '', textIndex: ''},
  ]

  return (
    <div>
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-left">{dict.frontpageHeader}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2>{dict.frontpageSubheader}</h2>
                                    <img src="../kuvat/meiditeit.jpg" className="img-responsive" />
                                        <p></p>
                                        <p>{dict.frontpageMainText}</p>
                                        <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <br />
                    <br />
                    <h2>{dict.nutritionTipHeader}</h2>
                    <img src="../kuvat/Pastasalad.jpg" className="img-responsive" />
                    <p></p>
                    <p>{dict.nutritionTip}</p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    <div className="section">
        <div className="container">
            <div className="row text-center">
                <div className="col-xs-3 text-center">
                    <a><i className="fa fa-5x fa-fw fa-instagram text-primary"></i></a>
                </div>
                <div className="col-xs-3">
                    <a><i className="fa fa-5x fa-fw fa-twitter"></i></a>
                </div>
                <div className="col-xs-3">
                    <a><i className="fa fa-5x fa-fw fa-facebook"></i></a>
                </div>
                <div className="col-xs-3 text-center">
                    <a><i className="fa fa-5x fa-fw fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">{dict.developersHeader}</h1>
                    <p className="text-center">{dict.developersGeneralText}</p>
                </div>
            </div>
            <div className="row">
                <DeveloperBox dict={dict} developer={developers[0]} />
                <DeveloperBox dict={dict} developer={developers[1]} />
            </div>
            <div className="row">
              <DeveloperBox dict={dict} developer={developers[2]} />
              <DeveloperBox dict={dict} developer={developers[3]} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Frontpage
