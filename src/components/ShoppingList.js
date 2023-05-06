import React, { useContext, useState } from 'react';
import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';
import { CartContext } from '../context';

function ShoppingList() {
  const { cart, updateCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState('');
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const filteredCurrentPlant = cart.filter((plant) => plant.name !== name);
      updateCart([
        ...filteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  function deleteToCart(name) {
    const deletePlant = cart.filter((plant) => plant.name !== name);
    updateCart(deletePlant);
  }

  function editToCart(name) {}
  return (
    <div>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
      <ul className="lmj-plant-list">
        {plantList.map((plant) =>
          !activeCategory || activeCategory === plant.category ? (
            <div key={plant.id}>
              <PlantItem
                name={plant.name}
                cover={plant.cover}
                light={plant.light}
                water={plant.water}
                price={plant.price}
              />
              <button onClick={() => addToCart(plant.name, plant.price)}>
                Ajouter
              </button>
              <button
                onClick={() => deleteToCart(plant.name)}
                className="lmj-button-delete"
              >
                supprimer
              </button>
              <button
                onClick={() => editToCart(plant.name)}
                className="lmj-button-delete"
              >
                Modifier
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
