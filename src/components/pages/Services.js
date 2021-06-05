import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem2 from '../CardItem2';
import {useState, useEffect} from 'react';

export default function Services() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  setTimeout(() =>{
    setTimedPopup(true);
  }, 3000);

    return (
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem2 onClick={() => setButtonPopup(true)} 
                src='images/img-9.jpg'
                text='Enjoy a look to a rustic feeling'
                label='Rustic Room'
                path='/services'
              />
              <CardItem2
                src='images/img-2.jpg'
                text='Get a feel of spaciousness and luxury'
                label='Luxury Room'
                path='/services'
              />
            </ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          </div>
        </div>
      </div>
    );
  }