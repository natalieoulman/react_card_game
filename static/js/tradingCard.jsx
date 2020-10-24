"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill} </h2>
    </div>
  );
}


function TradingCardContainer(props) {
  const cards = []
  for (const card of tradingCardData) {
    cards.push(<TradingCard 
      name={card.name}
      imgUrl={card.imgUrl}
      skill={card.skill}
    />
    )}
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  );
}

ReactDOM.render(
  (
    <TradingCardContainer
    />
  ),
  document.querySelector('#trading-card')
);

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="Baking Pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="Knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );


// ReactDOM.render(
//   (
//     <TradingCard
//       name="Off By One"
//       skill="See a bajillion colors"
//       imgUrl="/static/img/off-by-one.jpg"
//     />
//   ),
//   document.querySelector('#off-by-one')
// );


// ReactDOM.render(
//   (
//     <TradingCard
//       name="ShortStack Overflow"
//       skill="Providing the drip"
//       imgUrl="/static/img/shortstack-overflow.jpg"
//     />
//   ),
//   document.querySelector('#pancake')
// );