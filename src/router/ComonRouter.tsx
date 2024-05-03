import { Route, Routes } from "react-router-dom";
import ContainerContent from "../comon/container/ContainerContent";
import ResultConTainer from "../comon/container/Result";

const ComonRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<ContainerContent />} />
      <Route path="result" element={<ResultConTainer />} />
    </Routes>
  );
};

export default ComonRouter;
