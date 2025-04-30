import "./App.css";
import ControlledField from "./Components/ControlledField";
import FormAction from "./Components/FormAction";
import SimpleForm from "./Components/SimpleForm";
import UnControlledField from "./Components/UnControlledField";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">React Form</h1>
      {/* <SimpleForm /> */}
      {/* <FormAction/> */}
      {/* <ControlledField/> */}
      <UnControlledField />
    </div>
  );
}

export default App;
