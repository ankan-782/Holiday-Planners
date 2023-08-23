import appleStoreLogo from "../../../images/hero/apple-store-logo.png";
import googlePlayStoreLogo from "../../../images/hero/google-play-store-logo.png";
import './CallToAction.css';

export default function CallToAction() {
    return (
        <div className="callToAction-bg">
            <div className="container px-lg-0 px-4 py-5">
                <div className="callToAction-content">
                    <h2 className="banner-title mb-4 fw-bold fs-1">Download the Holiday Planners app now!</h2>
                    <p className="lh-base fw-bold">Be the first one to explore one of the best travel application</p>
                    <div className="d-flex justify-content-center mt-4">
                        <img style={{ width: "150px", height: "50px" }} src={appleStoreLogo} alt="apple store logo" className="me-3" />
                        <img style={{ width: "150px", height: "50px" }} src={googlePlayStoreLogo} alt="play store logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}
