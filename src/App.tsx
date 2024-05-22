import "./styles.css";
import { Title } from "./components/atoms/Title.tsx";
import { Todos } from "./components/organisms/Todos.tsx";

export default function App() {
  return (
    <div className="App">
      <Title />
      <Todos />
    </div>
  );
}
