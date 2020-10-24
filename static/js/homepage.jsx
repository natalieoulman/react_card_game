"use strict";

function Homepage() {
  return (
    <div>
      <h3>Welcome to Trading Center!</h3>
      
      <div>
        <img class = 'center' src='/static/img/balloonicorn.jpg'></img>
        <a href='/cards'>Press this link to play our card game!</a>
      </div>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
