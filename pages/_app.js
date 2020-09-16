import App from 'next/app'
import * as React from 'react'

import '../lib/global.css'

class MyApp extends App {
  render() {
    const { Component, isMobile, pageProps } = this.props
    return (
      <Component {...pageProps} isMobile={isMobile} />
    )
  }
}

export default MyApp
