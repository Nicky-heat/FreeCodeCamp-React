import React, { useEffect, useState } from 'react';

const API_Memes = () => {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(function () {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((memes) => memes.json())
      .then((meme) => {
        setAllMemes(meme.data.memes);
        console.log(allMemes);
      });
  }, []);

  return (
    <div className="memes__container">
      <div
        className="container"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div className="displayMeme">
          {allMemes.length &&
            allMemes.map((meme) => (
              <img
                key={meme.url}
                style={{
                  height: '10rem',
                  width: '10rem',
                  objectFit: 'contain',
                }}
                src={meme.url}
                alt=""
              />
            ))}
        </div>
        <div className="buttom">
          <button>New Meme</button>
        </div>
      </div>
    </div>
  );
};

export default API_Memes;
