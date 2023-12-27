import axios from "axios";

const URL = "https://fastapi-for-f2eworks.vercel.app/homeworks/";

export const getSheetData = async () => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};