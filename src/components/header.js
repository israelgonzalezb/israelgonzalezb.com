import { Link } from "gatsby"
import { Twitter, GitHub } from "react-feather"
import PropTypes from "prop-types"
import React from "react"

let color1 = "#060101"
let color2 = "#F22D40"
let color3 = "#300608"
let color4 = "#5A151B"
let color5 = "#8D222D"
let color6 = "#C13443"

const linkStyle = {
  textDecoration: `none`,
  color: color2,
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: color1,
      marginBottom: `1.45rem`,
      textDecoration: `none`,
      display: `block`,
    }}
  >
    {/*<h1 style={{ margin: 0 }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link
          to="/"
          style={{
            textDecoration: `none`, 
            webkitTextFillColor: "#000000",
            webkitTextStrokeWidth: "1px",
            webkitTextStrokeColor: "#f92b40", 
          }}
        >
          {siteTitle}
        </Link>
        </h1>
        </div>*/}
    <div>
      <Link to="/" style={{ ...linkStyle, textAlign: "center" }}>
        <h1>Israel<span style={{ color: color5 }}>Gonzalez</span></h1>
      </Link>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://github.com/israelgonzalezb" style={{...linkStyle, padding: "0 10px"}}>
          <GitHub style={{verticalAlign: "bottom"}}/>
        </a>
        <a href="https://twitter.com/izzyz" style={{...linkStyle, padding: "0 10px"}}>
          <Twitter style={{verticalAlign: "bottom"}}/>
        </a>
      </span>
      <span style={{display: "flex", justifyContent: "space-between"}}>
        <Link to="/" style={{...linkStyle, padding: "0 10px"}}>
          About
        </Link>
        <Link to="/" style={{...linkStyle, padding: "0 10px"}}>
          Projects
        </Link>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
