import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free Cocktails",
                info: "Suntory Toki Whiskey, Bordiga Apertivo, Grapefruit IPA Syrup, Pineapple, India Pale Ale"
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "Alpine mountains represent one of the most important tourist destinations in the world, constituting approximately 3.1% of the global tourism market when considering the tourist flows coming from abroad"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "National sales and service with local providers in your area"
            },
            {
                icon:<FaBeer/>,
                title: "Strongest Beer",
                info: "Light, crisp and bubbly, Smirnoff Seltzer Red, White & Berry is the Patriotic Seltzer of Summer! "
            }
        ]
    }
    render() {
        return (
            <section className = "services">
                <Title title = "services"/>
                <div className = "services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key = {index} className = "service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
