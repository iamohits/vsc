import React from "react"
import About from "../components/about"
import MainLayout from "../components/MainLayout"
import Metas from "../components/Metas"

const AboutPage = () => (
  <MainLayout>
    <Metas title="About | VSC" />
    <About />
  </MainLayout>
)

export default AboutPage
