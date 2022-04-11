import { Component, ReactNode } from "react";
import { ISocialMediaProfile } from "../models/SocialMediaProfile";

export class SocialMediaProfile extends Component<ISocialMediaProfile> {
  render(): ReactNode {
    return (
      <li className="nav-item">
        <a
          className="nav-link"
          href={this.props.Url}
          title={this.props.Name}
          rel="noreferrer"
          target="_blank"
        >
          <i className={this.props.IconClass}></i>
          <span className="menu-title sr-only">{this.props.Name}</span>
        </a>
      </li>
    );
  }
}
