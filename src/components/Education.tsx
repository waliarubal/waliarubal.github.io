import { Component } from "react";
import { IEducationCredential } from "../models/EducationCredential";
import { IEducationCredentials } from "../models/EducationCredentials";

class EducationCard extends Component<IEducationCredential> {
  render() {
    return (
      <>
        <div className="timeline-card timeline-card-success card shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1">
              {this.props.Name}{" "}
              <span className="text-muted h6">
                from {this.props.Organization}
              </span>
            </div>
            <div className="text-muted text-small mb-2">
              {this.props.FromYear} - {this.props.ToYear}
            </div>
            <div>{this.props.Details}</div>
          </div>
        </div>
      </>
    );
  }
}

export class Education extends Component<IEducationCredentials> {
  render() {
    return (
      <div className="education-section px-3 px-lg-4 pb-4">
        <h2 className="h3 mb-4">Education</h2>
        <div className="timeline">
          {this.props.Credentials.map((credential) => (
            <EducationCard
              key={credential.Name}
              Name={credential.Name}
              Organization={credential.Organization}
              FromYear={credential.FromYear}
              ToYear={credential.ToYear}
              Details={credential.Details}
            />
          ))}
        </div>
      </div>
    );
  }
}
