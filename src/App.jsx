import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div>
      <div className="parent">
        <div>
          <div className="top">
            <img
              src="https://www.citypng.com/public/uploads/preview/round-official-amazon-a-letter-symbol-logo-icon-701751694791936ocsmsimccw.png"
              alt=""
            />
            <button>
              Save <Bookmark size={"14px"}></Bookmark>
            </button>
          </div>
          <div className="middle">
            <div className="middle-1">
              <h4>Amazon</h4>
              <span>5 days ago</span>
            </div>

            <div className="middle-2">
              <h3>Senior UI/UX Designer</h3>
            </div>
            <div className="middle-3">
              <span>Part Time</span>
              <span>Senior Level</span>
            </div>
            <div></div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-1">
            <h5> $120/hour</h5>
            <p>Mumbia, India</p>
          </div>
          <div className="bottom-2">
            <button >Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
