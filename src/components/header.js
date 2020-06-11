import { Link } from "gatsby"
//import { Twitter, GitHub } from "react-feather"
import { Icon } from "react-icons-kit"
import { u1F431 } from 'react-icons-kit/noto_emoji_regular/u1F431' // cat
import { u1F426 } from 'react-icons-kit/noto_emoji_regular/u1F426' // bird
import PropTypes from "prop-types"
import React from "react"

const GitHub = ({ size }) => <Icon icon={u1F431} size={size} />
const Twitter = ({ size }) => <Icon icon={u1F426} size={size} />

let color1 = "#060101"
let color2 = "#F22D40"
let color3 = "#300608"
let color4 = "#5A151B"
let color5 = "#8D222D"
let color6 = "#C13443"

const linkStyle = {
  textDecoration: `none`,
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: color1,
      // marginBottom: `1.45rem`,
      textDecoration: `none`,
      display: `block`,
      fontFamily: 'Open Sans Condensed, sans-serif'
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
      <Link to="/" style={{ ...linkStyle, color: "white" }}>
        <h1>Israel<span style={{ color: color2 }}>Gonzalez</span></h1>
      </Link>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <a className="headerLink socialIcon" href="https://github.com/israelgonzalezb" style={{...linkStyle, padding: "0 5px"}}>
          <GitHub style={{verticalAlign: "bottom"}} size="32"/>
        </a>
        <a className="headerLink socialIcon" href="https://twitter.com/izzyz" style={{...linkStyle, padding: "0 5px"}}>
          <Twitter style={{verticalAlign: "bottom"}} size="32" />
        </a>
      </span>
      <span style={{display: "flex", justifyContent: "space-between"}}>
        <Link to="/about" className="headerLink" style={{...linkStyle, padding: "0 5px", fontSize: "1.2rem"}}>
          ABOUT
        </Link>
        <Link to="/resume" className="headerLink" style={{...linkStyle, padding: "0 5px", fontSize: "1.2rem"}}>
          RESUME
        </Link>
        <a href="https://stackoverflow.com/story/israelgonzalezb" className="headerLink" target="_blank" style={{...linkStyle, padding: "0 5px", fontSize: "1.2rem"}}>
          SKILLS
        </a>
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
