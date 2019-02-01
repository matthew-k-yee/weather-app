import React from 'react'

function Search(props) {
    return (
      <>
      <h1>Weather App</h1>
      <form onSubmit={props.onSubmit} onClick={props.onLogin}>
        <input type= 'text'
               name='zipCode'
               maxLength= {5}
               value={props.zipCode}
               onChange={props.onChange}
        />
        <button type='submit'>Submit</button>
      </form>
      </>
    )
  }

export default Search