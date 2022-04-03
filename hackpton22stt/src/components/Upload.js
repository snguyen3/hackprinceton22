import React, { useState } from 'react';
import ProgBar from './ProgBar';
import Transcript from './Transcript';





const Upload = () => {
    const [file, setFile] = useState(null);
    const types = ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/flac', 'audio/ogg', 'audio/x-m4a', 'audio/x-flac', 'audio/x-wav', 'audio/mpeg'];
    const [error, setError] = useState(null);
    const data = '';
        
 
        

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected.type);

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select a valid file (mp4, wav, m4a, flac)');
        }
        


    }
    return (
        <div className="upload">
            <form>
                <label> 
                    <input type="file" name="file" onChange={changeHandler}/>
                    <span>+</span>
                </label>
                
                <div className="file-label"> 
                {error && <p className="error">{error}</p>}
                {file && <p>{file.name}</p>}
                {file && <ProgBar file={file} setFile={setFile} />}
                </div>
            </form>
                
        </div>
    );

}

    export default Upload;