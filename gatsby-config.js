module.exports = {
  siteMetadata: {
    title: `virtualify`,
    description: `Enhance your technology with our innovative software solutions. Join the ranks of satisfied clients and revolutionize the way you do business with our company.`,
    keywords: "Software, Technology, Solutions, Innovative, Business, Development, Custom, Enterprise, Digital, Platform, Integration, Automation, Analytics, Support, Implementation",
    author: `@mohit5783`,
    siteUrl: `https://virtualifyme.com`,
  },
  plugins: [
    // "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://virtualifyme.com",
        sitemap: "https://virtualifyme.com/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/custom/",
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "virtualifyme.com",
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
          {
            from: "http://virtualifyme.com",
            to: "https://virtualifyme.com",
          },
          {
            from: "http://www.virtualifyme.com",
            to: "https://virtualifyme.com",
          },
          {
            from: "https://www.virtualifyme.com",
            to: "https://virtualifyme.com",
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: "gatsby-plugin-next-seo",
    //   options: {
    //     openGraph: {
    //       type: "website",
    //       locale: "en_IE",
    //       url: "https://virtualifyme.com/",
    //       site_name: "iAMohit",
    //     },
    //     twitter: {
    //       handle: "@mohit5783",
    //       site: "@mohit5783",
    //       cardType: "summary_large_image",
    //     },
    //   },
    // },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Virtualify`,
        short_name: `vsc`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/VirtualifyLogo.webp`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-220449822-1",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",

    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
