import { Component } from "react";
import { IWorkExperiences } from "../util/constants";
import { getMonthName } from "../util/helpers";

export class Experience extends Component<IWorkExperiences> {

    render() {
        return <>
            <div className="work-experience-section px-3 px-lg-4">
                <h2 className="h3 mb-4">Work Experience</h2>
                <div className="timeline">
                    {this.props.Experiences.map(experience => <>
                        <div className="timeline-card timeline-card-primary card shadow-sm" key={experience.Company}>
                            <div className="card-body">
                                <div className="h5 mb-1">{experience.Role} <span className="text-muted h6">at {experience.Company}</span></div>
                                <div className="text-muted text-small mb-2">{getMonthName(experience.From)}, {experience.From.getFullYear()} - {getMonthName(experience.To)}, {experience.To.getFullYear()}</div>
                                <div>{experience.Responsibilities}</div>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
        </>;
    }
}