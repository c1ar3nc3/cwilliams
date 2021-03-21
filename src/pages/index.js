import * as React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Landing from "./Components/Landing"
import Bio from "./Components/Bio"
import Projects from "./Components/Projects"

import "/Users/c1ar3nc3/Projects/cwilliams/src/pages/index.scss"

const IndexPage = () => {

  return (
    <main>
      <title>c1ar3nc3</title>
      <Header />
        <div className="sections">
          <Landing />
          <Bio />
          <Projects />
        </div>
      <Footer/>
    </main>
  )
}

export default IndexPage