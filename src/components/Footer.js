import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 first">
            <div className="d-flex">
              <p>1R Newbury Street Peabody, MA</p>
            </div>
            <div className="d-flex">
              <a href="tel:+1(352)327-1999">+1(617)-718-4639</a>
            </div>
            <div className="d-flex">
              <p>group@imexcargo.com</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 align-items-center third">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.linkedin.com/company/imexcargo/"}
                quote={"imex cargo facebook"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.linkedin.com/company/imexcargo/"}
                quote={"imex cargo twitter"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              
              <LinkedinShareButton
                url={"https://www.linkedin.com/company/imexcargo/"}
                quote={"imex cargo linkedin"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Imex Cargo | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
