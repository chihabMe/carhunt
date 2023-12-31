const queryBuilder = (params: Record<string, any>): string => {
  const queryString = Object.entries(params)
    .filter(([key, value]) => value != null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value.toString().trim())}`
    )
    .join("&");
  return `?${queryString}`;
};
export default queryBuilder;
