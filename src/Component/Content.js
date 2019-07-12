import React, { Component } from 'react'
import '../public/script'
import './../public/style.css'
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
import Paregrap from './Paregrap'



export default class Content1 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ShowMe: 'd-none',
      Showparagrap: 'd-block',

    }
  }

  clicktochange = e => {
    this.setState({
      ShowMe: 'd-block',
      Showparagrap: 'd-none'
    })
  }
  exit = () => {
    this.setState({
      ShowMe: 'd-none',
      Showparagrap: 'd-block'
    })
  }

  render() {


    return (
      <body>
        <div>
          <button onClick={this.clicktochange.bind(this)} className="btn btn-warning">Show the Picture</button>
        </div>
        <div className={this.state.Showparagrap}>
          <Paregrap />
        </div>
        <div className={this.state.ShowMe}>
          <div>
            <button onClick={this.exit} className="btn btn-outline-info">Exit</button>
          </div>
          <div className="text-center text-white">
            You can click your left-mouse, click the picture and Move to see More
          </div>
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
      </body >
    )
  }
}
