import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 180,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  
  {
    name:"Samosa Aloo",
    ingredients:"Aloo , beans ,tomato , onions",
    price:100,
    photoName:"pizzas/samosa-image.jpeg",
    soldOut:false
  },

  {
    name:"Samosa",
    ingredients:"Aloo , beans ,tomato , onions",
    price:100,
    photoName:"pizzas/samosa-image.jpeg",
    soldOut:true
  },
  {
    name:"Panner Fried RIce",
    ingredients:"Aloo , beans ,tomato , onions ,panner ,Spices",
    price:100,
    photoName:"pizzas/panner-fried-rice.jpg",
    soldOut:false
  }
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Best Pizza co.</h1>;
    </header>
  );
}

function Menu() {
  const Pizzas = pizzaData;
  const numPizzas = Pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
        <p> 
          Indian cussain !
          all authentic dishes with decent ambiance and
          with all Organic products, all from our stone oven 
          </p>
          <ul className="pizzas">
            
            {
              
            pizzaData.map(
              (pizza) => (
              <Pizza {...pizza} key={pizza.name} />
            
            )
            )
          
            }
          </ul>
          </>
      ) : (
        <p> we're working on menu ! please ome back later </p>
      )}

      {/*<Pizza 
      name = "pizza spinachi"
      Ingredients = "Tomato, mozarella, spinach, and ricotta cheese"
      photoName = "pizzas/spinaci.jpg"
      price = {250}
      />
      {/* </div>
      <div className="pizza"> */}
      {/*} <Pizza 
      name = "Pizza Funghi"
      ingredients = "Tomato, mozarella, mushrooms, and onion"
      price = {320}
      photoName = "pizzas/funghi.jpg"
      soldOut = "false"
      />*/}
    </main>
  );
}

function Pizza({ photoName, name, ingredients, price , soldOut}) {
  // if(soldOut) return null;
  return (
    <li className={`pizza ${ soldOut ? "sold-out":""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span className="sold-out">{soldOut ? "sold-out" : price} </span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const openhours = 12;
  const closedhours = 22;
  const isOpen = hours >= openhours && hours <= closedhours;

  //else alert("Sorry! We`re closed");
  return (
    <footer className="footer">
      {
      isOpen && (
        <Order closedhours= {closedhours} openhours= {openhours}/>
      )}
    </footer>
  );
}
function Order(props){
  return(
    <div className="order">
          <p>Welcome ! we're open untill {props.closedhours} you can visit us now.</p>
          <button className="btn">Order</button>
        </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
