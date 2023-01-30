import React from "react"
import PropTypes from "prop-types"
import SiteFooter from "./SiteFooter"
import Navbar from "./navbar"
import { Layout } from "antd"
// import { GatsbySeo, SocialProfileJsonLd } from "gatsby-plugin-next-seo"

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ width: "100%" }}>
      <Header style={{ background: "hsla(0, 0%, 0%, 0.8)" }}>
        <Navbar />
      </Header>
      <Content>
        <main>{children}</main>
      </Content>
      <Footer style={{ background: "hsla(0, 0%, 0%, 0.8)", color: "#ccc" }}>
        <SiteFooter />
      </Footer>
    </Layout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout

{
  /* <GatsbySeo
        title="iAMohit | I am Mohit | Mohit K Srivastava | Mohit Shrivastava"
        description="I am Mohit S an Indian software engineer with 16+ years of exp.. I have skill to code, develop, automate and engineer the software projects."
        canonical="https://iamohit.com/"
        openGraph={{
          title: "Mohit K Srivastava | iAMohit",
          description:
            "I am Mohit S an Indian software engineer with 16+ years of exp.. I have skill to code, develop, automate & engineer the software projects.",
          url: "https://iamohit.com/",
          type: "profile",
          profile: {
            firstName: "Mohit K",
            lastName: "Srivastava",
            username: "mohit5783",
            gender: "male",
          },
          article: {
            section: "Stackoverflow",
            authors: [
              "https://stackoverflow.com/users/3796048/mohit-shrivastava",
            ],
            tags: ["C#", "string", "json", "asp.net", "wpf", "html"],
          },
          images: [
            {
              url: "https://i.imgur.com/TOG5iwW.png",
              width: 265,
              height: 505,
              alt: "iAMohit | Profile | Mohit Shrivastava | Mohit K Srivastava",
            },
          ],
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Mohit K Srivastava"
        url="https://iamohit.com"
        sameAs={[
          "https://stackoverflow.com/users/3796048/mohit-shrivastava",
          "https://www.linkedin.com/in/mohit5783",
          "https://github.com/mohit5783/",
          "https://twitter.com/mohit5783",
          "https://www.facebook.com/mohit.shrivastava.technocrat",
          "https://wa.link/yx7qep",
          "https://www.instagram.com/mohit5783/",
          "https://www.youtube.com/c/MohitShrivastavaMohit",
          "https://www.pinterest.com/mohit5783",
        ]}
      /> */
}
