import * as React from "react";
import { TimelineObjectType } from "@core/timelineAPI";
import { HorizontalTimeline } from "@variants/HorizontalTimeline";
import { VerticalTimeline } from "@variants/VerticalTimeline";

export const Timeline = ({
  type,
  data,
}: {
  type: "vertical" | "horizontal";
  data: TimelineObjectType[];
}) => {
  if (type === "vertical" && data) {
    return <VerticalTimeline data={data} />;
  } else if (type === "horizontal" && data) {
    return <HorizontalTimeline data={data} />;
  } else {
    return null;
  }
};
