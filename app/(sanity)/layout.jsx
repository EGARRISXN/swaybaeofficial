import styles from './studio.module.css'

export default function RootLayout({children}) {
  return (
    <html className={`${styles.scrollSmooth} ${styles.antialiased}`}>
      <body className={styles.minHSreen}>{children}</body>
    </html>
  )
}
