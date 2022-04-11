import { Component, ReactNode } from "react";
import { ISocialMediaProfiles } from "../models/SocialMediaProfiles";
import { FULL_NAME } from "../util/constants";
import { SocialMediaProfile } from "./SocialMediaProfile";

export class Header extends Component<ISocialMediaProfiles> {
  render(): ReactNode {
    return (
      <header className="d-print-none">
        <div className="container text-center text-lg-left">
          <div className="py-3 clearfix">
            <h1 className="site-title mb-0">{FULL_NAME}</h1>
            <div className="site-nav">
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
        </div>
      </header>
    );
  }
}
