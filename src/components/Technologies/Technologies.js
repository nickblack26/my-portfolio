import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
	Btn3,
} from '../../styles/GlobalComponents';
import { CgChevronDoubleDownO } from 'react-icons/cg';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';
import Link from 'next/link';

const Technologies = () => (
	<Section id='tech'>
		<Btn3>
			<Link href='#tech'>
				<CgChevronDoubleDownO />
			</Link>
		</Btn3>
		<SectionDivider style={{ marginBottom: '3%' }} />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			My main stack is Next.JS, But I am also very proficient in and work
			with HTML/CSS.
		</SectionText>
		<List>
			<ListItem>
				<DiReact
					style={{
						marginLeft: '14%',
					}}
					size='3rem'
				/>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						<span
							style={{
								fontWeight: 'bolder',
								fontStyle: 'italic',
							}}
						>
							Experience with
						</span>{' '}
						<br />
						<br /> React.js <br /> Next.js
						<br /> JavaScript <br /> HTML 5 <br /> CSS
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiNodejsSmall
					style={{
						marginLeft: '14%',
					}}
					size='3rem'
				/>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						<span
							style={{
								fontWeight: 'bolder',
								fontStyle: 'italic',
							}}
						>
							Familiar with
						</span>{' '}
						<br /> <br /> NoSQL <br /> GraphQL API
						<br /> API
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase
					style={{
						marginLeft: '14%',
					}}
					size='3rem'
				/>
				<ListContainer>
					<ListTitle>DataBase</ListTitle>
					<ListParagraph>
						<span
							style={{
								fontWeight: 'bolder',
								fontStyle: 'italic',
							}}
						>
							Experience with
						</span>{' '}
						<br /> <br /> GraphCMS <br /> GraphCMS API
						<br /> Firebase <br /> Next Auth
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider />
	</Section>
);

export default Technologies;
