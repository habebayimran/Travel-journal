import React from "react"
import Card from './Card'
import Data from "./Data"

export default function AppLink() {
    const elements=Data.map(
        (info) =>{
            return <Card key={info.id} title={info.title} location={info.location} startDate={info.startDate} endDate={info.endDate} description={info.description} imageUrl={info.imageUrl}/>
        }
    )
  return(
    <div>
        {elements}
    </div>
  )
}
