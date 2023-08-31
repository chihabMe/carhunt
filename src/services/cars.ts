export const getCars = async () => {
  const options = {
    headers: {
      "X-Api-Key": process.env.NINJASCARKEY ?? "",
    },
  };
  console.log(options);
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/cars?model=+&?limit=5",
      options
    );
    return response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
