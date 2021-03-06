import React from "react";
import "../CSS/UserSettings.css";

function UserSettings() {
  return (
    <div className="UserList-userSettingsMenu">
      <div className="UserSettings-Username">Username</div>
      <div className="UserSettings-PrioritySelector">
        Priority
        <select
          name="UserSettings-PrioritySelectorChoice"
          //   value={this.state.Choice}
          //   onChange={this.handleChange}
        >
          <option selected value="User">
            User
          </option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button className="UserSettings-SaveBtn">Save</button>
      <button className="UserSettings-CancelBtn">Cancel</button>
      <button className="UserSettings-RemoveUserbtn">Remove</button>
    </div>
  );
}

export default UserSettings;
