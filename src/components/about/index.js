import React from "react"
import { Card, Col, Row, Typography, Badge } from "antd"
import AboutMeImage from "../imagejs/aboutme"
import moment from "moment"
import { IdcardOutlined } from "@ant-design/icons"

import { aboutMohit } from "../../content/about-mohit-highlights"

import "./about.css"

const { Meta } = Card
const { Title, Paragraph } = Typography
const YrsOfExp = new Date().getFullYear() - 2006

const About = () => {
  const amhd = aboutMohit?.highlightsData
  return (
    <Row style={{ paddingTop: 40 }} className="about">
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "center", fontSize: 36 }}
      >
        <IdcardOutlined
          style={{
            fontSize: 40,
            marginRight: 8,
          }}
        />{" "}
        <Title level={1}>ABOUT MOHIT S</Title>
      </Col>
      <Col span={24} style={{ padding: 20 }}>
        <Row gutter={16}>
          {amhd.slice(0, 4).map(am => (
            <Col xs={24} lg={12} xl={6}>
              <Badge.Ribbon text={am.RibbonText}>
                <Card style={{ height: "100%" }} hoverable title={am.CardTitle}>
                  <Meta
                    avatar={am.AvatarIcon}
                    title={am.MetaTitle}
                    description={
                      <p style={{ color: "#333" }}>{am.HighlightText}</p>
                    }
                  />
                </Card>
              </Badge.Ribbon>
            </Col>
          ))}
        </Row>
      </Col>

      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xl={8}
        style={{
          padding: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AboutMeImage />
      </Col>
      <Col xs={24} sm={24} md={24} lg={16} xl={16}>
        <Paragraph style={{ paddingRight: 25, fontSize: 18 }}>
          My name is Mohit K Srivastava aka Mohit Shrivastava, I create
          softwares. I am knowledgeable, logical and a observant professional
          with more than <b>{YrsOfExp} plus(+) years</b> of experience. I am an
          Indian 🇮🇳 Software Engineer / Computer Programmer / Software Developer
          / Coder, with a first-class Masters of Computer Application [MCA]
          degree 🗞️ from Sikkim Manipal University. Besides my specializations,
          I have an extreme passion of working with everything which involves
          development, automation and engineering.
        </Paragraph>
        <Paragraph style={{ paddingRight: 25, fontSize: 18 }}>
          I am not only proficient in <b>Microsoft Technologies</b>, but also
          with <b>latest JavaScript Frameworks</b>, including NodeJS, Express,
          react, angular, gatsby etc... I am also highly skilled in rendering
          solutions to problems, technical analysis, motivating teams and
          strategic planning. My experience includes working on Web and Windows
          based solutions. I enjoy being challenged and engaging with projects
          that require me to work outside my comfort and knowledge set, as
          continuing to learn new languages and development techniques are
          important to me and the success of the organization.
        </Paragraph>
        <Paragraph style={{ paddingRight: 25, fontSize: 18 }}>
          Presently I am deputed as a <b>Head of Technology</b> at
          <b> Accenture Song</b> from the last few months. Working with
          Augumented Reality, Virtual reality, eXtended Reality. We are using
          Three.js, BabylonJS and AWS Amplify XR for making the applications. We
          have also integrated Blockchain ETH E-Wallets and NFTs solutions to
          create wonderful immersive solutions.
        </Paragraph>
        <Paragraph style={{ paddingRight: 25, fontSize: 18 }}>
          Overall at
          <b> Accenture Malaysia Sdn. Bhd.</b> from the last
          <b>
            {" "}
            {moment().diff(moment("2021-09-01", "YYYY-MM-DD"), "months")} months
          </b>
          . In this tenure, I have equipped myself with front-end functions of
          programming life cycle and laid my hands on react, redux, redux-saga
          aws-amplify, ant-design, styled-components. I am having a strong
          background in computer-aided design, software development, and
          engineering, and believe that these skills would benefit to create a
          scalable solutions.
        </Paragraph>
      </Col>
      <Col span={24} style={{ padding: 20 }}>
        <Row gutter={16}>
          {amhd.slice(4, 8).map(am => (
            <Col xs={24} lg={12} xl={6}>
              <Badge.Ribbon text={am.RibbonText}>
                <Card style={{ height: "100%" }} hoverable title={am.CardTitle}>
                  <Meta
                    avatar={am.AvatarIcon}
                    title={am.MetaTitle}
                    description={
                      <p style={{ color: "#333" }}>{am.HighlightText}</p>
                    }
                  />
                </Card>
              </Badge.Ribbon>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default About
