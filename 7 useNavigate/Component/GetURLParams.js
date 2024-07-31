import React from 'react'
import { useSearchParams } from 'react-router-dom'

function GetURLParams() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("name"))
    console.log(searchParams.get("city"))

    const name = searchParams.get("name");
    const city = searchParams.get("city");

    return (
        <>
            <h1>Get Url Params</h1>
            <h3>Name is : {name}</h3>
            <h3>City is : {city}</h3>

            <button onClick={() => setSearchParams({ name: "kishan pithiya", city: "junagadh" })}>Update Url params value</button>

            <input type='text' onChange={(e) => setSearchParams({ job: e.target.value,name: "kishan pithiya", city: "junagadh" })} placeholder='set more url params value'></input>
        </>
    )
}

export default GetURLParams
