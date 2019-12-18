import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function App() {
  return (
    <div>
      <div>
        <ToggleSwitch
          id='largeToggleSwitch'
          Name='Large toggleSwitch'
          Small={false}
          defaultChecked={true}
        />
      </div>
      <div>
        <ToggleSwitch
          id='smallToggleSwitch'
          Name='Small toggleSwitch'
          Small={true}
          defaultChecked={false}
        />
      </div>
    </div>
  );
}

export default App;
