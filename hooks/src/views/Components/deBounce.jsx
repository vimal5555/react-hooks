import React, { useState, useEffect } from "react";
import useDebounce from './Hooks/useDebounce';
import moment from 'moment';


export default function DeBounce() {

     const [searchTerm, setSearchTerm] = useState("");
     const debouncedSearchTerm = useDebounce(searchTerm, 2000);

     useEffect(() => {
          if (debouncedSearchTerm) {
               console.log(debouncedSearchTerm, moment().format('LLLL'), moment().format('LTS'));
          }
     }, [debouncedSearchTerm])

     return (
          <div>
               <input className="form-control" type="text"
                    placeholder="Search Something To See the Change.."
                    onChange={(e) => setSearchTerm(e.target.value)}
               />
               <div>{debouncedSearchTerm}</div>

          </div>
     )
}
