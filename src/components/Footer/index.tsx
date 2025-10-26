import classes from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLinks}>
        <a>hello@veswip.com</a>
      </div>
    </footer>
  );
};

export default Footer;
