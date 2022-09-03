import React from 'react'
import '../Css/LisenceStyle.css'

const License = () => {
  return (
    <>
    <div className="text-center"><h1>Legal Document</h1></div>
    <div className="paragraph">We have received numerous awards from both government & private sources. Received good performance and commendation certificates from many clients, including British High Commission. We have affiliations with many international companies like Pinkerton, Securitas International, Control Risk, LGS Matrix, International SOS Pte Ltd. etc. We are member of the Bangladesh France Chamber of Commerce & Industry (BFCCI).</div>

    <div className="document">
        <div className="tradeLisence">
        <img src="./image/tradeLicense.jpg" alt="" />
         {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sequi?</p> */}
        </div>

        <div className="certificate">
        <img src="./image/certificate.jpg" alt="" />
         {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sequi?</p> */}
        </div>

        <div className="govt">
        <img src="./image/govtDoc.jpg" alt="" />
         {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sequi?</p> */}
        </div>
    </div>
    </>
  )
}

export default License