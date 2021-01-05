import * as React from 'react';
import axios from "axios";
import { API_URL, ApiEndPoints, config } from '../Constants/apiEndpoints';
 
const useGetUser = () => {
  const [data, setData] = React.useState<IUser>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();

  const api = axios.create({ baseURL: API_URL });

  const fetchData = async (uid: string) => {
    try {
      setLoading(true)
      setError("")
      await api.get(`${ApiEndPoints.users.getUserById}${uid}`, config)
      .then(response => {
        setData(response.data.data)
      })
      .catch(error => {
        setError("Error retriving data from database.")
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false)
    }
  };

  return [loading, data, error, fetchData] as const;
}

interface IUser {
  id: string,
  documentnumber: string,
  documenttype: string,
  firstname: string,
  lastname: string,
  email: string,
  age: string,
  score: string
}

export default useGetUser