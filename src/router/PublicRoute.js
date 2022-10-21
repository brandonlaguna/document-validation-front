import { Routes, Route } from "react-router-dom";
import DocumentValidationView from "../views/documentValidation";
const PublicRoute = () => {
  <div>
    <Routes>
      <Route exact path="/" element={<DocumentValidationView />}></Route>
    </Routes>
  </div>;
};

export default PublicRoute;
