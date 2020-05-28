import React, { useState, useEffect } from 'react';

const Booklist = props => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props]);
  return (
    <div>
      <ul>
        {
          bookData === null
            ? <li>now loading...</li>
            : bookData.data.items.map((x, index)=><li key={index}>
            <a href={x.volumeInfo.previewLink} target='_blank'>
              {x.volumeInfo.title}
              <br />
              <img src={x.volumeInfo.imageLinks ? x.volumeInfo.imageLinks.thumbnail : 'test.jpg'} alt={x.volumeInfo.title}/>
            </a>
            </li>)
        }
      </ul>
    </div>
  );
}

export default Booklist;