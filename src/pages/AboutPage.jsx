import React from 'react'
import Card from '../components/shared/Card'
import {Link} from "react-router-dom"

function AboutPage() {
 
  return (
    <Card>
        <div className='about'>
            <h2>About</h2>
            <p>This is a React app to leave feedback for product or service</p>
            <p>Version: 1.0.0</p>
             <Link to={{
                pathname:"/",
            }}>Back to Home</Link> 
        </div>
    </Card>
  )
}

export default AboutPage