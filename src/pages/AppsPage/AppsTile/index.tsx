import classes from "./styles.module.scss";

export interface AppsTileProps extends React.InputHTMLAttributes<HTMLInputElement> {
    appTitle?: string; // diameter in px
    appTopic?: string; // pulse color
    appLink?: string;
    appImg?: string;
}

const AppsTile: React.FC<AppsTileProps> = ({ appTitle = "Title", appTopic = "Topic", appLink = "", appImg = "" }) => {
    return (
        <div
            className={classes.AppsTile}
        // style={{ width: size, height: size }}
        >
            <a href={appLink} className={classes.tileStyle}>

                <div className={classes.imageWrapper}>
                <img src={appImg}></img>
            </div>

            <div className={classes.textWrapper}>
                <p className={classes.appTitle}>{appTitle}</p>
                <p className={classes.appTopic}>{appTopic}</p>
            </div>

                <div className={classes.tileDeepStyle}></div>
            </a>
        </div>

    );
}

export default AppsTile