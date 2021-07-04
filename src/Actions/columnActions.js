import axios from "axios";
export async function getColumnData(token, pageNumber) {
  var response = "";
  try {
    response = await axios.get("https://plotter-task.herokuapp.com/columns");
    if (response.status !== 200) {
      return response.status;
    } else {
      return response.data;
    }
  } catch (e) {
    return response.status;
  }
}

export default getColumnData;
