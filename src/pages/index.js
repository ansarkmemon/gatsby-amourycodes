import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 style={{ fontFamily: "'Space Mono', monospace"}}>Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
