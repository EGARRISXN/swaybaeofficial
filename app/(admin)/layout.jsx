import styles from './studio.module.css'

export default function StudioLayout({children}) {
  return (
    <html lang='en' className={styles.scrollSmooth + ' ' + styles.antialiased}>
      <body className={styles.minHScreen}>{children}</body>
    </html>
  )
}
