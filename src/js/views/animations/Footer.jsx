import React from "react";
import "../../../scss/footer.scss";
import "../../../css/glass.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faXTwitter,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const [t] = useTranslation("app");
    return (
        <div className="footer bg-neutral-950 text-white">
            <footer>
                <div className="row">
                    <div className="colPrincipal">
                        <h2 className="logoFooter">SERØ.</h2>
                        <p className="slogan">{t("weSolveProblems")}</p>
                    </div>
                    <div className="col">
                        <h3>
                            Contact{" "}
                            <div className="underlineFooter">
                                <span></span>
                            </div>{" "}
                        </h3>
                        <ul>
                            <li>
                                <Link to="">{t("address")}</Link>
                            </li>
                            <li>
                                <Link to="">{t("phoneNumber")}</Link>
                            </li>
                            <li>
                                <Link to="">{t("email")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>
                            Links{" "}
                            <div className="underlineFooter">
                                <span></span>
                            </div>{" "}
                        </h3>
                        <ul>
                            <li>
                                <Link to="/">{t("home")}</Link>
                            </li>
                            <li>
                                <Link to="/">{t("services")}</Link>
                            </li>
                            <li>
                                <Link to="/">{t("aboutUs")}</Link>
                            </li>
                            <li>
                                <Link to="/founders">{t("founders")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>
                            {t("newsletter")}
                            <div className="underlineFooter">
                                <span></span>
                            </div>{" "}
                        </h3>
                        <form className="formFooter">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input
                                type="email"
                                placeholder={t("newsletterEmail")}
                                required
                            />
                            <button type="submit">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>
                        <div className="social-icons">
                            <a href="" className="rrss">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <a href="" className="rrss">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="" className="rrss">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                            <a href="" className="rrss">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="copyright">SERØ © 2023 - {t("copyright")}</p>
            </footer>
        </div>
    );
};
