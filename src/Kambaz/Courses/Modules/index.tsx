export default function Modules() {
  return (
    <div>
        <button id="collapse-all">Collapse All</button>
        <button id="view-progress">View Progress</button>
        <select name="publish" id="">
            <option value="publish-all">Publish All</option>
        </select>
        <button id="add-Module">+ Module</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full stack developer CH-1</li>
                <li className="wd-content-item">Full stack developer CH-2</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML</li>
                <li className="wd-content-item">
                  Learn the structure of web pages
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML Basics CH-1</li>
                <li className="wd-content-item">HTML Advanced Concepts CH-2</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">
                  Learn how to style web pages
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Fundamentals CH-1</li>
                <li className="wd-content-item">CSS Layouts CH-2</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
