
import React from 'react';

function NewCelebrity() {
  return (
    <div className="CreateCelebrity">
      <h2>Create celebrity: </h2>
      <form action="/celebrities/create" method="POST">
          <label for="name">Name: </label>
          <input type="text" name="name"></input>
          <label for="name">Occupation: </label>
          <input type="text" name="occupation"></input>
          <label for="name">Catch phrase: </label>
          <input type="text" name="catchPhrase"></input>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewCelebrity;
