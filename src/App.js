import { useEffect, useState } from 'react';
import { Auth } from './components/auth';
import { db, auth } from './config/firebase';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';

function App() {
  const [coffeeList, setCoffeeList] = useState([]);

  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState(0);

  const [updatedItem, setUpdatedItem] = useState('');

  const colRef = collection(db, 'coffeelist');

  const getCoffeeList = async () => {
    try {
      const data = await getDocs(colRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCoffeeList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCoffeeList();
  }, []);

  const onSubmitCoffee = async () => {
    try {
      await addDoc(colRef, {
        item: newItem,
        price: newPrice,
        userId: auth?.currentUser?.uid,
      });
      getCoffeeList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCoffee = async (id) => {
    const coffeeDoc = doc(db, 'coffeelist', id);
    await deleteDoc(coffeeDoc);
    getCoffeeList()
  };

  const updateCoffee = async (id) => {
    const coffeeDoc = doc(db, 'coffeelist', id);
    await updateDoc(coffeeDoc, {
      item: updatedItem,
    });
    getCoffeeList();
  };

  return (
    <div className="App">
      <Auth />
      <div>
        <input
          placeholder="Item"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <input
          placeholder="Price"
          type="number"
          onChange={(e) => setNewPrice(Number(e.target.value))}
          value={newPrice}
        />

        <button onClick={onSubmitCoffee}> Upload Coffee</button>
      </div>
      <div className='container'>
        {coffeeList.map((coffee) => (
          <div className='item'>
            <h1>{coffee.item}</h1>
            <p>Price: $ {coffee.price}</p>


            <input
              placeholder="new item"
              onChange={(e) => setUpdatedItem(e.target.value)}
            />

            <button onClick={() => updateCoffee(coffee.id)}>
              {' '}
              Update Coffee
            </button>
            <button className='del-btn' onClick={() => deleteCoffee(coffee.id)}>Delete Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
