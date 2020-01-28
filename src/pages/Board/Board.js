import React, { useState } from 'react';
import CardList from '../../components/CardList/CardList';
import { useStateValue } from '../../store';

function Board({ showModal }) {
  const [{ data }, dispatch] = useStateValue();
  const [state, setState] = useState({
    addCardList: false,
    list_title: '',
  });

  function handleChange(e) {
    setState({
      ...state,
      list_title: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'ADD_CARD_LIST',
      payload: state.list_title,
    });

    setState({
      ...state,
      list_title: '',
      addCardList: false,
    });
  }

  return (
    <>
      <div className='board'>
        {data.map((info) => (
          <CardList key={info.type} type={info.type} data={info.cardData || []} showModal={showModal} />
        ))}

        <div className='btn-holder'>
          {state.addCardList ? (
            <div className='add-card-list'>
              <form onSubmit={handleSubmit}>
                <input autoFocus type='text' placeholder='Add card title' onChange={handleChange} />
                <button type='submit'>save</button>
                <button className='btn-red' type='button' onClick={() => setState({ ...state, addCardList: false, listTitle: '' })}>
                  close
                </button>
              </form>
            </div>
          ) : (
            <button className='btn' onClick={() => setState({ ...state, addCardList: true })}>
              <span>&#x2b;</span> Add Card List
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Board;
