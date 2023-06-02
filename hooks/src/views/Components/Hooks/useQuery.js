import { useState, useEffect } from "react";

const useQuery = (request) => {
     const [response, setResponse] = useState({});
     useEffect(() => {
          request.then((response) => {
               console.log('response: ', response);
               setResponse(response.data)
          });

     }, []);

     return { response };
}

export default useQuery;