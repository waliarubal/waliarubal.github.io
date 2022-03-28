import { Component } from "react";
import avatar from '../assets/images/avatar.webp';
import { FULL_NAME } from '../util/constants';

export class Cover extends Component {

    render() {
        return <>
            <div className="cover-bg p-3 p-lg-4 text-white">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="avatar hover-effect bg-white shadow-sm p-1">
                            <img src={avatar} alt="Rubal Walia" width={200} height={200} />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 text-center text-md-start">
                        <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay={0}>{FULL_NAME}</h2>
                        <p data-aos="fade-left" data-aos-delay={100}>Delivery Manager &amp; Software Developer</p>
                        <div className="d-print-none" data-aos="fade-left" data-aos-delay={200}>
                            <a className="btn btn-light text-dark shadow-sm mt-1 me-1" href={require('../assets/RubalWalia.pdf')} download={true}>Download CV</a>
                            <a className="btn btn-success shadow-sm mt-1" href="#contact">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }

}