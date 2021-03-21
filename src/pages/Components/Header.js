import { Link } from 'gatsby';
import React from 'react';
import Button from './Button';

import "./styles/styles.scss"

function Header() {
  return (
    <header>
      <h3>clarenceWilliams</h3>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/">Bio</Link>
          <Link to="/">Projects</Link>
        </div>
      <Button />
    </header>
  )
}

export default Header
