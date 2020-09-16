import * as React from 'react'
import styles from './indexBody.module.css'
import Link from 'next/link'

export const IndexBody = () => (
  <div className={styles.container}>
    <div id={'id'}>
      indexBodyText
    </div>
    <Link href={"/sub"}><a>link</a></Link>
  </div>
)
