import React, { useState } from 'react';
import Card from '../Card/Card';
import uuid from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import { useStateValue } from '../../store';

function CardList({ type, data, showModal }) {
  const [state, setState] = useState({
    addCard: false,
    title: '',
    description: '',
    onFocus: false,
  });

  const [_, dispatch] = useStateValue();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleFocus() {
    setState({
      ...state,
      onFocus: true,
    });
  }

  function handleBlur() {
    if (state.title === '' && state.description === '' && state.onFocus) {
      setState({
        ...state,
        onFocus: false,
        addCard: false,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: 'ADD_CARD',
      cardSection: type,
      payload: {
        id: uuid(),
        title: state.title,
        description: state.description,
        tags: [],
        user_assigned: 'segun Oluwadare',
      },
    });

    setState({
      ...state,
      addCard: false,
      title: '',
      description: '',
    });
  }

  return (
    <div className='card-list'>
      <div className='card-list__title'>
        {type}
        <span>{data.length}</span>
      </div>
      <div className='card-list__content'>
        <DragDropContext onDragEnd={(result) => console.log(result)}>
          {data.map((item, index) => (
            <Card item={item} key={item.id} index={index} showModal={showModal} cardType={type} />
          ))}
        </DragDropContext>

        {state.addCard ? (
          <>
            <form onSubmit={handleSubmit} className='form-container'>
              <input autoFocus type='text' name='title' onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} placeholder='add task section e.g ui/ux' value={state.title} />
              <textarea onBlur={handleBlur} onFocus={handleFocus} name='description' onChange={handleChange} value={state.text} placeholder='add description' rows='2' draggable={false}></textarea>
              <button type='submit'>save</button>
              <button className='btn-red' type='button' onClick={() => setState({ ...state, addCard: false, title: '', description: '' })}>
                close
              </button>
            </form>
          </>
        ) : (
          <div className='add-new-card' onClick={() => setState({ ...state, addCard: true })}>
            <span>&#x2b;</span> Add Card
          </div>
        )}
      </div>
    </div>
  );
}

export default CardList;
