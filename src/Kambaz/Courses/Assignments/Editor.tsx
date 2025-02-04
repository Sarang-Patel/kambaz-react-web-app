export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="ms-3" style={{maxWidth: "750px"}}>
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          <strong>Assignment Name</strong>
        </label>
        <input
          id="wd-name"
          value="A1 - ENV + HTML"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <textarea

          rows={10}
          className="form-control"
        >
          The assignment is available online Submit a link to the landing page of
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit
          similique ea animi non voluptates eius placeat aliquid officiis quaerat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cumque veniam recusandae. Odio quam laudantium fugit et, perferendis
          nisi. Magnam.
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
            value={100}
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
          <label htmlFor="wd-display-grade-as" className="form-label text-end w-100">
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
          <label htmlFor="wd-submission-type" className="form-label text-end w-100">
            Submission Type
          </label>
        </div>
        <div className="col-md-9 border border-1 rounded-2 p-3">
          <select id="wd-submission-type" className="form-select">
            <option value="online">Online</option>
          </select>
          <div className="mt-2 mb-2"><strong>Online Entry Options</strong></div>
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
          <label className="form-label text-end w-100">
            Assign
          </label>
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
            value="2024-05-13"
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
                value="2024-06-05"
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
                value="2024-05-20"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
