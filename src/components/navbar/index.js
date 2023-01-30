import React, { useEffect, useState } from "react"
import { Menu } from "antd"
import LogoImage from "../logo"
import { navigate } from "gatsby-link"
import "./navbar.css"
import { navMenu } from "../../content/navMenu"

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("/")
  const nm = navMenu
  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined"
  useEffect(() => {
    if (isBrowser) {
      let pathName = window.location.pathname
      if (pathName !== "/") pathName = pathName.replaceAll("/", "")
      setSelectedMenu(pathName)
    }
  }, [])

  return (
    <>
      <div
        onClick={() => navigate("/")}
        style={{
          float: "left",
          marginTop: 2,
          display: "flex",
        }}
      >
        <LogoImage />
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={selectedMenu}
        theme="dark"
        style={{
          fontSize: 18,
          background: "hsla(0, 0%, 0%, 0)",
          justifyContent: "end",
          display: "flex",
          alignItems: "center",
        }}
      >
        {nm.map(mi => (
          <Menu.Item
            key={mi.key}
            onClick={() => navigate(mi.navigateTo)}
            icon={mi.icon}
          >
            {mi.displayName}
          </Menu.Item>
        ))}
        {/* <Menu.Item
          key="/"
          onClick={() => navigate("/")}
          icon={<HomeOutlined style={{ fontSize: 28 }} />}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="about"
          onClick={() => navigate("/about")}
          icon={<IdcardOutlined style={{ fontSize: 28 }} />}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="career-timeline"
          onClick={() => navigate("/career-timeline")}
          icon={<MdTimeline style={{ fontSize: 28 }} />}
        >
          Career Timeline
        </Menu.Item>
        <Menu.Item
          key="stackoverflow"
          onClick={() => navigate("/stackoverflow")}
          icon={<FaStackOverflow style={{ fontSize: 28 }} />}
        >
          StackOverFlow
        </Menu.Item> */}
      </Menu>
    </>
  )
}

export default Navbar
