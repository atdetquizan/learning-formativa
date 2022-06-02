import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function useFetch(url: string): { data: any, loading: string, error: string} {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<string | null>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res: any) => {
        setLoading(null);
        res.data && setData(res.data);
        res.content && setData(res.content);
      })
      .catch((err) => {
        setLoading(null);
        setError("Ocurrio un errror en el servicio");
      });

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading: loading as string, error: error as string };
}

export default useFetch;