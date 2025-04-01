import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
export function useContent() {
  const [contents, setContents] = useState([]);

  function refresh() {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // Ensure contents is always an array
        setContents(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setContents([]); // Prevents undefined state
      });
  }

  useEffect(() => {
    refresh();
    let interval = setInterval(() => {
      refresh();
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { contents, refresh };
}
