import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';
import { ref, getMetadata, } from 'firebase/storage';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .onSnapshot((snap) => {
        snap.forEach(async (doc) => {
          try {
            const forestRef = ref(projectStorage, doc.data().url);
            const metadata = await getMetadata(forestRef);
            setDocs(documents => [
              ...documents,
              { ...doc.data(), metadata, id: doc.id }
            ]);
          } catch(error) {
            console.log(error);
          };
        });  
      });
  
    return unsubscribe;
  }, []);

  return { docs };
}

export default useFirestore;