import { Route, Routes } from "react-router-dom";
import ContainerContent from "../comon/container/ContainerContent"

const ComonRouter = () => {

  return (
    <Routes>
    <Route path="*" element={<ContainerContent />} />
    </Routes>
  )
};

export default ComonRouter;
