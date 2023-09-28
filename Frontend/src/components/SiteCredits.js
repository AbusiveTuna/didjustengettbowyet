import React from 'react';
import './css/SiteCredits.css';

import zz from '../resources/zz.png';

function SiteCredits() {
    return (
        <div className="site-credits">
          Created by: AbusiveTuna <a href="https://github.com/AbusiveTuna"><img src={zz} alt="AbusiveTuna" /></a>
        </div>
      );
    }
  
export default SiteCredits;
