import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModules, addModule, updateModule, deleteModule, editModule } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const {modules} = useSelector((state: any) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };



  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={
          createModuleForCourse
        }
      />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
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
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                         saveModule({ ...module, editing: false });
                    }
                  }}
    
                  defaultValue={module.name}
                />
              )}
              <RiArrowDownSFill />

              <LessonControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => removeModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons?.map((lesson: any) => (
                <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                  <BsGripVertical /> {lesson.name}{" "}
                  <LessonControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => removeModule(moduleId)}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
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
