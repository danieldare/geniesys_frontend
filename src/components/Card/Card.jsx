import React from 'react';

function Card({ item, index, showModal }) {
  const tags = item.tags.join(', ');

  return (
    <div className='card' onClick={() => showModal()}>
      <div className='card__content'>
        <div className='card-header'>
          <h2 className='card-number'>#{index + 1}</h2>
          <h2 className='card-title'>{item.title}</h2>
        </div>

        <div className='card-body'>{item.description || 'click to add a description'}</div>
        <hr />
        <div className='card-footer'>
          <div className='card-tags'>
            <span className='tag'>{tags || 'no tags yet'}</span>
          </div>
          <p className='card-user-tag'>DO</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
