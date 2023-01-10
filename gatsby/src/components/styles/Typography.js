import { createGlobalStyle } from "styled-components"

export const Typography = createGlobalStyle`
/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * input-mono:
 *   - http://typekit.com/eulas/00000000000000007735b116
 *   - http://typekit.com/eulas/00000000000000007735b11b
 *   - http://typekit.com/eulas/00000000000000007735b127
 *   - http://typekit.com/eulas/00000000000000007735b12a
 * input-mono-compressed:
 *   - http://typekit.com/eulas/00000000000000007735b118
 *   - http://typekit.com/eulas/00000000000000007735b11c
 *   - http://typekit.com/eulas/00000000000000007735b128
 *   - http://typekit.com/eulas/00000000000000007735b12b
 * input-mono-condensed:
 *   - http://typekit.com/eulas/00000000000000007735b11a
 *   - http://typekit.com/eulas/00000000000000007735b11e
 *   - http://typekit.com/eulas/00000000000000007735b129
 *   - http://typekit.com/eulas/00000000000000007735b130
 * input-mono-narrow:
 *   - http://typekit.com/eulas/00000000000000007735b119
 *   - http://typekit.com/eulas/00000000000000007735b11d
 *   - http://typekit.com/eulas/00000000000000007735b12d
 *   - http://typekit.com/eulas/00000000000000007735b12c
 * roc-grotesk:
 *   - http://typekit.com/eulas/00000000000000007735b7c3
 *   - http://typekit.com/eulas/00000000000000007735b7d4
 * roc-grotesk-compressed:
 *   - http://typekit.com/eulas/00000000000000007735b7bd
 *   - http://typekit.com/eulas/00000000000000007735b7d5
 * roc-grotesk-condensed:
 *   - http://typekit.com/eulas/00000000000000007735b7be
 *   - http://typekit.com/eulas/00000000000000007735b7c7
 * roc-grotesk-extrawide:
 *   - http://typekit.com/eulas/00000000000000007735b7cb
 *   - http://typekit.com/eulas/00000000000000007735b7db
 * roc-grotesk-wide:
 *   - http://typekit.com/eulas/00000000000000007735b7c2
 *   - http://typekit.com/eulas/00000000000000007735b7cd
 *
 * © 2009-2022 Adobe Systems Incorporated. All Rights Reserved.
 */
/*{"last_published":"2022-12-26 22:11:49 UTC"}*/


@font-face {
font-family:"input-mono-compressed";
src:url("https://use.typekit.net/af/b2e180/00000000000000007735b118/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/b2e180/00000000000000007735b118/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/b2e180/00000000000000007735b118/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono-compressed";
src:url("https://use.typekit.net/af/e9058b/00000000000000007735b11c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/e9058b/00000000000000007735b11c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/e9058b/00000000000000007735b11c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono-compressed";
src:url("https://use.typekit.net/af/9fa493/00000000000000007735b128/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/9fa493/00000000000000007735b128/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/9fa493/00000000000000007735b128/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"input-mono-compressed";
src:url("https://use.typekit.net/af/fb4f19/00000000000000007735b12b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/fb4f19/00000000000000007735b12b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/fb4f19/00000000000000007735b12b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"input-mono";
src:url("https://use.typekit.net/af/c3093e/00000000000000007735b116/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/c3093e/00000000000000007735b116/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/c3093e/00000000000000007735b116/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono";
src:url("https://use.typekit.net/af/f1b774/00000000000000007735b11b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/f1b774/00000000000000007735b11b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/f1b774/00000000000000007735b11b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono";
src:url("https://use.typekit.net/af/038dc3/00000000000000007735b127/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/038dc3/00000000000000007735b127/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/038dc3/00000000000000007735b127/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"input-mono";
src:url("https://use.typekit.net/af/62782e/00000000000000007735b12a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/62782e/00000000000000007735b12a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/62782e/00000000000000007735b12a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"input-mono-condensed";
src:url("https://use.typekit.net/af/a29683/00000000000000007735b11a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/a29683/00000000000000007735b11a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/a29683/00000000000000007735b11a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono-condensed";
src:url("https://use.typekit.net/af/7542f5/00000000000000007735b11e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/7542f5/00000000000000007735b11e/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/7542f5/00000000000000007735b11e/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono-condensed";
src:url("https://use.typekit.net/af/45fac4/00000000000000007735b129/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/45fac4/00000000000000007735b129/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/45fac4/00000000000000007735b129/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"input-mono-condensed";
src:url("https://use.typekit.net/af/2a3d4c/00000000000000007735b130/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/2a3d4c/00000000000000007735b130/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/2a3d4c/00000000000000007735b130/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"input-mono-narrow";
src:url("https://use.typekit.net/af/2b5bd5/00000000000000007735b119/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/2b5bd5/00000000000000007735b119/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/2b5bd5/00000000000000007735b119/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono-narrow";
src:url("https://use.typekit.net/af/41f034/00000000000000007735b11d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/41f034/00000000000000007735b11d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/41f034/00000000000000007735b11d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"input-mono-narrow";
src:url("https://use.typekit.net/af/84e6b2/00000000000000007735b12d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/84e6b2/00000000000000007735b12d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/84e6b2/00000000000000007735b12d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"input-mono-narrow";
src:url("https://use.typekit.net/af/de623c/00000000000000007735b12c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/de623c/00000000000000007735b12c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/de623c/00000000000000007735b12c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk";
src:url("https://use.typekit.net/af/975d46/00000000000000007735b7c3/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/975d46/00000000000000007735b7c3/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/975d46/00000000000000007735b7c3/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk";
src:url("https://use.typekit.net/af/97dd77/00000000000000007735b7d4/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/97dd77/00000000000000007735b7d4/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/97dd77/00000000000000007735b7d4/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-compressed";
src:url("https://use.typekit.net/af/69af51/00000000000000007735b7bd/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/69af51/00000000000000007735b7bd/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/69af51/00000000000000007735b7bd/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-compressed";
src:url("https://use.typekit.net/af/404af9/00000000000000007735b7d5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/404af9/00000000000000007735b7d5/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/404af9/00000000000000007735b7d5/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-condensed";
src:url("https://use.typekit.net/af/b47a88/00000000000000007735b7be/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/b47a88/00000000000000007735b7be/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/b47a88/00000000000000007735b7be/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-condensed";
src:url("https://use.typekit.net/af/f1cda4/00000000000000007735b7c7/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/f1cda4/00000000000000007735b7c7/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/f1cda4/00000000000000007735b7c7/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-extrawide";
src:url("https://use.typekit.net/af/638c22/00000000000000007735b7cb/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/638c22/00000000000000007735b7cb/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/638c22/00000000000000007735b7cb/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-extrawide";
src:url("https://use.typekit.net/af/4f5493/00000000000000007735b7db/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/4f5493/00000000000000007735b7db/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/4f5493/00000000000000007735b7db/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-wide";
src:url("https://use.typekit.net/af/bcc24a/00000000000000007735b7c2/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/bcc24a/00000000000000007735b7c2/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/bcc24a/00000000000000007735b7c2/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"roc-grotesk-wide";
src:url("https://use.typekit.net/af/c9606e/00000000000000007735b7cd/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/c9606e/00000000000000007735b7cd/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/c9606e/00000000000000007735b7cd/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

.tk-input-mono-compressed { font-family: "input-mono-compressed",monospace; }
.tk-input-mono { font-family: "input-mono",monospace; }
.tk-input-mono-condensed { font-family: "input-mono-condensed",monospace; }
.tk-input-mono-narrow { font-family: "input-mono-narrow",monospace; }
.tk-roc-grotesk { font-family: "roc-grotesk",sans-serif; }
.tk-roc-grotesk-compressed { font-family: "roc-grotesk-compressed",sans-serif; }
.tk-roc-grotesk-condensed { font-family: "roc-grotesk-condensed",sans-serif; }
.tk-roc-grotesk-extrawide { font-family: "roc-grotesk-extrawide",sans-serif; }
.tk-roc-grotesk-wide { font-family: "roc-grotesk-wide",sans-serif; }

`