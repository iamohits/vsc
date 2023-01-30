import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "VirtualifyLogo.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData)
    return <div>NoImage</div>
  else
    return (
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        alt="Virtualify Logo"
        loading="lazy"
        style={{ width: 64, height: 64 }}
      />
    )
}

export default LogoImage
