import React,{ useState, useMemo } from 'react'

const UseMemoHook = () => {

    const person = [
        { name: "John", age: 32 },
        { name: "Jane", age: 45 },
        { name: "Mike", age: 67 },
        { name: "sayyed", age: 27 }
    ]
    const [count, setCount] = useState(0)
    const [user, setUser ] = useState(person)

    const display = useMemo(()=> user.map((elm)=>{
        console.log('UseMEMO func Exicuted')
        return <p key={elm.name}>Name : {elm.name} - Age : {elm.age}</p>;
    }), [user])

    const handleInput = (e)=>{
        console.log(e.target.value)
        setUser([
                ...user,
                {
                    name: e.target.value,
                    age: user.length + 10 
                }
        ])
    }
  return (
    <div>
      <h3>UseMemoHook</h3>
      <p>{count}</p>
      <button onClick={()=> setCount( count + 1)}>Counter Increment</button>
      <input type='text' onBlur={handleInput}></input>
      {display}
    </div>
  )
}

export default UseMemoHook
