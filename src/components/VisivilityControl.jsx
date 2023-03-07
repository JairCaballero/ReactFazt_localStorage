import React from "react";

export const VisivilityControl = ({ setShowComple, cleanTask, isCheked }) => {
  function handleDelete() {
    if (window.confirm("Seguro de eliminar ? ")) {
      cleanTask();
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
      <input
      className="form-check-input"
        type="checkbox"
        checked={isCheked}
        onChange={(e) => setShowComple(e.target.checked)}
      />{" "}
      <label for=""> Show task Done</label>
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>Clear</button>
    </div>
  );
};

