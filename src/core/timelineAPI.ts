import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path: string = ""): string {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchTimelineData(
  urlParamsObject: object = {},
  options: object = {}
): Promise<TimelineObjectType[]> {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api/timelines${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return transferType(data);
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {Object} data Data from Strapi
 * @returns {TimelineObjectType[]} Array of Timeline objects
 */
function transferType(data: any): TimelineObjectType[] {
  const timeline = data.data;
  return timeline.map((timelineData: any) => {
    return {
      id: String(timelineData.id),
      title: String(timelineData.attributes.title),
      meta: String(timelineData.attributes.meta),
      subtitle: String(timelineData.attributes.subtitle),
      description: String(timelineData.attributes.description),
    };
  });
}

export type TimelineObjectType = {
  id: any;
  title: string;
  meta: string;
  subtitle: string;
  description: string;
};
