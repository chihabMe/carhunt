import queryBuilder from "@/lib/searchQueryBuilder";
import ICar from "@/interfaces/ICar";
export const getCars = async (
  {
config,queries
  }
  :{
config?:Record<string,any>,queries?:Record<string,string>
}={}):Promise<ICar[]> => {
  const options = {
    headers: {
      "X-Api-Key": process.env.NINJASCARKEY ?? "",
    },
    ...config,
  };

  const query = queryBuilder({ limit: 10, model: " ", ...queries });
  const url = `https://api.api-ninjas.com/v1/cars${query}`;
  console.log(options);
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/cars?model=+&?limit=5",
      options
    );
    if(!response.ok){
      const data = await response.json()
      console.error(data)
      throw new Error("unable to fetch data")
    }
    return response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
