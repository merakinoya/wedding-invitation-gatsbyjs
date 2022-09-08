module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Wedding Invitation",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "284424719",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
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
    // ----- Google Analytic
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },

    // ----- Add Neew Config

    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    // ----- Plugin Firebase

    /* 
          apiKey: "AIzaSyDxbQ6cEQiBuBsPNR3TMImm9nrE-2A8Xnk",
          authDomain: "wedding-invitation-merakinoya.firebaseapp.com",
          databaseURL: "https://wedding-invitation-merakinoya-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "wedding-invitation-merakinoya",
          storageBucket: "wedding-invitation-merakinoya.appspot.com",
          messagingSenderId: "721942610910",
          appId: "1:721942610910:web:3306a42baa07712c87934f",
          measurementId: "G-TT74T00MVF",
    */
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDxbQ6cEQiBuBsPNR3TMImm9nrE-2A8Xnk",
          authDomain: "wedding-invitation-merakinoya.firebaseapp.com",
          databaseURL: "https://wedding-invitation-merakinoya-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "wedding-invitation-merakinoya",
          storageBucket: "wedding-invitation-merakinoya.appspot.com",
          messagingSenderId: "721942610910",
          appId: "1:721942610910:web:3306a42baa07712c87934f",
          measurementId: "G-TT74T00MVF",
        }
      }
    },
  ],
};
