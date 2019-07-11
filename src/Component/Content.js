import React from 'react'
import './../public/script'
import './../public/style.css'
// import './../public/jquery-3.3.1.min.js'
import img1 from './../public/images/1..jpg'
import img2 from './../public/images/2..jpg'
import img3 from './../public/images/3..jpg'
import img4 from './../public/images/4..jpg'
import img5 from './../public/images/5..jpg'
import img6 from './../public/images/6..jpg'
import img7 from './../public/images/7..jpg'
import img8 from './../public/images/8..jpg'
import img9 from './../public/images/9..jpg'
import img10 from './../public/images/10..jpg'
function Content() {
  return (
    <body>
      <div>
        <dl>
          <dt></dt>
          <dd>
            <img src={img1} alt="img1" />
          </dd>
          <dd>
            <img src={img2} alt="img1" />
          </dd>
          <dd>
            <img src={img3} alt="img1" />
          </dd>
          <dd>
            <img src={img4} alt="img1" />
          </dd>
          <dd>
            <img src={img5} alt="img1" />
          </dd>
          <dd>
            <img src={img6} alt="img1" />
          </dd>
          <dd>
            <img src={img7} alt="img1" />
          </dd>
          <dd>
            <img src={img8} alt="img1" />
          </dd>
          <dd>
            <img src={img9} alt="img1" />
          </dd>
          <dd>
            <img src={img10} alt="img1" />
          </dd>
        </dl>
      </div>
    </body>
  )
}

export default Content
