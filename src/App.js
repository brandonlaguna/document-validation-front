import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentValidationView from "./views/documentValidation";
import UploadDocumentView from "./views/uploadDocument";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<DocumentValidationView />}></Route>
          <Route path="uploadDocument" element={<UploadDocumentView />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
