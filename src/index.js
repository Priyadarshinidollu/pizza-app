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
    soldOut: false,
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
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer/>
    </div>
  );
}

function Header() {
  return( 
    <header className="header">
  <h1>Best Pizza co.</h1>;
  </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
      
        {
        pizzaData.map((pizza)=> (
          <Pizza {...pizza} key={pizza.name}/>
        ))}
        </ul>
      
     
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

function Pizza({photoName,name,ingredients,price}) {
  return (
    <div className="pizza">
       <img src = {photoName}alt={name}/>
       <div>
         <h2>{name}</h2>
         <p>{ingredients}</p>
         <span>{price + 3}</span>
       </div>
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  console.log({hours})
  const openhours = 12;
  const closedhours = 22;
  if(hours >= openhours && hours <= closedhours){

    alert("Welcome!we are open now");}
  else alert("Sorry! We`re closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently open now!
    </footer>
  );
}

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
