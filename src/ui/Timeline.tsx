import * as React from "react";
import { TimelineObjectType } from "@palanikannan1437/rc4-core";
import { HorizontalTimeline } from "./timeline-variants/HorizontalTimeline";
import { VerticalTimeline } from "./timeline-variants/VerticalTimeline";

export const Timeline = ({
  type,
  data,
}: {
  type: "vertical" | "horizontal";
  data: TimelineObjectType[];
}) => {
  if (type == "vertical" && data) {
    return (
      <VerticalTimeline data={data} />
    );
  } else if (type == "horizontal") {
    return (
      <HorizontalTimeline data={data} />
    );
  } else {1
    return null;
  }
};
