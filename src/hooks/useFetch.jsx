// useFetch.js
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_API_URL;

const useFetch = (url, query, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (cancelToken) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${backendUrl}${url}${query ? `?${query}` : ""}`,
          {
            cancelToken,
            withCredentials: true,
            ...options,
          }
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    if (!url) return;
    const source = axios.CancelToken.source();
    fetchData(source.token);
    return () => source.cancel("Request canceled by cleanup.");
  }, [fetchData, url]);

  return { data, loading, error, refetch: () => fetchData() };
};

export default useFetch;
