import React, { memo } from 'react'
import { SubBody } from '../components/subBody'
import Head from '../components/head'
import { SubFooter } from '../components/subFooter'

const Home = memo(() => (
  <div>
    <Head title="Home" />
    <SubBody />
    <SubFooter />
  </div>
), () => true)

export default Home
