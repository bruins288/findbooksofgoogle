import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={150}
    height={288}
    viewBox="0 0 150 288"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="25" y="10" rx="0" ry="0" width="100" height="150" />
    <rect x="25" y="170" rx="0" ry="0" width="100" height="15" />
    <rect x="25" y="194" rx="0" ry="0" width="100" height="40" />
  </ContentLoader>
);

export default Skeleton;
