// import React from 'react'
import {Card} from './Card'
import {Button} from './button'
import {List} from './List'
import { TestCard } from './TestCard'
import { Icons } from './icon'

export const Hero = () => {
  return (
    <div className="hero p-5 grid lg:grid-cols-4 gap-5 grid-cols-1">
        <div className="card1 p-2 flex flex-col border shadow-lg rounded-md">
        <Button/>
        <Card 
        name='Button' 
        bio='The component consists of minor hover effects, usage of react hook
        useState and alert function'
        link="https://github.com/radzhiv25/components/blob/main/src/components/button.js"
        />
        </div>
        <div className="card2 p-2 flex flex-col border shadow-lg rounded-md">
          <List />
          <Card 
          name="List"
          bio="The component consists of a general list which can be customised according to our needs."
          />
        </div>
        <div className="card3 p-2 flex flex-col border shadow-lg rounded-md">
          <TestCard />
          <Card 
          name="View Card"
          bio="Just a View card component for general purpose usage"
          link=""/>
        </div>
        <div className="card4 p-2 flex flex-col border shadow-lg rounded-md">
          <Icons/>
          <Card 
          name="icon"
          bio="Just a normal react component containing icons."
          link=""
          />
        </div>
    </div>
  )
}
