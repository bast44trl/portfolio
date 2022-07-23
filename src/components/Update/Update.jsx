import React, { useContext } from 'react';

import Context from '../../Context';

const Update = () => {
  const { french } = useContext(Context);

  return (
    <div className="update">
      {french ? (
        <>
          <p>Portfolio non terminé, merci pour votre indulgence 😊</p>
          <p>
            (Résolution 1920 x 1080 px uniquement, le responsive arrive bientôt)
          </p>
        </>
      ) : (
        <>
          <p>Portfolio not finished yet, thank you for your indulgence 😊</p>
          <p>(Desktop only, 1920 x 1080 px, responsive coming soon)</p>
        </>
      )}
    </div>
  );
};

export default Update;
