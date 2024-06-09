import api from 'axios';


api.defaults.baseURL = "http://localhost:3001/api";

const setHeader = async () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"))
  if (tokens) {
    const CLIENT_ID = JSON.parse(localStorage.getItem("userInfo"))._id
    api.defaults.headers.common['authorization'] = `${tokens.accessToken}`
    api.defaults.headers.common['x-client-id'] = `${CLIENT_ID}`
  }
  
}

export const GetData = async (endPoint) => {
  try {
    setHeader();
    const response = await api.get(endPoint);
    return response
  } catch (err) {
    throw err
  }

}

export const PostData = async (endPoint, options) => {
  try {
    setHeader();
    const response = await api.post(endPoint, options);
    return response
  } catch (err) {
    throw err;
  }
}

export const PutData = async (endPoint, options) => {

  try {
    setHeader();
    const response = await api.put(endPoint, options);
    return response
  } catch (err) {
    throw err;
  }
}

export const DeleteData = async (endPoint) => {

  try {
    setHeader();
    const response = await api.delete(endPoint);
    return response
  } catch (err) {
    throw err;
  }
}