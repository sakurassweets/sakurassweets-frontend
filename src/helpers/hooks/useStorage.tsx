import { useEffect, useState } from 'react';
import toast from 'react-toastify';

const useStorage = (storageKey, toastMessages) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(storageKey);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [storageKey]);

  const addItem = (item) => {
    setItems((prevItems) => {
      if (prevItems.some((i) => i.id === item.id)) {
        toast.warning(toastMessages.exists);
        return prevItems;
      }
      const updatedItems = [...prevItems, item];
      localStorage.setItem(storageKey, JSON.stringify(updatedItems));
      toast.success(toastMessages.added);
      return updatedItems;
    });
  };

  const removeItem = (itemId) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      localStorage.setItem(storageKey, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const clearItems = () => {
    localStorage.removeItem(storageKey);
    setItems([]);
  };

  return { items, addItem, removeItem, clearItems };
};

export default useStorage;
