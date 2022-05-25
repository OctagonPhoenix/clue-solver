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
      {infoCard[inputVariable][otherVariable]}
    </div>
  );
}

export default App;
