import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module) => module.course === cid);
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module) => (
          <ListGroup.Item
            key={module._id}
            className="wd-module p-0 mb-5 fs-5"
            style={{border : "none"}}
          >
            <div className="wd-title p-3 ps-2 " style={{backgroundColor: "#f5f5f5", border: "1px solid black", borderBottom: "none"}}>
            <BsGripVertical /><RiArrowDownSFill /> 
            {module.name} <LessonControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              {
                module.lessons?.map((lesson) => (
                   <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1" ><BsGripVertical /> {lesson.name} <LessonControlButtons /></ListGroup.Item>
                ))
              }
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
