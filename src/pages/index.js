import React from "react"
import Metas from "../components/Metas"
import About from "../components/about"
import MainLayout from "../components/MainLayout"
import Banner from "../components/banner"
import "./style.css"

const IndexPage = () => (
  <MainLayout>
    <Metas title="Virtualify Software Consultancy Pvt Ltd | HOME" />
    <Banner />
  </MainLayout>
)

export default IndexPage
