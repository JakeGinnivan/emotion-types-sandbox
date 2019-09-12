import React from 'react';
import styled from './emotion'

interface StyledComponentProps {
  width: number
}

const Custom: React.FC<{ prop1: string}> = ({prop1}) =>{
  return <div>{prop1}</div>
}

const StyledComponent = styled('div')<StyledComponentProps>({
  width: 100,
  height: 100,
}, props => ({ 
  width: props.width,
  background: props.theme.color.primary
 }))

interface StyledComponentProps2 {
  height: number
}

const StyledComponent2 = styled(Custom)<StyledComponentProps2>({
  width: 100,
  height: 100,
  background: 'black'
}, props => ({ height: props.height }))

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StyledComponent width={200} />
        <StyledComponent2 height={200} prop1="woo"  />
      </header>
    </div>
  );
}

export default App;
