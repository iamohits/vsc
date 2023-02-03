import React from "react"
import "./slider.css"
import { Row, Col, Carousel, Image } from "antd"
import TweenOne from "rc-tween-one"
import { sliderContent } from "../../content/slider-content"

const Slider = () => {
  const SliderContent = sliderContent
  return (
    <Carousel autoplay autoplaySpeed={5000} lazyLoad="progressive" swipeToSlide>
      {SliderContent.map((st, index) => (
        <div key={index}>
          <div
            className="sliderStyle"
            style={{ backgroundImage: `url(${st.Banner})` }}
          >
            <div className="sliderTextContent">{st.Text}</div>
            <button className="btnKnowMore">
              <span className="btn-text">Know More</span>
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Slider
