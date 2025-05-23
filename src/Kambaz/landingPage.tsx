import { Button } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    navigate("/kambaz/account/signup");
  };

  const handleSignInClick = () => {
    navigate("/kambaz/account/signin"); 
  };
  return (
    <div className="hero-section mt-3" style={{ marginRight: "6rem" }}>
      <div className="nav d-flex align-items-center justify-content-between">
        <div className="nav-right">Kambaz</div>
        <div className="nav-left">
          <Button
            style={{
              backgroundColor: "#006D77",
              border: "none",
              width: "125px",
            }}
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
        </div>
      </div>

      <div
        className="hero-main-content d-flex align-items-center justify-content-between gap-3"
        style={{ marginTop: "6rem" }}
      >
        <div className="hero-main-content-left" style={{ maxWidth: "800px" }}>
          <h2>Your Gateway to Smarter Learning</h2>
          <p>
            Empowering students and educators with tools to connect,
            collaborate, and succeed — all in one seamless platform.
          </p>
          <Button
            style={{
              backgroundColor: "#006D77",
              border: "none",
              width: "160px",
              height: "3rem",
            }}
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>
          {/* <div className="hero-cards d-flex" style={{marginTop:"8rem", maxWidth:"500px"}}>
            <div className="hero-card" style={{position:'relative'}}>
                <img src="public\images\quotation-marks.png" alt="" style={{opacity:"15%", width:"5rem", position:"absolute", top:"-5rem", left:"0rem"}}/>
                <p>As a teacher, this LMS has streamlined lesson planning, grading, and communication, making my job much easier.</p>

            </div>
          </div> */}
        </div>
        <div className="hero-main-content-right" style={{position:"relative"}}>
          <img src="/images/hero-section-image.jpg" />
          <img src="/images/dots.png" alt="" style={{position:"absolute", left:"-18%", zIndex:"-1", top:"-3rem"}}/>
          <img src="/images/squiggly-circle.png" alt="" style={{position:"absolute", left:"-20%", bottom:"-5rem"}}/>
        </div>
      </div>
    </div>
  );
}
