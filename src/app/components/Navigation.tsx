import Link from "next/link"
import styles from "./Navigation.module.css"

const pageRoutes = [
  { label: 'Joaquín', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' }
]

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {pageRoutes.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
