import * as React from "react";
import { TimelineObjectType } from "@palanikannan1437/rc4-core";

export const VerticalTimeline = ({
  data,
}: {
  data: TimelineObjectType[];
}) => {
  return (
    <ol className="ui-relative ui-border-l ui-border-gray-200 dark:ui-border-gray-700">
        {data.slice(0, data.length - 1).map((d: TimelineObjectType) => {
          return (
            <li className="ui-mb-10 ui-ml-6" key={d.id}>
              <span className="ui-absolute ui--left-3 ui-flex ui-h-6 ui-w-6 ui-items-center ui-justify-center ui-rounded-full ui-bg-blue-100 ui-ring-8 ui-ring-white dark:ui-bg-blue-900 dark:ui-ring-gray-900">
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
              <h3 className="ui-mb-1 ui-flex ui-items-center ui-text-lg ui-font-semibold ui-text-gray-900 dark:ui-text-white">
                {d.title}
              </h3>
              <time className="ui-mb-2 ui-block ui-text-sm ui-font-normal ui-leading-none ui-text-gray-400 dark:ui-text-gray-500">
                {d.subtitle}
              </time>
              <p className="ui-mb-4 ui-text-base ui-font-normal ui-text-gray-500 dark:ui-text-gray-400">
                {d.description}
              </p>
            </li>
          );
        })}
        <li className="ui-ml-6" key={data[data.length - 1].id}>
          <span className="ui-absolute ui--left-3 ui-flex ui-h-6 ui-w-6 ui-items-center ui-justify-center ui-rounded-full ui-bg-blue-100 ui-ring-8 ui-ring-white dark:ui-bg-blue-900 dark:ui-ring-gray-900">
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
          <h3 className="ui-mb-1 ui-text-lg ui-font-semibold ui-text-gray-900 dark:ui-text-white">
            {data[data.length - 1].title}
          </h3>
          <time className="ui-mb-2 ui-block ui-text-sm ui-font-normal ui-leading-none ui-text-gray-400 dark:ui-text-gray-500">
            {data[data.length - 1].meta}
          </time>
          <p className="ui-text-base ui-font-normal ui-text-gray-500 dark:ui-text-gray-400">
            {data[data.length - 1].description}
          </p>
        </li>
      </ol>
  );
};
