import React from "react"
import "./SiteFooter.css"

import { Col, Row } from "antd"
import LogoImage from "../logo"
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP"
import { FiPhoneOutgoing } from "@react-icons/all-files/fi/FiPhoneOutgoing"
//import { MdEmail } from "@react-icons/all-files/md/MdEmail"

const SiteFooter = () => {
  return (
    <>
      <Row justify="space-between">
        <Col
          flex={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoImage />
        </Col>
        {/* <Col
          flex={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            color: "#CCC",
            fontSize: 30,
          }}
        >
          <Row justify="space-between">
            <Col>
              <a href="tel:+60183553290">
                <FiPhoneOutgoing title="Call Mohit K Srivastava, reponse 99%" />
              </a>
            </Col>
            removed it for SEO. We don’t recommend adding plain text/linked email addresses to your webpages,
            <Col>
              <a
                href="mailto:iamohit.com@gmail.com"
                title="email to Mohit, I'll revert asap"
              >
                <MdEmail />
              </a>
            </Col> 
            <Col>
              <a href="https://stackoverflow.com/users/3796048/mohit-shrivastava">
                <FaStackOverflow title="Problem solving attitude can be viewed here." />
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/mohit5783">
                <FaLinkedin title="Mohit's LinkedIn profile, to showcase my professional career and education." />
              </a>
            </Col>
            <Col>
              <a href="https://github.com/mohit5783/">
                <FaGithub title="Not all my repository are public, please get in touch to know more about Mohit" />
              </a>
            </Col>
            <Col>
              <a href="https://twitter.com/mohit5783">
                <FaTwitter title="This is not where I could be found, Its just an account." />
              </a>
            </Col>
            <Col>
              <a href="https://www.facebook.com/mohit.shrivastava.technocrat">
                <FaFacebookF title="Socially active, lazy with commenting and posting. Just view what friend does" />
              </a>
            </Col>
            <Col>
              <a href="https://wa.link/yx7qep">
                <FaWhatsapp title="Best form to get in touch with me. Just say hello" />
              </a>
            </Col>
            <Col>
              <a href="https://www.instagram.com/mohit5783/">
                <FaInstagram title="Mohit K Srivastava's Insta account" />
              </a>
            </Col>
            <Col>
              <a href="https://www.youtube.com/c/MohitShrivastavaMohit">
                <FaYoutube title="Youtube account for Mohit. Sooner you will watch videos from me." />
              </a>
            </Col>
            <Col>
              <a href="https://www.pinterest.com/mohit5783">
                <FaPinterestP title="Mohit's Pin" />
              </a>
            </Col>
          </Row>
        </Col> */}
      </Row>
      <Row justify="space-between" style={{ marginTop: 20 }}>
        <Col>
          © {new Date().getFullYear()} - developed by
          <a href="https://iamohit.com">Virtualify</a>
        </Col>
        <Col>
          <a href="https://iamohit.com/sitemap/sitemap-0.xml">Sitemap</a>
        </Col>
      </Row>
    </>
  )
}

export default SiteFooter
