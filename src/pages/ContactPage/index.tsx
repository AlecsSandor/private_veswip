import classes from "./styles.module.scss";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export const ContactPage = () => {

    return (
        <div className={classes.ContactPage}>
            <div className={classes.contentWrapper}>

                <h2 className={classes.title}>
                    Let's Connect
                </h2>

                <div className={classes.appsWrapper}>
                    <ContactForm />
                </div>

                <Footer />
            </div>
            <div className={classes.backgroundImage}></div>
        </div>
    )
}

export default ContactPage;