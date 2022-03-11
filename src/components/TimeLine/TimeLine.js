import React from 'react';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';

const Timeline = () => {
	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				Hey, my name is Nick Black, I am a 24 years old web developer. I
				am a dedicated web developer with 2+ years of experience
				collaborating with executive leaders to build responsive
				websites. I am also a hardworking creator with a passion for
				crafting exceptional, one-of-a-kind user experiences.
			</SectionText>
			<SectionDivider />
		</Section>
	);
};

export default Timeline;
