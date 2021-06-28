import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalRating = [];

  for (let index = 0; index < 5; index++) {
    totalRating.push(
      <li className={index < rating ? "star" : "star-o"} key={index}>
        <FaStar />
      </li>
    );
  }

  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
