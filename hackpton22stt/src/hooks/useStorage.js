import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp  } from '../firebase/config';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection } from 'firebase/firestore';
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
  
    useEffect(() => {
      // references
      const storageRef = ref(projectStorage, file.name);
      const collectionRef = collection(projectFirestore, 'audio');
      const uploadTask = uploadBytesResumable(storageRef, file);
      
    uploadTask.on('state_changed', snapshot => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        }, error => {
            setError(error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                setUrl(url);
                collectionRef.add({
                    name: file.name,
                    url,
                    createdAt: timestamp()
                });
            });
        });
    }, [file]);

  
    return { progress, url, error };
  }
  
  export default useStorage;