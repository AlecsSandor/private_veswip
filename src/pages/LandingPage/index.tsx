import classes from "./styles.module.scss";
import { useNavigate } from "react-router";
import { useState } from "react";
import MainButton from "../../components/MainButton";
import { SvgIcon } from "../../components/SvgIcon";

import clsx from "clsx";

export const LandingPage = () => {

    const navigate = useNavigate();
    const [activeTarget, setActiveTarget] = useState<string | null>("0");
    const handleHover = (id: string) => { setActiveTarget(id); }

    return (
        <div className={classes.LandingPage}>
            <div className={classes.contentWrapper}>
                <div className={classes.titleWrapper}>
                    <div id="target-0" className={clsx(
                        classes.target,
                        activeTarget === "0" ? classes.targetActive : classes.targetDisabled
                    )}>Veswip</div>

                    <div id="target-1" className={clsx(
                        classes.target,
                        activeTarget === "1" ? classes.targetActive : classes.targetDisabled
                    )}>About</div>

                    <div id="target-2" className={clsx(
                        classes.target,
                        activeTarget === "2" ? classes.targetActive : classes.targetDisabled
                    )}>Apps</div>

                    <div id="target-3" className={clsx(
                        classes.target,
                        activeTarget === "3" ? classes.targetActive : classes.targetDisabled
                    )}>Contact</div>

                    <div id="target-5" className={clsx(
                        classes.target,
                        activeTarget === "5" ? classes.targetActive : classes.targetDisabled
                    )}>Other</div>
                </div>

                <div className={clsx(classes.tileFrame, classes.tileOne)}>
                    <div className={classes.tileStyle} onClick={() => navigate("/")}>
                        <div className={classes.tileLowerContent}>
                            <MainButton title="About" hovered={activeTarget === "1"} />
                            <SvgIcon name={"arrow"} className={classes.icon} />
                        </div>
                        <div className={classes.tileDeepStyle} data-target="1" onMouseEnter={() => handleHover("1")} onMouseLeave={() => handleHover("0")}></div>
                    </div>
                </div>
                <div className={clsx(classes.tileTwo, classes.tileFrame)}>
                    <div className={classes.tileStyle} onClick={() => navigate("/apps")}>
                        <div className={classes.tileLowerContent}>
                            <MainButton title="Apps" hovered={activeTarget === "2"} />
                            <SvgIcon name={"arrow"} className={classes.icon} />
                        </div>
                        <div className={classes.tileDeepStyle} data-target="2" onMouseEnter={() => handleHover("2")} onMouseLeave={() => handleHover("0")}></div>
                    </div>
                </div>
                <div className={clsx(classes.tileThree, classes.tileFrame)}>
                    <div className={classes.tileStyle} onClick={() => navigate("/contact")}>
                        <div className={classes.tileLowerContent}>
                            <MainButton title="Contact" hovered={activeTarget === "3"} />
                            <SvgIcon name={"arrow"} className={classes.icon} />
                        </div>
                        <div className={classes.tileDeepStyle} data-target="3" onMouseEnter={() => handleHover("3")} onMouseLeave={() => handleHover("0")}></div>
                    </div>
                </div>
                <div className={clsx(classes.tileFour, classes.tileFrame)}>

                </div>
                <div className={clsx(classes.tileFive, classes.tileFrame)}>
                    <div className={classes.tileStyle}>

                        <div className={classes.tileDeepStyle}></div>
                    </div>

                    <div className={classes.tileStyle} onClick={() => navigate("/")}>
                        <div className={classes.tileLowerContent}>
                            <MainButton title="Other" hovered={activeTarget === "5"} />
                            <SvgIcon name={"arrow"} className={classes.icon} />
                        </div>
                        <div className={classes.tileDeepStyle} data-target="5" onMouseEnter={() => handleHover("5")} onMouseLeave={() => handleHover("0")}></div>
                    </div>
                </div>
            </div>
            <div className={classes.backgroundImage}></div>
        </div>
    )
}