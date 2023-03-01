/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
declare function getStrapiURL(path?: string): string;
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
declare function fetchTimelineData(urlParamsObject?: object, options?: object): Promise<TimelineObjectType[]>;
type TimelineObjectType = {
    id: any;
    title: string;
    meta: string;
    subtitle: string;
    description: string;
};

declare const Timeline: ({ type, data, }: {
    type: "vertical" | "horizontal";
    data: TimelineObjectType[];
}) => JSX.Element | null;

export { Timeline, TimelineObjectType, fetchTimelineData, getStrapiURL };
