import { HTTPError } from "ky";
import { KyHeadersInit } from "ky/distribution/types/options";
import { useState, useEffect } from "react";
import { api } from "../api/ky";

interface UseFetchProps {
  url: string;
  method?: string;
  body?: BodyInit;
  headers?: KyHeadersInit;
}

const useFetch = <K>({
  url,
  method = "GET",
  body = undefined,
  headers = undefined,
}: UseFetchProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | K>(null);
  const [error, setError] = useState<null | HTTPError>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api(url, {
          method,
          body,
          headers,
        }).json<K>();

        setData(data);
      } catch (error) {
        if (error instanceof HTTPError) setError(error);
      }
    };

    fetchData().finally(() => setIsLoading(false));
  }, []);

  return { isLoading, data, error };
};

export { useFetch };
