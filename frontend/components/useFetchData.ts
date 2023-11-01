// hooks/useFetchProjectData.ts
import { ProjectData } from "@/app/types/TaskTypes";
import { useEffect, useState } from "react";


const useFetchProjectData = (url: string) => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: ProjectData = await response.json();

     
        setProjectData(data);
        console.log(data)
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error(String(err)));
        }
      }
    }

    fetchData();
  }, [url]);

  return { projectData, error };
};

export default useFetchProjectData;