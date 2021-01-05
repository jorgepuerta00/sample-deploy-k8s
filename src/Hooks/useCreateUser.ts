import * as React from 'react';
import axios from "axios";
import { API_URL, ApiEndPoints, config } from '../Constants/apiEndpoints';
 
const useCreateUser = () => {
  const [result, setData] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();

  const api = axios.create({ baseURL: API_URL });

  const createUser = async (data: IUser) => {
    try {
      setLoading(true)
      setError("")
      await api.post(`${ApiEndPoints.users.createUser}`, data, config)
      .then(response => {
        setData("Saved succesfully!")
      })
      .catch(error => {
        setError("Error saving to database.")
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false)
    }
  };

  return [loading, result, error, createUser] as const;
}

interface IUser {
  firstname: string,
  lastname: string,
  email: string,
  age: string,
  score: string
}

export default useCreateUser