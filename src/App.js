import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function App() {
  return (
    <div>
      <div>
        <ToggleSwitch id='id_large' Name='Large Toggle' Small={false} />
      </div>
      <div>
        <ToggleSwitch id='id_small' Name='Small Toggle' Small={true} />
      </div>
    </div>
  );
}

export default App;
