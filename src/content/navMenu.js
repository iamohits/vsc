import React from "react"
import { RiServiceFill } from "@react-icons/all-files/ri/RiServiceFill"
import { TiContacts } from "@react-icons/all-files/ti/TiContacts"
import { FaTheaterMasks } from "@react-icons/all-files/fa/FaTheaterMasks"
import { FaHome } from "@react-icons/all-files/fa/FaHome"

export const navMenu = [
  {
    key: "home",
    icon: <FaHome className="IconStyle" />,
    label: "Home",
  },
  {
    key: "about",
    icon: <FaTheaterMasks className="IconStyle" />,
    label: "About Us",
  },
  {
    key: "services",
    icon: <RiServiceFill className="IconStyle" />,
    label: "Services",
  },
  {
    key: "contact",
    icon: <TiContacts className="IconStyle" />,
    label: "Contact Us",
  },
]
