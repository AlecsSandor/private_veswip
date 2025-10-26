import { useNavigate, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import classes from "./styles.module.scss";
import { setTheme } from "../../../store/features/ui/uiSlice";
import ThemeToggle from "../../../components/ThemeToggle";
import { RootState } from "../../../store/store";

export const Mobile = () => {
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
    { id: 1, title: "A collection of apps", path: "", onClick: () => { } }
  ];

  return (
    <header className={classes.mobileContainer}>
      <div className={classes.filler} />
      <div className={clsx(classes.content, { [classes.shrunk]: isShrunk })}>
        <div className={classes.logo} onClick={() => navigate("/")}>
          {/* <img src="/logo_l.svg" alt="Logo" /> */}
          veswip
        </div>

        <div className={classes.right}>
          {linksToRender.map((link) => (
            <NavLink key={link.id} to={link.path} onClick={link.onClick} className={classes.link}>
              <span className={classes.title}>{link.title}</span>
            </NavLink>
          ))}
          <ThemeToggle checked={isDarkTheme} onChange={handleToggle} isMobile={true} />
        </div>
      </div>
    </header>
  );
};

export default Mobile;
