import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={467}
        viewBox="0 0 280 467"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="135" cy="123" r="123" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="28" />
        <rect x="0" y="321" rx="10" ry="10" width="280" height="80" />
        <rect x="0" y="430" rx="10" ry="10" width="91" height="27" />
        <rect x="151" y="422" rx="30" ry="30" width="124" height="45" />
    </ContentLoader>
)

export default Skeleton