import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <p>Made by clarenceWilliams</p>
      <ul>
        <li><FaGithub /></li>
        <li><FaLinkedin /></li>
        <li><FaEnvelope /></li>
        <li><FaPhone /></li>
      </ul>
    </footer>
  )
}

export default Footer
