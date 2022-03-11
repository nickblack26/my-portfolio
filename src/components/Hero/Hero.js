import React, { Component, useEffect, useRef } from 'react';
import { init } from 'ityped';
import {
	Section,
	SectionText,
	SectionTitle,
	SectionText2,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span, Span2 } from './HeroStyles';

function Hero() {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			typeSpeed: 120,
			backSpeed: 30,
			loop: true,
			strings: ['Front-End', 'Back-End', 'FullStack'],
		});
	}, []);
	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Hi There, I'm
					<br />
					<Span>Nick Black</Span>
					<br />
					Web Developer
					<Span2 style={{ marginLeft: '2rem' }} ref={textRef}></Span2>
				</SectionTitle>
				<SectionText2>
					Dedicated web developer with 2+ years of experience
					collaborating with executive leaders to build responsive
					websites.
					<br />
				</SectionText2>
				<Button
					onClick={() =>
						(window.location =
							'https://www.dropbox.com/s/kl9sgfl6rdbclt7/NickBlacksResume.pdf?dl=1')
					}
				>
					<td>My CV</td>
				</Button>
			</LeftSection>
		</Section>
	);
}

export default Hero;
