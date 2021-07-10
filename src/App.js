import React, { Component } from "react"
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm"
import Ranks from "./components/ranks/Ranks"

// import Particles from "react-particles-js"
import "./App.css"

// const particlesOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5,
//       },
//     },
//   },
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Particles params={particlesOptions} /> */}
        <Navigation />
        <Logo />
        <Ranks />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App
