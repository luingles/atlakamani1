import React from 'react';
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link2' to={props.path}>
          <figure className='cards__item__pic-wrap2' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel_Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem2;