import React from "react";

export default ({ data }) => {
  return (
    <div>
      <div className="account_profile-header account_header">
        <h2 className="account_title">Personal Information</h2>
      </div>
      <div className="account_profile-content-wrapper">
        {Object.keys(data).map((block, i) =>
          <div className="account_profile-content-block" key={`${block}-${i}`}>
            <label htmlFor={block}>{block.replace("_", " ")}</label>
            <input type="text" id={block} name={block} value={data[block]} disabled></input>
          </div>
        )}
      </div>
    </div >
  )
}