import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import "../Home/home.css"

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="d-flex flex-row-reverse flex-wrap justify-content-start gap-2"
    >
      <Button variant="danger" size="lg" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <Dropdown>
        <Dropdown.Toggle  className="custom-button" variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <GreenCheckmark /> Unpublish All Modules and Items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <GreenCheckmark /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button  size="lg" id="wd-view-progress" className="custom-button"  variant="secondary">
        View Progress
      </Button>
      <Button  size="lg" id="wd-collapse-all" className="custom-button"  variant="secondary">
        Collapse All
      </Button>
    </div>
  );
}
