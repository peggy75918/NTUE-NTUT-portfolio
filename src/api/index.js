import axios from "axios";

const baseUrl =
  "https://script.google.com/macros/s/AKfycbzUvJmNkD6ho5dgCKL5gTLE9pcZc8wXhuxsAE5Uy17OxOBSxoZuPDC2tgdcShzRFr1g7w/exec";

export const getSheetData = async () => {
  try {

    const result = await axios.get(`${baseUrl}`);

    return result.data;
  } catch (err) {
    console.log(err);
  }
};