import React, { useEffect, useState } from "react"

function App() {

const [showDog, setShowDog] = useState(null)

useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp=> resp.json())
    .then((data)=> {
        setShowDog(data.message)
    })
}, [])
    if (!showDog) return <p>Loading ...</p>

    return <img src={showDog} alt ="A Random Dog" />
}

export default App