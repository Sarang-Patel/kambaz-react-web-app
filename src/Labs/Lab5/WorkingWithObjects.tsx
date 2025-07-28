import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: "Module Name",
    description: "Module Description",
    course: 1234,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />{" "}
      <br />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update score
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <input
        type="checkbox"
        id="completed-checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment((prev) => ({ ...prev, completed: e.target.checked }))
        }
      />
      <label htmlFor="completed-checkbox" className="ms-2">
        Completed?
      </label>
      <a
        className="btn btn-primary ms-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Set Completed
      </a>
      <hr />
      <h4>Get Module</h4>
      <a className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <br />
      <a
        className="btn btn-primary mt-2"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module name
      </a>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <FormControl
          className=" w-75"
          defaultValue={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a
          className="btn btn-primary"
          href={`${MODULE_API_URL}/name/${module.name}`}
        >
          Set Module Name
        </a>
      </div>
    </div>
  );
}
