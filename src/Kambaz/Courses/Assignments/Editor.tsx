import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router";
import "../../style.css";


export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );

  return (
    <div
      id="wd-assignments-editor"
      className="ms-3"
      style={{ maxWidth: "750px" }}
    >
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          <strong>{assignment?.title}</strong>
        </label>
        <input
          id="wd-name"
          value={assignment?.title}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <textarea rows={10} className="form-control">
          {assignment?.description}
        </textarea>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-points" className="form-label text-end w-100">
            Points
          </label>
        </div>
        <div className="col-md-9">
          <input
            id="wd-points"
            value={assignment?.points}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-group" className="form-label text-end w-100">
            Assignment Group
          </label>
        </div>
        <div className="col-md-9">
          <select id="wd-group" className="form-select">
            <option value="assignments">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label
            htmlFor="wd-display-grade-as"
            className="form-label text-end w-100"
          >
            Display grade as
          </label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-select">
            <option value="percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label
            htmlFor="wd-submission-type"
            className="form-label text-end w-100"
          >
            Submission Type
          </label>
        </div>
        <div className="col-md-9 border border-1 rounded-2 p-3">
          <select id="wd-submission-type" className="form-select">
            <option value="online">Online</option>
          </select>
          <div className="mt-2 mb-2">
            <strong>Online Entry Options</strong>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="wd-text-entry"
              className="form-check-input"
            />
            <label htmlFor="wd-text-entry" className="form-check-label">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="wd-website-url"
              className="form-check-input"
            />
            <label htmlFor="wd-website-url" className="form-check-label">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="wd-media-recordings"
              className="form-check-input"
            />
            <label htmlFor="wd-media-recordings" className="form-check-label">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="wd-student-annotation"
              className="form-check-input"
            />
            <label htmlFor="wd-student-annotation" className="form-check-label">
              Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="wd-file-upload"
              className="form-check-input"
            />
            <label htmlFor="wd-file-upload" className="form-check-label">
              File Upload
            </label>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <label className="form-label text-end w-100">Assign</label>
        </div>
        <div className="col-md-9 border border-1 rounded-2 p-3">
          <label htmlFor="wd-assign-to"> Assign to</label>
          <input
            type="text"
            id="wd-assign-to"
            value="Everyone"
            className="form-control"
          />
          <label htmlFor="wd-due-date" className="form-label mt-3">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment?.dueDate}
            className="form-control"
          />
          <div className="d-flex w-100 mt-3 gap-2">
            <div className="w-50">
              <label htmlFor="wd-available-from" className="form-label">
                Available From
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment?.availableFrom}
                className="form-control"
              />
            </div>
            <div className="w-50">
              <label htmlFor="wd-available-until" className="form-label">
                Available Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={assignment?.availableTo}
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end gap-3">
        <Link
          to={`/kambaz/Courses/${cid}/Assignments`}
          id="ws-signin-btn"
          className="btn btn-secondary mb-2 custom-button" style={{width: "100px"}}
        >
          Cancel
        </Link>
        <Link
          to={`/kambaz/Courses/${cid}/Assignments`}
          id="ws-signin-btn"
          className="btn btn-danger mb-2" style={{width: "100px"}}
        >
          Save
        </Link>
      </div>
    </div>
  );
}
