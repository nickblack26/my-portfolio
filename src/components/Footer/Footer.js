import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>LET'S WORK TOGETHER</LinkTitle>
					<LinkItem href='mailto:nicholas.black98@icloud.com'>
						nicholas.black98@icloud.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Inspired by Enyel Sequeira</Slogan>
				</CompanyContainer>
				<SocialIcons href='https://github.com/nickblack26'>
					<AiFillGithub size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://linkedin.com/in/nickblacks'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
