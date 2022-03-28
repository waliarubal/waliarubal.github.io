import { Component } from "react";
import { ISkill, ISkills } from "../util/constants";

interface ISkillCardProps {
    Skill: ISkill;
    IsPrimary: boolean;
}

class SkillCard extends Component<ISkillCardProps> {

    render() {
        let width = `${this.props.Skill.Percent}%`;
        let className = `progress-bar ${this.props.IsPrimary ? 'bg-primary' : 'bg-success'}`;
        return <>
            <div className="mb-2"><span>{this.props.Skill.Name}</span>
                <div className="progress my-1">
                    <div className={className} role="progressbar" data-aos="zoom-in-right" data-aos-delay={100}
                        data-aos-anchor=".skills-section" style={{ width: width }} aria-valuenow={this.props.Skill.Percent} aria-valuemin={0}
                        aria-valuemax={100}></div>
                </div>
            </div>
        </>;
    }
}

export class Skills extends Component<ISkills> {

    render() {
        let primarySkills = this.props.Skills.slice(0, this.props.Skills.length / 2 - 1);
        let secondarySkills = this.props.Skills.slice(this.props.Skills.length / 2, this.props.Skills.length / 2 - 1);

        return <>
            <div className="skills-section px-3 px-lg-4">
                <h2 className="h3 mb-3">Professional Skills</h2>
                <div className="row">
                    <div className="col-md-6">
                        {primarySkills.map(skill =>
                            <SkillCard
                                key={skill.Name}
                                Skill={skill}
                                IsPrimary={true} />)}
                    </div>
                    <div className="col-md-6">
                        {secondarySkills.map(skill =>
                            <SkillCard
                                key={skill.Name}
                                Skill={skill}
                                IsPrimary={false} />)}
                    </div>
                </div>
            </div>
        </>;
    }
}