import React, { useState } from 'react';
import InputText from './InputText';
import Button from './Button';

const OptimisticUI = () => {
  const [data, setData] = useState([]);
  const [newItemText, setNewItemText] = useState('');

  const handleAddItem = () => {
    // Optimistically update UI
    const newData = [...data, { id: Date.now(), text: newItemText }];
    setData(newData);

    // Send request to server to add item
    // Assuming addItemToServer returns a promise that resolves when the operation is successful
    addItemToServer(newItemText)
      .then(() => {
        // Update UI with the response from the server (if necessary)
        // In optimistic UI, you might not need to update the UI again
      })
      .catch(error => {
        // If the server request fails, revert the UI state to reflect the actual data
        setData(data); // Revert UI state
        console.error('Error adding item:', error);
        alert('Failed to add item. Please try again.');
      });

    // Clear input field
    setNewItemText('');
  };

  return (
    <div>
      <h3>Optimistic UI</h3>
      <InputText
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Enter new item"
      />
      <Button onClick={handleAddItem}>Add Item</Button>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

// Dummy function add an item to the server
const addItemToServer = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   server after 1 second
      resolve();
    }, 1000);
  });
};

export default OptimisticUI;
