import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

import svgSrc from './other-14px.svg';
import { BodySmall, SvgIcon, ImgIcon, Button, ExternalLink, Icon, InlineCode, Code } from '../../../lib/components';
import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../Shared';

const InlineSvg = () => {
    return <svg fill="currentColor" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m0 0h6v6h-6zm2 2h2v2h-2zm-2 6h6v6h-6zm2 2h2v2h-2zm12-2h-6v6h6zm-2 2h-2v2h2zm-4-10h6v6h-6zm2 2h2v2h-2z" fill-rule="evenodd"/></svg>
};

const liveScope = {styled, Icon, ImgIcon, SvgIcon, svgSrc, Button, InlineSvg};

const examples = {
basic: `
<div>
    <Icon type="edit" />
    <Icon type="left" />
</div>
`.trim(),

img: `
// first import the svg
// import svgSrc from './other-14px.svg';
<ImgIcon src={svgSrc} />
`.trim(),

svg: `
let InlineSvg = () => {
    return <svg fill="currentColor" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m0 0h6v6h-6zm2 2h2v2h-2zm-2 6h6v6h-6zm2 2h2v2h-2zm12-2h-6v6h6zm-2 2h-2v2h2zm-4-10h6v6h-6zm2 2h2v2h-2z" fill-rule="evenodd"/></svg>
};

render(
    <SvgIcon Svg={InlineSvg} />
)
`.trim(),

button: `
<div>
    InlineSvg used buttons text color
    <br/><Button variant="marketing"><SvgIcon Svg={InlineSvg} />Marketing</Button>
    <br />
    <br />ReferencedSvg does NOT use buttons text color
    <br/><Button variant="marketing"><ImgIcon src={svgSrc} />Marketing</Button>
</div>
`.trim()
};

export class Icons extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Icons</PageTitle>

                <h3>Appearance and Behavior</h3>
                <BodySmall>
                    We are extending the Ant Design Icon component.
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/icon/">Antd component</ExternalLink>
                </BodySmall>

                <SectionWithDivider>
                    <h4>Basic Ant Icon</h4>
                    The Basic Icon includes support for a number of images specified via the <InlineCode>type</InlineCode> attribute.
                    <br/>For a list of icons see the: <ExternalLink target="_blank" href="https://ant.design/components/icon/">Antd component</ExternalLink>
                    <DefaultLiveProvider code={examples.basic} scope={liveScope} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Custom ImgIcon</h4>
                    You can pass an imported source via the <InlineCode>src</InlineCode> attribute.
                    Note that the color WILL NOT be affected by css if the img contains an externally linked SVG.
                    <DefaultLiveProvider code={examples.img} scope={liveScope} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Custom SvgIcon</h4>
                    You can pass an inline <InlineCode>SVG</InlineCode> via the <InlineCode>Svg</InlineCode> attribute.
                    Note that the color WILL be affected by css.
                    <DefaultLiveProvider code={examples.svg} scope={liveScope} noInline={true} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>SvgIcon On A Button</h4>
                    You can easily add any Icon to a Button. Note that the color will only be
                    affected by css if you use an inline SVG with a <InlineCode>fill="currentColor"</InlineCode>.
                    <DefaultLiveProvider code={examples.button} scope={liveScope} />
                </SectionWithDivider>

            </React.Fragment>
        )
    }
}
