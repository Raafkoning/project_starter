import React, { Component } from "react";

import PortfolioItem from "./portfolio-items";

export default class PortfolioContainer extends Component{
    constructor(){
        super();

            this.state = {
                pageTitle: "Welcome to my portfolio bitch"
            }
    }

    portfolioitems(){
        const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];

        return  data.map(item => {
            return <PortfolioItem title={item} url={"google.com"}/>;
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioitems()}
            </div>
        )
    }
}