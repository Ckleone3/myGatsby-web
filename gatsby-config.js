module.exports = {
  siteMetadata: {
    title: "SmartTech Auto Centre",
    description: "We are the Difference",
    author: "LenBos Engineering Services"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ], 
}