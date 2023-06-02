import React, { useEffect } from 'react'

export default function Child({ returnComment }) {
     useEffect(() => {
          console.log('Function Called');
     }, [returnComment]);
     return (
          <div>
               {returnComment("Check")}
          </div>
     )
}
