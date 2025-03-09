import React from 'react';
import './Loader.css'; // Ensure you have the CSS file
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader-video">
        {/* <img src="/media/homely.gif" alt="Loading..." width="150" height="120" /> */}
        <DotLottieReact
          src="https://lottie.host/4d0fa039-6f85-4d9f-aae3-e1102ab2c712/sSfjtrI7o4.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Loader;
