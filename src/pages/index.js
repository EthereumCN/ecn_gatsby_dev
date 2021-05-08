import React from "react"
import { graphql } from "gatsby"
import { Redirect } from "@reach/router"
// import Layout from "../components/layout"
import SEO from "react-seo-component"
const IndexPage = ({data}) => {

  const { siteMetadata } = data.site

  return (
    <>
      <SEO
        title="你好，以太坊"
        titleTemplate={siteMetadata.title}
        description="欢迎登陆Eth Land 以太坊之境！（内容持续完善中）"
        image={"https://i.ibb.co/swDcr3X/image.jpg"}
        pathname={"https://dev.ethereum.cn/" }
        article={true}
        siteLanguage={siteMetadata.siteLanguage}
        siteLocale={siteMetadata.siteLocale}
        twitterUsername={siteMetadata.twitterUsername}
        author="以太坊中国"
        publishedDate="2020-11-26"
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Redirect noThrow to="/hello_developer" />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Blog {

    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteLanguage
        siteLocale
        siteUrl
        twitterUsername
      }
    }
  }
`
