import { useParams } from "react-router";
import axios from "axios";
import React , { useContext ,useEffect,useState} from "react";

const SearchResult = ()=> {
  const [sedarchData, setSearchData] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:7777/productSearch/search?word=" + params.word
      );
       console.log(result.data.result);
       setSearchData(result.data.result);
    }
    fetchData();
  }, []);
   return(
     <>pppppppp</>
   )
};
export default SearchResult;