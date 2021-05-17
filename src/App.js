import './App.css';
import PropTypes from "prop-types";
import React from 'react';

class App extends React.Component {

  state = {
    count : 0
  }
  
  render() {
    return (
      <div>
      <h1> this is a class {this.state.count} </h1>
      <button>Add</button>
      <button>Minus</button>
      </div>
      )
  }
}

export default App;

// const foodILike = [
//   {
//     id:1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//       rating:4.3
//   },
//   {
//     id:2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//       rating:2
//   },
//   {
//     id:3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//       rating:3
//   },
//   {
//     id:4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating:4
//   },
//   {
//     id:5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//       rating:4.3
//   }
// ];

// # 2
// function renderFood(dish) {
//   return (
//     <Food name={dish.name} picture={dish.image} />
//   )
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(renderFood)}
//     </div>
//   )
// }

// #1

// function Food({name,picture,rating}) { 
//   return ( 
//     <div>
//   <h1>I like {name} </h1>
//   <h4>{rating}/5</h4>
//   <img src={picture} />
//   </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return ( 
//   <div>
//     <h1>Hello!</h1>

//     {foodILike.map(props => (
//       <Food key={props.id} name={props.name} picture={props.image} rating={props.rating} />
//     ))}
//   </div>
//   );
// }


