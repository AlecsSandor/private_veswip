import classes from "./styles.module.scss";
import Footer from "../../components/Footer";

export const AboutPage = () => {

    return (
        <div className={classes.AboutPage}>
            <div className={classes.contentWrapper}>

                <h2 className={classes.title}>
                    Welcome to my creative space — a place where ideas turn into working apps. I design and build applications that focus on simplicity, usability, and purposeful design. Every project I create is driven by curiosity and a desire to solve real problems through thoughtful interfaces and efficient code. Whether it’s a small productivity tool or a full-featured platform, my goal is always the same: to make technology feel intuitive and enjoyable to use.
                </h2>

                {/* <div className={classes.appsWrapper}>
                   
                </div> */}

                <Footer />
            </div>
            <div className={classes.backgroundImage}></div>
        </div>
    )
}

export default AboutPage;