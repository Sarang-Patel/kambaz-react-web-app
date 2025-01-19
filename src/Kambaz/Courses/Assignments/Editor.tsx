export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit
        similique ea animi non voluptates eius placeat aliquid officiis quaerat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        cumque veniam recusandae. Odio quam laudantium fugit et, perferendis
        nisi. Magnam.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <label htmlFor="wd-display-grade-as">Display grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
            </select>
            <br />
            <br />
            <div>Online Entry Options</div>
            <tr>
              <tr>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </tr>
              <tr>
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
              </tr>
              <tr>
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </tr>
              <tr>
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </tr>
              <tr>
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
              </tr>
            </tr>
          </td>
        </tr>
        <br />
        <tr>
          <td valign="top" align="right">
            <div>Assign</div>
          </td>
          <td>
            <tr>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input type="text" id="wd-assign-to" value={"Everyone"} />
            </tr><br />
            <tr>
              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" id="wd-due-date" value={"2024-05-13"}/>
            </tr><br />
            <tr>
              <td>
                  <label htmlFor="wd-available-from">Available From</label><br />
                  <input type="date" id="wd-available-from" value={"2024-06-05"}/>
              </td>
              <td>
                  <label htmlFor="wd-available-until">Available Until</label><br />
                  <input type="date" id="wd-available-until" value={"2024-05-20"}/>
              </td>
            </tr>           
          </td>

        </tr>
        <td colSpan={2}><hr/></td>
        <tr>
            <td align="right" colSpan={2}><button>Cancel</button><button>Save</button></td>
        </tr>
      </table>
    </div>
  );
}
