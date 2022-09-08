import React, { useEffect, useState } from 'react';
import app from 'gatsby-plugin-firebase-v9.0'
import { getDatabase, ref, onValue } from "firebase/database";

const Component = ({postID}) => { 
  const [dataVaule, setValue] = useState('');
  useEffect(() => {
      const db = getDatabase(app);
      const dataRef = ref(db, 'ucapan/');

      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        setValue(data);
      });

    }, 
    
    [postID]);

    console.log(dataVaule);

  return <div>{dataVaule ? dataVaule : ``} </div>
}

export default Component;