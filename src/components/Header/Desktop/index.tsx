import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "../../../components/ThemeToggle";
import { setTheme } from "../../../store/features/ui/uiSlice";
import { RootState } from "../../../store/store";
import classes from "./styles.module.scss";
import clsx from "clsx";

export const Desktop = () => {
const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.ui.theme);
  const isDarkTheme = theme === "dark";

  const [isShrunk, setIsShrunk] = useState(false);

  // 👇 detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsShrunk(scrollY > 50); // shrink when user scrolls more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    dispatch(setTheme(newTheme));
    localStorage.setItem("ui.theme", newTheme); // optional persistence
    document.documentElement.setAttribute("data-theme", newTheme); // optional for CSS theme switching
  };

  const linksToRender = [
    { id: 1, title: "A collection of apps", path: "", onClick: () => {} }
  ];

  return (
    <header className={classes.desktopContainer}>
      <div className={clsx(classes.content, { [classes.shrunk]: isShrunk })}>
        <div className={classes.logo} onClick={() => navigate("/")}>
          veswip
        </div>
        <div className={classes.rightSide}>
          {linksToRender.map((link) => (
              <NavLink key={link.id} to={link.path} onClick={link.onClick} className={classes.link}>
                <span className={classes.title}>{link.title}</span>
              </NavLink>
            ))}
            <ThemeToggle checked={isDarkTheme} onChange={handleToggle}/>
        </div>
      </div>
    </header>
  );
};

export default Desktop;
