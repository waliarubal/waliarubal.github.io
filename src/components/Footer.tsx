import { Component } from "react";
import { ISocialMediaProfiles } from "../models/SocialMediaProfiles";
import { DATE_OF_BIRTH, FULL_NAME } from "../util/constants";
import { SocialMediaProfile } from "./SocialMediaProfile";

export class Footer extends Component<ISocialMediaProfiles> {
  render() {
    return (
      <footer className="pt-4 pb-4 text-muted text-center d-print-none">
        <div className="container">
          <div className="my-3">
            <div className="h4">{FULL_NAME}</div>
            <div className="footer-nav">
              <nav role="navigation">
                <ul className="nav justify-content-center">
                  {this.props.Profiles.map(
                    (profile) =>
                      profile.Url !== null && (
                        <SocialMediaProfile
                          key={profile.Name}
                          Name={profile.Name}
                          IconClass={profile.IconClass}
                          Url={profile.Url}
                        />
                      )
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <div className="text-small">
            <div className="mb-1">
              &copy; {DATE_OF_BIRTH.getFullYear()} - {new Date().getFullYear()}{" "}
              {FULL_NAME}. All rights reserved.
            </div>
            <div style={{ display: "none" }}>
              Design -{" "}
              <a
                href="https://templateflip.com/"
                target="_blank"
                rel="noreferrer"
              >
                TemplateFlip
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
