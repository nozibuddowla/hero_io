import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios("../apps.json");
        setApps(response.data);
      } catch (error) {
        setError(error.message || "Failed to load apps");
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  return { apps, loading, error };
};

export default useApps;
