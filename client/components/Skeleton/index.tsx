import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  speed={1}
  width={320}
  height={122}
  viewBox="0 0 320 122"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="55" y="17" rx="0" ry="0" width="80" height="15" /> 
  <circle cx="24" cy="25" r="23" /> 
  <rect x="0" y="53" rx="0" ry="0" width="78" height="17" /> 
  <rect x="0" y="75" rx="0" ry="0" width="177" height="47" />
</ContentLoader>
)

export default Skeleton