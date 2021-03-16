import * as React from "react"
import Landing from "./Components/Landing"
import Bio from "./Components/Bio"
import Projects from "./Components/Projects"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

const IndexPage = () => {

  return (
    <main>
      <title>c1ar3nc3</title>
      <Header />
        <div>
          <Landing />
          <Bio />
          <Projects />
        </div>
      <Footer/>
    </main>
  )
}

export default IndexPage