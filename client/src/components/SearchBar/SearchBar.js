import React from "react";

export default () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">Навігація</span>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Введіть дані клієнта"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success"
          style={{ padding: "15px 30px" }}
          type="submit"
        >
          Пошук
        </button>
      </form>
    </nav>
  );
};
