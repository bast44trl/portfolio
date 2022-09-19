import React from 'react';
import Lottie from 'lottie-react';
import lottieLoader from '../../assets/lottieFiles/loader-infinite.json';

export default function Loader() {
  /* const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieLoader,
  }; */

  return (
    <div style={{ width: '200px' }}>
      <Lottie
        // options={defaultOptions}
        animationData={lottieLoader}
        loop={true}
      />
    </div>
  );
}
