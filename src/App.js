import Button from 'react-bootstrap/Button';

function App() {
  const inputVariable = "green";
  const otherVariable = "name";
  const infoCard = {
    green: {
      name: "Mr. Green",
      status: "unknown"
    }
  }
  return (
    <div className="App">
      <Button variant='primary'>Primary</Button>
    </div>
  );
}

export default App;
