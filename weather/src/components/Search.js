import React from 'react'

function Search(props) {
    return (
      <div className='search'>
      <h1>TODAY'S FORCAST</h1>
      <form onSubmit={props.onSubmit} onClick={props.onLogin}>
        <input type= 'text'
               name='zipCode'
               placeholder='Enter Zipcode'
               maxLength= {5}
               value={props.zipCode}
               onChange={props.onChange}
        />
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }

export default Search