import React from 'react';
import CardList from '../../components/CardList/CardList';
import { useStateValue } from '../../store';

function Board({ showModal }) {
  const [{ data }] = useStateValue();

  return (
    <>
      <div className='board'>
        {data.map((info) => (
          <CardList key={info.type} type={info.type} data={info.cardData || []} showModal={showModal} />
        ))}
      </div>
    </>
  );
}

export default Board;
