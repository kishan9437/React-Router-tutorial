import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
        <h1>404</h1>
        <h1>Page Not Found</h1>

        <Link to="/">return Home Page</Link>
    </>
  )
}

export default PageNotFound
