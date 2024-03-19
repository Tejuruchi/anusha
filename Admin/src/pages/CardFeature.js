// CardFeature.js
import React from 'react';

const CardFeature = ({ name, image, category, description, date, total, loading }) => {
  if (loading) {
    return <div>{loading}</div>; // Or any loading state you want to show
  }

  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>{description}</p>
        <p className="text-sm">{category}</p>
        <p>Date: {date}</p>
        <p>Total: {total}</p>
      </div>
    </div>
  );
};

export default CardFeature;
