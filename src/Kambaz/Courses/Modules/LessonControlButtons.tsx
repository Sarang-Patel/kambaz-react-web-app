import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { FaPencil } from "react-icons/fa6";


export default function LessonControlButtons({
  moduleId,
  deleteModule,editModule 
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void 
}) {
  return (
    <div className="float-end d-flex align-items-center">
      <FaTrash
        className="text-danger fs-6 me-2 mb-1"
        onClick={() => deleteModule(moduleId)}
      />
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary fs-6 me-3" />

      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
