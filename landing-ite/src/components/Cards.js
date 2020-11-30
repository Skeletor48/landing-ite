import React from "react";
import CardItem from "./CardItem";
import pic1 from "../assets/images/img-12.png";
import pic2 from "../assets/images/img-13.png";
import pic3 from "../assets/images/img-14.png";
import pic4 from "../assets/images/img-15.png";
import pic5 from "../assets/images/img-16.png";
import "./Cards.css";

export default function Cards() {
    return (
        <div className='cards'>
            <h1> Check out my works </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={pic1}
                            text='Fancy card carousel'
                            label='HTML + CSS'
                            path='/projects'
                        />
                        <CardItem
                            src={pic2}
                            text='A secret server. Which stores.. ohm well...secrets'
                            label='Vue,Node,Mongo'
                            path='/projects'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={pic3}
                            text='A Light web crawler app that stoles 
                            the daily menu data from a restaurant'
                            label='React,Node'
                            path='/projects'
                        />
                        <CardItem
                            src={pic4}
                            text='Just another Covid-19 tracker'
                            label='React'
                            path='/projects'
                        />
                        <CardItem
                            src={pic5}
                            text='Comming soon...'
                            label='React, Firebase'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
