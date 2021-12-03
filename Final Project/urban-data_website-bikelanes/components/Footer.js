import React from "react"
import styles from "../styles/Footer.module.scss"

const Footer = ({ showlinks, loomLink }) => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://daanvanderzwaag.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        © Daan van der Zwaag, 2021 — No tracking policy — All data belongs to
        their respective owners
      </a>
      {showlinks && (
        <div>
          <a
            href={loomLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoUrl}
          >
            View video on Loom<span>↗</span>
          </a>
          <a
            href="https://github.com/danoszz/cornell-info5410-urban-systems_dv239"
            target="_blank"
            rel="noopener noreferrer"
          >
            View code on Github <span>↗</span>
          </a>
        </div>
      )}
    </footer>
  )
}

export default Footer
