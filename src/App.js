import { Provider } from "react-redux";
import "./App.css"
import Layout from "./components/Layout/layout";
import store from "./Redux/store";



function App() {
  return <Provider store={store}><Layout /></Provider>
    
};

export default App;
