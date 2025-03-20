import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(
    db.modules.filter((module) => module.course === cid)
  );
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([
      ...modules,
      { _id: uuidv4(), name: moduleName, course: cid, lessons: [] },
    ]);
    setModuleName("");
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
    );
  };
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={addModule}
      />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module) => (
          <ListGroup.Item
            key={module._id}
            className="wd-module p-0 mb-5 fs-5"
            style={{ border: "none" }}
          >
            <div
              className="wd-title p-3 ps-2 "
              style={{
                backgroundColor: "#f5f5f5",
                border: "1px solid black",
                borderBottom: "none",
              }}
            >
              <BsGripVertical />
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    updateModule({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <RiArrowDownSFill />

              <LessonControlButtons
                moduleId={module._id}
                deleteModule={deleteModule}
                editModule={editModule}
              />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons?.map((lesson: any) => (
                <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                  <BsGripVertical /> {lesson.name}{" "}
                  <LessonControlButtons
                    moduleId={module._id}
                    deleteModule={deleteModule}
                    editModule={editModule}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
