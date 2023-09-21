import React from "react";
import "./Report.css";
export const Report = () => {
  return (
    <div className="Report">
      <form  calss="" action="#">
        <div className="form1">
        <label htmlFor="Staff">Staff Currently Avilable</label>
        <br></br>
        <input type="text" id="staff" name="staff" placeholder="Staff Currently Avilable" />
        </div>
        <div className="form1">
        <label htmlFor="Work Force Dispatched">Work Force Dispatched</label>
        <br></br>
        <input type="text" id="Work Force Dispatched" name="Work Force Dispatched" placeholder="Work Force Dispatched" />
        </div>
        <div className="form1">
        <label htmlFor="Date">Date</label>
        <br></br>
        <input type="date" id="Date" name="Date" placeholder="Date" />
        </div>
        <div className="form1">
        <label htmlFor="Time">Start Time</label>
        <br></br>
        <input type="time" id="Time" name="Time" placeholder="Time" />
        </div>
        <div className="form1">
        <label htmlFor="Location">Activity Location</label>
        <br></br>
        <input type="text" id="Location" name="Location" placeholder="Location" />
        </div>
        <div className="form1">
        <input type="Submit" className="Submit" name="Submit" placeholder="Submit" />
        </div>
      </form>

    </div>
  );
};
