import React from "react"
import "./imageLinkForm.css"
const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures"}
      </p>
      <div className="center">
        <div className="form center pa3 br4 shadow-5">
          <input
            className="br-0 f4 pa2 w-70"
            type="text"
            placeholder="photo.img"
          />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
