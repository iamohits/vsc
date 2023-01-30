import React from "react"
import MainLayout from "../components/MainLayout"
import Metas from "../components/Metas"

const NotFoundPage = () => (
  <MainLayout>
    <Metas title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export default NotFoundPage
