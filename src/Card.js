import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src="/images/katie_zaferes.png" alt="" className="card--image"/>
            <div className="card--stats">
                <img src="/images/airbnb_star.png" alt="" className="card--star"/>
                <span>5.0</span> 
                <span className="gray">(6) -&nbsp;</span>
                <span className="gray">USA</span>
            </div>
            <div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
    )
}