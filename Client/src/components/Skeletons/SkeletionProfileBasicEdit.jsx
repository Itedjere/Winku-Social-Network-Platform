import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const Box = ({ children, half = false }) => {
  return (
    <div className={`form-group ${half ? "half" : ""}`}>
      <div className="position-relative">{children}</div>
    </div>
  );
};

export default function SkeletionProfileBasicEdit() {
  return (
    <SkeletonTheme height="40px">
      <Box half>
        <Skeleton />
      </Box>
      <Box half>
        <Skeleton />
      </Box>
      <Box>
        <Skeleton />
      </Box>
      <Box>
        <Skeleton />
      </Box>
      <Box>
        <Skeleton />
      </Box>
      <Box half>
        <Skeleton />
      </Box>
      <Box half>
        <Skeleton />
      </Box>
      <Box>
        <Skeleton />
      </Box>
    </SkeletonTheme>
  );
}
