function App() {
    const greeting = "Hi, Tom";
    const dom = <h1>{greeting}</h1>
  return (
      <div>
          <label htmlFor="bar">bar</label>
          <input type="text" onChange={() => {console.log("I am clicked!")}} />
      </div>
  );
}

export default App;
