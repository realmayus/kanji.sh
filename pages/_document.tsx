import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';
import theme from '../src/theme';

// You can find a benchmark of the available CSS minifiers under
// https://github.com/GoalSmashers/css-minification-benchmark
// We have found that clean-css is faster than cssnano but the output is larger.
// Waiting for https://github.com/cssinjs/jss/issues/279
// 4% slower but 12% smaller output than doing it in a single step.
//
// It's using .browserslistrc
let prefixer: any;
let cleanCSS: any;
if (process.env.NODE_ENV === 'production') {
    const postcss = require('postcss');
    const autoprefixer = require('autoprefixer');
    const CleanCSS = require('clean-css');
    prefixer = postcss([autoprefixer]);
    cleanCSS = new CleanCSS();
}

export default class MyDocument extends Document {
    render() {
        // ↓ https://err.sh/next.js/no-document-title
        // noinspection HtmlRequiredTitleElement
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href={"/favicon.ico"}/>
                    <link rel="apple-touch-icon" href={"/logo192.png"}/>
                    <link rel="manifest" href={"/manifest.json"}/>
                    <meta name="theme-color" content={theme.palette.primary.dark}/>
                    <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous"/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
                    />
                    {/* Primary Meta Tags */}
                    <meta name="title" content="kanji.sh"/>
                    <meta name="description" content="Collection of printable handwriting kanji worksheets."/>
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:url" content="https://kanji.sh"/>
                    <meta property="og:title" content="kanji.sh"/>
                    <meta property="og:description" content="Free tool to practice reading & writing Japanese kanji."/>
                    <meta property="og:image" content="%PUBLIC_URL%/poster.png"/>
                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://kanji.sh"/>
                    <meta property="twitter:title" content="kanji.sh"/>
                    <meta property="twitter:description"
                          content="Free tool to practice reading & writing Japanese kanji."/>
                    <meta property="twitter:image" content="%PUBLIC_URL%/poster.png"/>
                    {/* Site Verification */}
                    <meta name="google-site-verification" content="zJzDzuLG5I7xmNqDZzTCDwtmTP2243-WD_g6Hg4PDsk"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    let css = sheets.toString();
    // It might be undefined, e.g. after an error.
    if (css && process.env.NODE_ENV === 'production') {
        const result1 = await prefixer.process(css, {from: undefined});
        css = result1.css;
        css = cleanCSS.minify(css).styles;
    }

    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            <style
                id="jss-server-side"
                key="jss-server-side"
                dangerouslySetInnerHTML={{__html: css}}
            />,
        ],
    };
}
;
