import React from "react"
import Metas from "../components/Metas"
import About from "../components/about"
import MainLayout from "../components/MainLayout"
import "./style.css"
import Slider from "../components/slider"

const IndexPage = () => (
  <MainLayout>
    <Metas title="Virtualify Software Consultancy Pvt Ltd | HOME" />
    <Slider />
  </MainLayout>
)

export default IndexPage
