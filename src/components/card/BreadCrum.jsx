import React from 'react';

export default function BreadCrum({ text }) {
  return (
    <div
      className="w-full p-4"
      style={{
        // background: 'linear-gradient(45deg, #389b49, #7fb948)',
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center" style={{color: '#2e9b47'}}>{text}</h1>
      </div>
    </div>
  );
}
