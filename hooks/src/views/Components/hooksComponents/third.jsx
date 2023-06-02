import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Third() {

     const [data, setData] = useState('Loading...');


     useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/comments')
               .then((response) => {
                    setData(response.data[10].email);
               })
     }, []);

     return (
          <div>useEffect Example Response : {data}</div>
     )
}
