import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <div className="loading">
      <div className="loading-container">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
      <div className="todo-skeleton"></div>
    </div>
  );
}

export { TodoLoading };