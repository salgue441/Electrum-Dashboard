import { useEffect, useState } from "react"

// CSV reading
import Papa from "papaparse"
import csvFile from "../../Assets/Data/testData.csv"

/**
 * @brief
 * Uses a custom API endpoint to fetch data from a given URL.
 * @return {Object} data - The data fetched from the API.
 */
const useDataApi = () => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setIsPending(true)

        Papa.parse(csvFile, {
          header: true,
          download: true,
          complete: (results) => {
            setData(results.data)
            setIsPending(false)
          },
        })
      } catch (error) {
        setIsPending(false)
        console.log(error + " in useDataApi hook")
      }
    }

    fetchAPI()
  }, [])

  return { data, isPending }
}

export default useDataApi
