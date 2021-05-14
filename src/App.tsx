import { TextField } from "./TextField"

const App: React.FC =() =>{
  return (
    <div>
      <h1>Joseph Madras de Luluabourg</h1>
      <TextField text="hello" person={ {firstName: '', lastName: ''}}/>
    </div>
  );
}

export default App;
