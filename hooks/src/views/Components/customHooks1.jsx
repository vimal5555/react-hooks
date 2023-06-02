import axios from 'axios';
import React from 'react'
import useQuery from './Hooks/useQuery';
export default function CustomHooks1() {

     const { response } = useQuery(axios.get(`https://foodish-api.herokuapp.com/api/`));
     
     return (
          <div>
               <h1>CustomHooks1</h1>
               <img src={response.image} alt="Varalena poda" />
          </div>
     )
}
