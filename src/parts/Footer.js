import Button from "elements/Button";
import React from "react";
import IconText from "./IconText";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="Link" href={`/register`}>
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="Link" href={`/properties`}>
                  Start Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="Link" href={`/use-payments`}>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="Link" href={`/careers`}>
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="Link" href={`/privacy`}>
                  Privacy{" "}
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="Link" href={`/terms`}>
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="Link"
                  href={`mailto:support@bobodoor.id`}
                >
                  support@bobodoor.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="Link" href={`tel:+622122081996`}>
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Bobodoor, Kemang, Jakarta.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2020 • All rights reserved • bobodoor
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
