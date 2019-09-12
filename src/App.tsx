import React from 'react';
import styled from '@emotion/styled'

interface StyledComponentProps {
  width: number
}

const StyledComponent = styled('div')<StyledComponentProps>({
  width: 100,
  height: 100,
  background: 'black'
}, props => ({ width: props.width }))

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StyledComponent width={200} />
      </header>
    </div>
  );
}

export default App;
