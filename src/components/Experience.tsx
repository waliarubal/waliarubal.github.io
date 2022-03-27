import { Component } from "react";
import { IWorkExperience, IWorkExperiences } from "../util/constants";
import { getMonthName } from "../util/helpers";

class ExperienceCard extends Component<IWorkExperience> {
    render() {
        return <>
            <div className="timeline-card timeline-card-primary card shadow-sm" key={this.props.Company}>
                <div className="card-body">
                    <div className="h5 mb-1">{this.props.Role} <span className="text-muted h6">at {this.props.Company}</span></div>
                    <div className="text-muted text-small mb-2">{getMonthName(this.props.From)}, {this.props.From.getFullYear()} - {getMonthName(this.props.To)}, {this.props.To.getFullYear()}</div>
                    <div>{this.props.Responsibilities}</div>
                </div>
            </div>
        </>;
    }
}

export class Experience extends Component<IWorkExperiences> {

    render() {
        return <>
            <div className="work-experience-section px-3 px-lg-4">
                <h2 className="h3 mb-4">Work Experience</h2>
                <div className="timeline">
                    {this.props.Experiences.map(experience =>
                        <ExperienceCard
                            Company={experience.Company}
                            Role={experience.Role}
                            From={experience.From}
                            To={experience.To}
                            Responsibilities={experience.Responsibilities} />)}
                </div>
            </div>
        </>;
    }
}