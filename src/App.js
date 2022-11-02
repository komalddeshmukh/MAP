import "./styles.css";

export default function App() {
  // const people = ['komal', 'manju', 'shaila', 'akshay'];
  const users = [
    { name: "Komal", age: 26 },
    { name: "Manju", age: 27 },
    { name: "Janki", age: 28 },
    { name: "Teju", age: 29 }
  ];

  return (
    <div className="App">
      {/* <h1>Hello Komal</h1>
      <h1>Hello Komal</h1>
      <h1>Hello Komal</h1>
      <h1>Hello Komal</h1> */}
      {/* {people.map (personName => < Welocme name {personName} /> )}
       */}

      {users.map((user) => (
        <Msg key={user.key} name={user.name} age={user.age} />
      ))}
    </div>
  );
}
function Msg(props) {
  return (
    <div>
      <h1>
        {props.name}
        {props.age}
      </h1>
    </div>
  );
}
