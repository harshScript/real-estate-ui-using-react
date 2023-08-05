import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" width={120} alt="" />
                <span className='secondaryText'>
                    Our vision is the make all people <br />
                    the best place to live for them.
                </span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>1145 New york, Fl 4575, USA </span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>AboutUs</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer