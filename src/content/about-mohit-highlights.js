import React from "react"
import { GiPublicSpeaker } from "@react-icons/all-files/gi/GiPublicSpeaker"
import { GiSandsOfTime } from "@react-icons/all-files/gi/GiSandsOfTime"
import { GiSpellBook } from "@react-icons/all-files/gi/GiSpellBook"
import { GiStopwatch } from "@react-icons/all-files/gi/GiStopwatch"

import { FaAirFreshener } from "@react-icons/all-files/fa/FaAirFreshener"
import { FaCode } from "@react-icons/all-files/fa/FaCode"
import { FcIdea } from "@react-icons/all-files/fc/FcIdea"
import { FcBullish } from "@react-icons/all-files/fc/FcBullish"

const YrsOfExp = new Date().getFullYear() - 2006
export const aboutMohit = {
  highlightsData: [
    {
      RibbonText: YrsOfExp + ` years of Experience`,
      CardTitle: "Extensive Experience",
      AvatarIcon: <GiSandsOfTime size={120} color="orange" />,
      MetaTitle: "Almost two decades",
      HighlightText:
        `My experiences over the last ` +
        YrsOfExp +
        ` years have shaped how I view software, and have led me to believe that I am still learning.`,
    },
    {
      RibbonText: "Effective Communication",
      CardTitle: "Communication Skills",
      AvatarIcon: <GiPublicSpeaker size={120} color="#4169E1" />,
      MetaTitle: "Tactful Speaker",
      HighlightText: `Listening carefully to answer, Quality over quantity without losing the impactful point of the message.`,
    },
    {
      RibbonText: "Clean Code",
      CardTitle: "Clean Coding",
      AvatarIcon: <FaCode size={120} color="#8c8c8c" />,
      MetaTitle: "Beyond formatting",
      HighlightText: `Writing easily understandable, modifiable, testable code
      to create concise and elegant solutions.`,
    },
    {
      RibbonText: "Delivered 100+ Solutions",
      CardTitle: "Varied Skills",
      AvatarIcon: <FaAirFreshener size={120} color="#34A56F" />,
      MetaTitle: "Fresh Perspective",
      HighlightText: `Working with variety of industries increases broader
      experience, skills and ability to bring in fresh
      prespective.`,
    },
    {
      RibbonText: "Problem Solver",
      CardTitle: "Can-do attitude",
      AvatarIcon: <FcIdea size={120} />,
      MetaTitle: "Problem-solving skills",
      HighlightText: `With the right tools, algorithms, and excellent analytical
      skills, I can come up with innovative solutions.`,
    },
    {
      RibbonText: "Optimized Code",
      CardTitle: "Optimization",
      AvatarIcon: <FcBullish size={120} />,
      MetaTitle: "Improvement for Perfection",
      HighlightText: ` Enhancing SQL query, caching, response optimization, SEO,
      accessibility, UI/UX that impacts the success an
      application.`,
    },
    {
      RibbonText: "Smart",
      CardTitle: "Fast self learner",
      AvatarIcon: <GiSpellBook size={120} color="#FF00FF" />,
      MetaTitle: "High Learning Curve",
      HighlightText: `Learning latest tools ranked myself ahead of other peers
      and accomplished greater efficiency, flexibility and
      accuracy.`,
    },
    {
      RibbonText: "Effective Planner",
      CardTitle: "Task Management",
      AvatarIcon: <GiStopwatch size={120} color="#9D00FF" />,
      MetaTitle: "Time and Task Management",
      HighlightText: `Managing expectations from stakeholders, estimating the
      amount of time needed to complete tasks.`,
    },
  ],
}
