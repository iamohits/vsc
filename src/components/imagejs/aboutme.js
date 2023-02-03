import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutMeImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "MeAboutMe.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
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
        alt="Its me Mohit K Srivastava"
        style={{ width: 270 }}
        loading="lazy"
      />
    )
}

export default AboutMeImage
