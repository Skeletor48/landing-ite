import React from "react";
import CardItem from "./CardItem";
import pic1 from "../assets/images/img-9.jpg";
import pic2 from "../assets/images/img-8.jpg";
import pic3 from "../assets/images/img-7.jpg";
import pic4 from "../assets/images/img-6.jpg";
import pic5 from "../assets/images/img-5.jpg";
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
                            text='Some text about Amazon'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={pic2}
                            text='Some text again'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={pic3}
                            text='Some text about Amazon'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={pic4}
                            text='Some text again'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src={pic5}
                            text='Some text again'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
