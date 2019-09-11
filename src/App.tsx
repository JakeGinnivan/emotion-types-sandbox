import React from 'react';
import styled from 'react-emotion'

const StyledComponent = styled('div')({
  width: 100,
  height: 100,
  background: 'black'
})

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StyledComponent />
      </header>
    </div>
  );
}

export default App;
