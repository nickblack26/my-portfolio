import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html>
				<title>Nick Black | Front-End Developer</title>
				<Head>
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
					<link
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
