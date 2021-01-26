module.exports = {
  siteMetadata: {
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
      Mail: {
        mailTo: 'mailto:tuliolealdev@gmail.com',
        copy: 'Mail to tuliolealdev@gmail.com',
        back: "https://getform.io/f/6d2b6ff7-c15f-41c4-9a3e-890141963819",
      }
    },
    Projects: {
      Consul : {
        href: 'https://consultorioapp.herokuapp.com',
        repo: 'https://github.com/Tulioleal/_AppConsultorio',
        title: 'ConsultorioApp',
        content: 'A Single-page application created in 2020, focused in simplicity, developed as a tool for medical history and consultation of gynecologic and obstetric patients.',
      }
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
