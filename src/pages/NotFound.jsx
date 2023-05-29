import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, et?
        Enim modi quis debitis at doloribus quos magnam voluptatibus
        exercitationem, reprehenderit eveniet vitae necessitatibus vel libero
        quaerat alias provident! Explicabo?
      </p>
      <p>
        Go to the <Link to="/"> Home Page</Link>.
      </p>
    </div>
  );
};
