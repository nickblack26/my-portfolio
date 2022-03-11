import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Img,
	ImgWrap,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
} from '../Projects/ProjectsStyles';
import Button from '../../styles/GlobalComponents/Button';

const Acomplishments = () => (
	<Section>
		<SectionTitle style={{ marginBottom: '32px' }}>Projects</SectionTitle>
		<GridContainer style={{ padding: '0' }}>
			{projects
				.slice(0, 4)
				.map(
					({ image, title, description, tags, source, visit }, i) => (
						<BlogCard key={i}>
							<ImgWrap>
								<Img src={image} />
							</ImgWrap>
							<TitleContent>
								<HeaderThree title>{title}</HeaderThree>
								<Hr />
							</TitleContent>
							<CardInfo>{description}</CardInfo>
							<div>
								<TitleContent>Stack</TitleContent>
								<TagList>
									{tags.map((tag, i) => (
										<Tag key={i}>{tag}</Tag>
									))}
								</TagList>
							</div>
							<UtilityList>
								{visit ? (
									<ExternalLinks href={visit}>
										Code
									</ExternalLinks>
								) : null}

								<ExternalLinks href={source}>
									Website
								</ExternalLinks>
							</UtilityList>
						</BlogCard>
					)
				)}
		</GridContainer>
		<div
			style={{
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
				marginTop: '3.6rem',
			}}
		>
			<Button link='/projects'>
				<td>More Projects</td>
			</Button>
		</div>
	</Section>
);

export default Acomplishments;
