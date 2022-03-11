import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Nick Black | Front-End Developer</title>
				<meta
					property='og:title'
					content='Nick Black | Front-End Developer'
					key='title'
				/>
				<meta
					name='og::description'
					content='Hey, my name is Nick Black, I am a 24 years old web developer. I am a dedicated web developer with 2+ years of experience collaborating with executive leaders to build responsive websites. I am also a hardworking creator with a passion for crafting exceptional, one-of-a-kind user experiences.'
				/>
				<meta content='/images/metaimage.png' property='og:image' />
			</Head>
			<Layout>
				<Section grid>
					<Hero />
					<BgAnimation />
				</Section>
				<Technologies />
				<Timeline />
				<Acomplishments />
			</Layout>
		</>
	);
};

export default Home;
