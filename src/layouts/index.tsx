import { Outlet } from "react-router";
import { Header } from "../components/Header/"
import classes from "./index.module.scss";
import Footer from "../components/Footer";
import { useNavigation } from "react-router";

export const DefaultLayout = () => {
  const navigation = useNavigation();

  return (
    <div className={classes.defaultLayoutContainer}>
      <Header />
      <main>
        <div className={classes.pageContent}>
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
