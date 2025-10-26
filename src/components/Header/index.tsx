import { useDevice } from "../../hooks";
import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";

export const Header = () => {
  const { isDesktop } = useDevice();

  return isDesktop ? <Desktop /> : <Mobile />;
  // return <Desktop />
};

export default Header;
