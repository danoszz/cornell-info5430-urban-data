import React from "react"
import styles from "../styles/Header.module.scss"

const Header = ({ title, subtitle, meta }) => {
  return (
    <footer className={styles.header}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <div>
        <p>{subtitle}</p>
        <p>{meta}</p>
      </div>
    </footer>
  )
}

export default Header
