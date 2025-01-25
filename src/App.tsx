import * as React from "react";
import axios from "axios";
import "./App.style.css";
import { useQuery } from "@tanstack/react-query";

import { Header, Body, Footer } from "./components";
import { DataProvider, backup } from "./useData";
import type { CV } from "./cv.types";

async function fetchData(): Promise<CV> {
  if (process.env.NODE_ENV === "development") {
    return backup;
  } else {
    try {
      const result = await axios.get(process.env.REACT_APP_DATA_SITE ?? "", {
        headers: {
          "X-Master-Key": process.env.REACT_APP_DATA_MASTER_KEY,
        },
      });

      if (result.status >= 200 && result.status < 300) {
        return result.data;
      } else {
        console.error("Error fetching data. Status:", result.status);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
      return backup;
    }
    return backup;
  }
}

function App() {
  const { data } = useQuery({
    staleTime: Infinity,
    queryFn: fetchData,
    queryKey: ["user-data"],
  });
  return (
    <div className="app-container bg-dark-1">
      <Header />
      <DataProvider value={data ?? backup}>
        <Body />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
