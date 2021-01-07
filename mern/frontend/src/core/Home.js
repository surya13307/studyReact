import React from 'react'
import { withRouter } from 'react-router-dom'
import '../styles.css'
import {API} from '../backend'
import Base from './Base'

const Home = () => {
    console.log("API IS",API)
    return (
        <Base title = "MY Home">
            <div className = "text-white">
            <h1>Hello Home</h1>
        </div>
        </Base>
    
    )
}
export default withRouter(Home);