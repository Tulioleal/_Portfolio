module.exports = {
  siteMetadata: {
    description: `Tulio Leal's portfolio`,
    author: `Tulio Leal`,
    title: 'Tulio Leal, Web Developer',
    links: {
      Github: {
        alt: 'Github Icon',
        href: 'https://github.com/Tulioleal'
      },
      LinkedIn: {
        alt: 'LinkedIn Icon',
        href: 'https://www.linkedin.com/in/tulioleal/'
      },
      Whatsapp: {
        alt: 'Whatsapp Icon',
        href: 'https://api.whatsapp.com/send?phone=541124030848'
      },
      Mail: {
        mailTo: 'mailto:tuliolealdev@gmail.com',
        copy: 'Mail to tuliolealdev@gmail.com',
        back: "https://getform.io/f/6d2b6ff7-c15f-41c4-9a3e-890141963819",
      }
    },
  },
  plugins: [
    "gatsby-plugin-sass",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tulio Leal´s Portfolio`,
        short_name: `Tulio's Site`,
        start_url: `/`,
        background_color: `#222831`,
        theme_color: `#FFD369`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
