module.exports = {
  siteMetadata: {
    title: "Site",
    links: {
      Github: {
        alt: 'Github Icon',
        href: 'https://github.com/Tulioleal'
      },
      LinkedIn: {
        alt: 'LinkedIn Icon',
        href: 'https://www.linkedin.com/tulioleal/'
      },
      Whatsapp: {
        alt: 'Whatsapp Icon',
        href: 'https://api.whatsapp.com/send?phone=541124030848'
      },
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
