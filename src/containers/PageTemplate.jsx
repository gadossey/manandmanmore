import React from "react"

const PageTemplate = ({ pageTitle, pageImagePath, children }) => {
  const imagePath = require(`../../content/assets/${pageImagePath}`)

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* TopSide */}
      <div style={{ height: "200px", display: "flex" }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h1>{pageTitle}</h1>
        </div>
        <div style={{ flex: 1 }}>
          <img src={imagePath} alt="Page Image" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </div>
      </div>

      {/* Breadcrumbs Section */}
      <div style={{ height: "50px", display: "flex", alignItems: "center" }}>
        {/* Breadcrumbs go here */}
        {/* Example: */}
        <span>Home</span>
        <span>&nbsp;&gt;&nbsp;</span>
        <span>Page</span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  )
}

export default PageTemplate
