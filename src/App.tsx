import React from 'react';
import styled from 'styled-components'

const StyledComponent = styled('div')({
  width: 100,
  height: 100,
  background: 'black'
})


const StyledComponent2 = styled('div')({
  width: 100,
  height: 100,
  background: 'blue'
})

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StyledComponent />
        <StyledComponent2 />
      </header>
    </div>
  );
}

export default App;
