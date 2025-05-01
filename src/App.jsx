import "./App.css";
import ControlledField from "./Components/ControlledField";
import FormAction from "./Components/FormAction";
import SimpleForm from "./Components/SimpleForm";
import UnControlledField from "./Components/UnControlledField";
import HookForm from "./Components/HookForm";
import ProductManagement from "./Components/productManagement/ProductManagement";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">React Form</h1>
      {/* <SimpleForm /> */}
      {/* <FormAction/> */}
      {/* <ControlledField/> */}
      {/* <UnControlledField /> */}
      {/* <HookForm /> */}
      <ProductManagement />
    </div>
  );
}

export default App;
