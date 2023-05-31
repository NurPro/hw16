import Counter from "./Components/Counter";
import Fromhook from "./Components/reacthookfrom/Fromhook";
import SignUpForm from "./Components/SignUpForm";
import  Timers  from "./Components/Timer";

function App() {
  return (
    <div className="App">
      <Counter />
      <SignUpForm />
      <Timers />
      <Fromhook />
    </div>
  );
}

export default App;
