import React from 'react';
import SillyItem from '../Components/SillyItem';

const sillyItems = [
  { id: 1, name: 'Giggle Glasses', description: 'See the world through laughter!', price: 9.99 },
  { id: 2, name: 'Whoopee Cushion', description: 'Classic prank for endless fun!', price: 4.99 },
];

const SillyItemsPage = () => (
  <div>
    <h2>Silly Items</h2>
    {sillyItems.map((item) => (
      <SillyItem key={item.id} {...item} />
    ))}
  </div>
);

export default SillyItemsPage;