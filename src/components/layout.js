/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import Navbar from "./navbar";
//import Header from "./header"
import '../css/tailwind-style.css';
import '../css/animista.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)

  return (
    <>
      {/* 
        <Header siteTitle={data.site.siteMetadata.title} />
      */}

      <main className="">
        {children}
      </main>


      <footer className="py-6 px-8 bg-gray-900 mt-12 rounded-t-full ">
        <div className="container mx-auto text-center md:container md:mx-auto text-white">
          © {new Date().getFullYear()} <a href="https://www.instagram.com/merakinoya" className="text-green-500 hover:text-green-200 underline" target="_blank" rel="noreferrer">{data.site.siteMetadata.title}</a>  All Rights Reserved.
        </div>
      </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout