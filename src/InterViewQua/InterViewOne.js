import React from 'react'

const InterViewOne = () => {

    function deepFlattenToObject(obj){
        console.log("Redursive Function:", obj)

        let resObj = {}

        for(let key in obj){
            console.log(typeof obj[key])
            if(typeof obj[key] === 'object' && obj[key] !== null){
                let flatKey = `${key}.${deepFlattenToObject(obj[key])}`;
               console.log("flatKey:",flatKey)
            }
            // resObj= obj[key]
            // console.log("loop:",key,':', obj[key])

        }
        // console.log('reObj:', resObj)
    }
    const obj = {
        a: 1,
        b: [2, 3],
        c: {
          d: 4,
          e: [5, 6],
          f: {
              g: 7
             }
         }
       };
       const flattened = deepFlattenToObject(obj);
       console.log(flattened); 

    //    {
    //     "a": 1,
    //     "b.0": 2,
    //     "b.1": 3,
    //     "c.d": 4,
    //     "c.e.0": 5,
    //     "c.e.1": 6,
    //     "c.f.g": 7
    //   }

  return (
    <div>
      InterViewOne
    </div>
  )
}

export default InterViewOne
