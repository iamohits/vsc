import React from "react"
import "./banner.css"
import { Button } from "../button-elements"
import { Row, Col } from "antd"
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown"
import TweenOne from "rc-tween-one"
import { TypeAnimation } from "react-type-animation"
import { StaticImage } from "gatsby-plugin-image"

const devname = ["Coming", 2000, "Coming Soon", 1500, "Coming Soon!!!", 2000]
const subtitles = [
  "Virtualify",
  1500,
  "Virtualify Software",
  1500,
  "Virtualify Software Consultancy",
  1500,
  "Virtualify Software Consultancy Pvt Ltd",
  1500,
  "Virtualify Software Consultancy (VSC)",
  1500,
  "A most powerful, intellegent System for your need",
  1500,
]
const Banner = () => {
  return (
    <Row className="banner jumbotron">
      <Col span={24} className="banner-container">
        {/* <Fade bottom big delay={20}> */}
        <TypeAnimation
          sequence={devname}
          className="devNames"
          repeat={Infinity}
          cursor={false}
          wrapper="p"
          deletionSpeed={99}
        />
        {/* </Fade> */}
        {/* <Fade right big delay={40}> */}
        <TypeAnimation
          sequence={subtitles}
          className="subTitles"
          repeat={Infinity}
          cursor={true}
          deletionSpeed={90}
          wrapper="p"
        />
        {/* </Fade> */}

        {/* <Fade left duration={500} delay={1000}> */}
        <div style={{ marginTop: 40, padding: 40 }}>
          <a href="#">
            <Button fontBig big primary>
              Contact Us
            </Button>
          </a>
        </div>
        {/* </Fade> */}
        {/* <TweenOne
          animation={{
            y: 70,
            repeat: -1,
            duration: 1000,
            scale: 1.5,
            ease: "easeOutBounce",
          }}
        >
          <FaAngleDoubleDown style={{ fontSize: 30, color: "#f5f543" }} />
        </TweenOne> */}
      </Col>
    </Row>
  )
}

export default Banner
