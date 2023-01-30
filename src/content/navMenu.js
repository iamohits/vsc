import React from "react"
import { RiServiceFill } from "@react-icons/all-files/ri/RiServiceFill"
import { TiContacts } from "@react-icons/all-files/ti/TiContacts"
import { FaTheaterMasks } from "@react-icons/all-files/fa/FaTheaterMasks"
import { FaHome } from "@react-icons/all-files/fa/FaHome"

export const navMenu = [
  {
    key: "/",
    navigateTo: "/",
    icon: <FaHome className="IconStyle" />,
    displayName: "Home",
  },
  {
    key: "about",
    navigateTo: "/about",
    icon: <FaTheaterMasks className="IconStyle" />,
    displayName: "About Us",
  },
  {
    key: "services",
    navigateTo: "/services",
    icon: <RiServiceFill className="IconStyle" />,
    displayName: "Services",
  },
  {
    key: "contact",
    navigateTo: "/contact",
    icon: <TiContacts className="IconStyle" />,
    displayName: "Contact Us",
  },
]
