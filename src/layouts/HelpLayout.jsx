import { NavLink, Outlet } from "react-router-dom";
export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2> Website Help </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        perspiciatis aliquam recusandae temporibus, provident saepe illum
        facere! Eum voluptatibus soluta reprehenderit ratione in aspernatur
        corporis commodi iure sapiente, mollitia obcaecati?
      </p>
      <nav>
        <NavLink to="faq"> View the FAQ </NavLink>
        <NavLink to="contact"> Contact Us </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
