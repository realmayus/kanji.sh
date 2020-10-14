import React from "react";
import {Typography} from "@material-ui/core";
import Page from "./base/Page";
import styled from 'styled-components';
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {AttachMoneyRounded, EmailRounded, GitHub, ShareRounded} from "@material-ui/icons";

const KButton = styled(Button)`
  border-radius: 100px;
    text-transform: none;
    padding: 8px 32px;
    background-color: #3f51b50f;
    margin-top: 8px;
    margin-bottom: 16px;
`;

export default function AboutPage() {
    return (
        <Page>
            <Typography variant={"h3"} gutterBottom>
                About
            </Typography>

            <Typography variant={"body1"} gutterBottom>
                kanji.sh aims to become a free & more comfortable way to study kanji reading and writing. Right now,
                there are hundreds of free resources available online but filled with distracting advertisements. I
                personally feel that distracting, not letting you focus on the reading. So, I'm making this website for
                myself and others who want to study kanji distraction-free.
                For now, there are hundreds of worksheets for you to download and practice writing. Why write kanji
                rather than using an app to dribble? Here are <Link
                href={"https://blog.remarkable.com/5-reasons-why-hand-writing-notes-while-studying-improves-your-learning-5f43a397155b"}>
                5 reasons why handwriting notes while studying improves your learning
            </Link>.
                The same thing works with kanji too.
            </Typography>

            <br/>

            <Typography variant={"h4"} gutterBottom>
                How can you help?
            </Typography>
            <Typography variant={"body1"} gutterBottom>
                Being free & open source, kanji.sh needs all the help it can get. You can support kanji.sh in many ways.
            </Typography>
            <Typography gutterBottom variant="body1">
                The simplest one is sharing kanji.sh with all people you know are learning Japanese, spread the word,
                and let them know kanji.sh here.
            </Typography>

            <KButton href={"#"} startIcon={<ShareRounded/>}>
                Share
            </KButton>
            {/* TODO: Add multiple social Buttons */}

            <Typography gutterBottom variant="h5">
                Feedback & Suggestions
            </Typography>
            <Typography gutterBottom variant="body1">
                You can submit your precious suggestions for the designs or more features. If nothing, you can drop me a
                mail telling me how I am doing with kanji.sh. Few words of encouragement never hurt!
            </Typography>

            <KButton href={"mailto:mail@aruke.dev"} startIcon={<EmailRounded/>}>
                Send
            </KButton>

            <Typography gutterBottom variant="h5">
                Contribute to the development
            </Typography>
            <Typography gutterBottom variant="body1">
                If you are a software developer, good news for you. Kanji.sh is open source! Check out the <Link
                href="https://github.com/aruke/kanji.sh">GitHub page</Link> to see the source code, build
                it yourself, file an <Link href="https://github.com/aruke/kanji.sh/issues">issue</Link>, and
                make it better!
                Show your love by sharing this website and starring the <Link
                href="https://github.com/aruke/kanji.sh">GitHub repository</Link>!
            </Typography>

            <KButton href={"https://github.com/aruke/kanji.sh"} startIcon={<GitHub/>}>
                GitHub Repository
            </KButton>

            <Typography gutterBottom variant="h5">
                Buy me Sushi
            </Typography>
            <Typography gutterBottom variant="body1">
                I work on kanji.sh in my free time, and it took me a considerable amount of time to build up to this
                point. You can fuel kanji.sh by buying me some Sushi. It also covers costs for servers, domain, and
                keeps me motivated to put more time to improve kanji.sh.
            </Typography>

            <KButton href={"https://www.buymeacoffee.com/aruke"} startIcon={<AttachMoneyRounded/>}>
                Buy Now
            </KButton>

            <br/>

            <Typography variant={"h4"} gutterBottom>
                Acknowledgments
            </Typography>
            <Typography gutterBottom variant="h5">
                KanjiVG
            </Typography>
            <Typography gutterBottom variant="body1">
                Kanji stroke diagrams are based on data from <Link
                href={"http://kanjivg.tagaini.net/"}>KanjiVG</Link>, which is copyright © 2009-2012 Ulrich Apel
                and released under the <Link href={"https://creativecommons.org/licenses/by-sa/3.0/"}>Creative
                Commons Attribution-Share Alike 3.0</Link> license.
            </Typography>

            <Typography gutterBottom variant="h5">
                Sources
            </Typography>
            <Typography gutterBottom variant="body1">
                JLPT kanji data comes from Peter van der Woude's <Link
                href={"https://jlptstudy.net"}>JLPTStudy</Link> study site.
                Grades & frequency kanji data is taken from <Link
                href={"https://en.wikipedia.org/wiki/Kyōiku_kanji"}>Wikipedia</Link> page.
                Wanikani level data comes from <Link href={"https://docs.api.wanikani.com/"}>Wanikani API</Link>.
                Meanings & Readings data is copied from David Gouveia's <Link
                href={"https://github.com/davidluzgouveia/kanji-data"}>GitHub</Link> project.
            </Typography>
        </Page>
    );
}
