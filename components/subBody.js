import * as React from 'react'
import styles from './subBody.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicImported = dynamic(import('./dynamicImported').then(mod => mod.DynamicImported))

export const SubBody = () => (
  <div className={styles.container}>
    <div className={styles.big}>
      in big but not big
    </div>
    <div className={styles.texts}>
      text
      <div className={styles.big}>
        big text
      </div>
    </div>
    <div id={'id'}>
      subBodyText
    </div>
    <DynamicImported />
    <Link href={"/"}><a>link</a></Link>
  </div>
)
