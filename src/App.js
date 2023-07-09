import React, { useState } from 'react';
import { Input, Card, Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const createFood = (newFood) => {
    setFoodsToDisplay([newFood, ...foodsToDisplay]);
  };

  const deleteFood = (name) => {
    const newFoods = foodsToDisplay.filter((food) => food.name !== name);
    setFoodsToDisplay(newFoods);
  };

  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm callBackToCreate={createFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsToDisplay.map((food) => (
          <FoodBox key={food.name} food={food} onDelete={() => deleteFood(food.name)} />
        ))}
      </Row>
    </div>
  );
}

export default App;
