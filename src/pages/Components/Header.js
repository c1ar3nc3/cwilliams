import { Link } from 'gatsby';
import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header>
      <h3>clarenceWilliams</h3>
        {/* <div>
          <Link to="/">Home</Link>
          <Link to="bio">Bio</Link>
          <Link to="projects">Projects</Link>
        </div> */}
      <Button />
    </header>
  )
}

export default Header
