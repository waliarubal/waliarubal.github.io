import { Component } from "react";
import { IWorkExperiences } from "../models/WorkExperiences";
import { ADDRESS, DATE_OF_BIRTH, EMAIL, PHONE } from "../util/constants";
import { calculateYears } from "../util/helpers";

export class About extends Component<IWorkExperiences> {
  private getExperience(): number {
    let from = this.props.Experiences.reverse()[0].From;
    return calculateYears(from);
  }

  render() {
    return (
      <div className="about-section pt-4 px-3 px-lg-4 mt-1">
        <div className="row">
          <div className="col-md-6">
            <h2 className="h3 mb-3">About Me</h2>
            <p>
              Hello! I am Rubal Walia, an experienced desktop, web &amp; mobile
              application developer, a veratrin gamer, an open source advocate
              and member of .NET Foundation. Having {this.getExperience()}+
              years (excluding 4 years of freelance experience) of demonstrable
              Line of Business desktop application programming experience using
              .NET Framework, now pushing boundaries towards web (Angular) and
              mobile application (Xamarin) development.
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row mt-2">
              <div className="col-sm-4">
                <div className="pb-1">Age</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">
                  {calculateYears(DATE_OF_BIRTH)}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Email</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{EMAIL}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Phone</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{PHONE}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Address</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
