import classes from "./styles.module.scss";
import AppsTile from "./AppsTile";
import Footer from "../../components/Footer";

export const AppsPage = () => {

    const apps = [
        { title: "Storystash", topic: "Social Media", link: "", img: "https://framerusercontent.com/images/JAuzg1K8J6MK83hAIIrvRYRaf8.webp" },
        { title: "Shortform", topic: "Generative AI", link: "", img: "https://framerusercontent.com/images/93E7FcdSSqHVNH5lLB9gLOZd20.webp"  },
        { title: "CodingAid", topic: "AI Assistant", link: "", img: "https://framerusercontent.com/images/eO0GqBm897hz4DedM2o4BNk0Og.webp"  },
        { title: "CloudWeather", topic: "Well...Weather", link: "", img: "https://framerusercontent.com/images/suNAtAxC3jc1slGxH2TAGQ4rtp0.webp"  },
        { title: "CryptoNotify", topic: "Trading Assistant", link: "", img: "https://framerusercontent.com/images/WWkZxpeT2EaVFcbABkjOiVgjd9U.webp"  },
        { title: "LitePlanr", topic: "Productivity", link: "", img: "https://framerusercontent.com/images/JAuzg1K8J6MK83hAIIrvRYRaf8.webp"  },
    ]

    return (
        <div className={classes.AppsPage}>
            <div className={classes.contentWrapper}>

                <h2 className={classes.title}>
                    Dive into a few projects that represent my most fulfilling design experiences.
                </h2>

                <div className={classes.appsWrapper}>
                    {apps.map((app, index) => (
                        <AppsTile key={index} appTitle={app.title} appTopic={app.topic} appLink={app.link} appImg={app.img} />
                    ))}
                </div>

                <Footer />
            </div>
            <div className={classes.backgroundImage}></div>
        </div>
    )
}

export default AppsPage;