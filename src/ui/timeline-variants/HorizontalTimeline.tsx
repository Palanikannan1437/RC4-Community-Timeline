import * as React from "react";
import { TimelineObjectType } from "@palanikannan1437/rc4-core";

export const HorizontalTimeline = ({
  data,
}: {
  data: TimelineObjectType[];
}) => {
  return (
    <ol className="ui-border-l ui-border-gray-200 md:ui-flex md:ui-justify-center md:ui-gap-6 md:ui-border-l-0 md:ui-border-t">
      {data.map((d: TimelineObjectType) => {
        return (
          <li key={d.id}>
            <div className="flex-start ui-flex ui-items-center ui-pt-2 md:ui-block md:ui-pt-0">
              <span className="ui-relative ui-bottom-4 ui-left-1  ui-flex ui-h-6 ui-w-6 ui-items-center ui-justify-center ui-rounded-full ui-bg-blue-100 ui-ring-8 ui-ring-white dark:ui-bg-blue-900 dark:ui-ring-gray-900 ">
                <svg
                  aria-hidden="true"
                  className="ui-h-3 ui-w-3 ui-text-blue-800 dark:ui-text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="ui--ml-1 ui-mr-3 ui-h-2 ui-w-2 ui-rounded-full ui-text-gray-400 dark:ui-text-gray-500 md:ui-ml-0 md:ui-mr-0 md:ui--mt-1"></div>
              <p className=" ui-text-sm ui-text-gray-500">{d.meta}</p>
            </div>
            <div className="ui-mt-0.5 ui-ml-4 ui-pb-5 md:ui-ml-0">
              <h4 className="ui-mb-1.5 ui-text-xl ui-font-semibold ui-text-gray-900 dark:ui-text-white">
                {d.title}
              </h4>
              <p className="ui-mb-3 ui-text-gray-500 dark:ui-text-gray-400">
                {d.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
