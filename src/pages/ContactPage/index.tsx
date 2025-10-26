import classes from "./styles.module.scss";
import Footer from "../../components/Footer";

export const ContactPage = () => {

    return (
        <div className={classes.ContactPage}>
            <div className={classes.contentWrapper}>

                <h2 className={classes.title}>
                    Dive into a few projects that represent my most fulfilling design experiences.
                </h2>

                <div className={classes.appsWrapper}>
                   
                </div>

                <Footer />
            </div>
            <div className={classes.backgroundImage}></div>
        </div>
    )
}

export default ContactPage;