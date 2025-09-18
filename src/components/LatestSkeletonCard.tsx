import { FlexBetween } from "../styled-components/Flex.styles.tsx";
import { SkeletonCard as Skeleton } from "./Latest.styles.tsx";

export default function SkeletonCard() {
  return (
    <Skeleton>
      <div className="skeleton-body-top"></div>
      <FlexBetween>
        <div className="skeleton-body-left"></div>
        <div className="skeleton-body-right"></div>
      </FlexBetween>
    </Skeleton>
  )
}