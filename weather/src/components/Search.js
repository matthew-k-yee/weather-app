import React from 'react'

function Search(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <input type= 'number'
               name='zipCode'
               value={props.zipCode}
               onChange={props.onChange}
        />
        <button type='submit'>Click</button>
      </form>
    )
  }

export default Search