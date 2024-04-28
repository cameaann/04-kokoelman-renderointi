import axios from "axios";
const baseUrl = "https://notes-backend-3jfv.onrender.com/api/notes";
// const baseUrl ="http://localhost:3001/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  // const nonExisting = {
  //   id: 10000,
  //   content: 'This note is not saved to server',
  //   important: true,
  // }
  // return request.then(response => response.data.concat(nonExisting))
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  try {
    const res = await axios.post(baseUrl, newObject);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const update = async (id, newObject) => {
  try {
    const res = await axios.put(`${baseUrl}/${id}`, newObject);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default { getAll, create, update };
