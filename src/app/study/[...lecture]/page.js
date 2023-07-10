"use client"
export default function Lecture ({params}={params:{lecture : String, days: Number}}){
    console.log(params)
    return (
        <div>
            <h1>{params.lecture}</h1>
            <h2>{params.days}</h2>
        </div>
    )
}