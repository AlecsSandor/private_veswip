import classes from "./styles.module.scss";
import AppsTile from "./AppsTile";
import Footer from "../../components/Footer";
import { cloudWeather, nook, studio35, codingAid, theIsles, planr, storystash, cryptoNotify, shortform } from "../../assets/images"; 

export const AppsPage = () => {

    const apps = [
        { title: "Storystash", topic: "Social Media", link: "https://apps.apple.com/us/app/storystash/id6737708781", img: storystash },
        { title: "Shortform", topic: "Generative AI", link: "https://www.shortform.veswip.com/", img: shortform  },
        { title: "CodingAid", topic: "AI Assistant", link: "https://apps.apple.com/us/app/codingaid/id6474641708", img: codingAid  },
        { title: "CloudWeather", topic: "Well...Weather", link: "https://apps.apple.com/us/app/cloudweather/id6472477868", img: cloudWeather  },
        { title: "CryptoNotify", topic: "Trading Assistant", link: "https://apps.apple.com/us/app/cryptonotify/id6737062532", img: cryptoNotify  },
        { title: "LitePlanr", topic: "Productivity", link: "https://apps.apple.com/us/app/liteplanr/id6475203997", img: planr  },
        { title: "Nook", topic: "Ecommerce", link: "https://nook-apnx.onrender.com/", img: nook  },
        { title: "Studio35", topic: "Portfolio Template", link: "https://studio35.onrender.com/", img: studio35  },
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