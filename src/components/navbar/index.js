import React, { useEffect, useState } from "react"
import { Menu } from "antd"
import LogoImage from "../imagejs/logo"
import { navigate } from "gatsby-link"
import "./navbar.css"
import { navMenu } from "../../content/navMenu"

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("/")
  const nm = navMenu
  const isBrowser = typeof window !== "undefined"
  useEffect(() => {
    if (isBrowser) {
      let pathName = window.location.pathname
      if (pathName !== "/") {
        pathName = pathName.replaceAll("/", "")
      } else {
        pathName = "home"
      }
      setSelectedMenu(pathName)
    }
  }, [isBrowser])
  const onMenuItemClicked = sm => {
    console.log(sm)
    if (sm.key === "home") {
      navigate("/")
    } else {
      navigate("/" + sm.key)
    }
  }
  return (
    <>
      <div
        onClick={() => navigate("/")}
        onKeyDown={() => navigate("/")}
        style={{
          float: "left",
          marginTop: 2,
          display: "flex",
        }}
        role="presentation"
      >
        <LogoImage />
      </div>
      <Menu
        mode="horizontal"
        onClick={onMenuItemClicked}
        selectedKeys={selectedMenu}
        theme="dark"
        style={{
          fontSize: 18,
          background: "hsla(0, 0%, 0%, 0)",
          justifyContent: "end",
          display: "flex",
          alignItems: "center",
        }}
        items={nm}
      />
    </>
  )
}

export default Navbar
