import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={275}
    height={500}
    viewBox="0 0 275 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="100" cy="100" r="100" />
    <rect x="0" y="260" rx="0" ry="0" width="240" height="20" />
    <rect x="0" y="290" rx="0" ry="0" width="240" height="50" />
    <rect x="1" y="350" rx="10" ry="10" width="240" height="70" />
    <rect x="0" y="430" rx="15" ry="15" width="115" height="30" />
    <rect x="150" y="435" rx="0" ry="0" width="90" height="20" />
  </ContentLoader>
);

export default Skeleton;
