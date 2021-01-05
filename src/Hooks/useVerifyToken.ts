import * as React from 'react';
import axios from "axios";
import { API_URL, ApiEndPoints, config } from '../Constants/apiEndpoints';

import { removeUserSession, setUserSession, getToken } from './../Utils/Index';
 
const useVerifyToken = () => {
  const [loading, setLoading] = React.useState(false);

  const api = axios.create({ baseURL: API_URL });

  const fetchData = () => {
    try {
      const token = getToken();

      if (!token) {
        return;
      }

      setLoading(true)
      api.get(`${ApiEndPoints.users.verifyIdToken}${token}`, config)
      .then(response => {
        setUserSession(token, response.data.data);
      })
      .catch(error => {
        removeUserSession();
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false)
    }
  };

  return [loading, fetchData] as const;
}

export default useVerifyToken