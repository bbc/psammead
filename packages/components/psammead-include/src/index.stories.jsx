import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Include from './index';

const requireJsSrc = `https://news.files.bbci.co.uk/include/vjassets/js/vendor/require-2.1.20b.min.js`;

const idt1Include = `<style>@-webkit-keyframes spinnerRotate{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}@-moz-keyframes spinnerRotate{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}@-ms-keyframes spinnerRotate{from{-ms-transform:rotate(0deg);}to{-ms-transform:rotate(360deg);}}.bbc-news-visual-journalism-loading-spinner{display: block; margin: 10px auto; width: 33px; height: 33px; max-width: 33px; -webkit-animation-name: spinnerRotate; -webkit-animation-duration: 5s; -webkit-animation-iteration-count: infinite; -webkit-animation-timing-function: linear; -moz-animation-name: spinnerRotate; -moz-animation-duration: 5s; -moz-animation-iteration-count: infinite; -moz-animation-timing-function: linear; -ms-animation-name: spinnerRotate; -ms-animation-duration: 5s; -ms-animation-iteration-count: infinite; -ms-animation-timing-function: linear; background-image: url('data:image/gif;base64,R0lGODlhIQAhALMAAMPDw/Dw8BAQECAgIICAgHBwcKCgoDAwMFBQULCwsGBgYEBAQODg4JCQkAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFOTcwNTgzMDlCMjExRTQ4MDU3RThBRkIxMjYyOEYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFOTcwNTg0MDlCMjExRTQ4MDU3RThBRkIxMjYyOEYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUU5NzA1ODEwOUIyMTFFNDgwNTdFOEFGQjEyNjI4RjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUU5NzA1ODIwOUIyMTFFNDgwNTdFOEFGQjEyNjI4RjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAIQAhAAAE0vDJSScguOrNE3IgyI0bMIQoqUoF6q5jcLigsCzwJrtCAeSjDwoRAI4aLoNxxBCglEtJoFGUKFCEqCRxKkidoIP20aoVDaifFvB8XEGDseQEUjzoDq+87IijEnIPCSlpgWwhDIVyhyKKY4wOD3+BgyF3IXpjfHFvfYF4dmghalGQSgFgDmJaM2ZWWFEEKHYSTW1AojUMFEi3K7kgDRpCIUQkAcQgCDqtIT2kFgWpYVUaOzQ2NwvTIQfVHHw04iCZKibjNAPQMB7oDgiAixjzBOsbEQA7');}</style><script>define('vjCutsTheMustard', function cutsTheMustard(){return ( document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1') && 'querySelector' in document && 'localStorage' in window && 'addEventListener' in window );});</script><div id="5e57e13fcddb2"> <div id="5e57e13fcddb2-core-content"> <a href="//www.bbc.co.uk/indepthtoolkit/quizzes/sistema_solar_Quiz_Mundo">Haga clic para ver el contenido&#58; sistema_solar_Quiz_Mundo</a> </div></div><script type="text/javascript">require.config({paths:{'pym': '//static.bbc.co.uk/indepthtoolkit/15.3.0.361/js/vendor/bower/pym.js/dist/pym.v1.min', 'pymManager': '//static.bbc.co.uk/indepthtoolkit/15.3.0.361/js/vendor/bower/news-vj-iframe-wrapper/js/pym-manager'}}); require(['vjCutsTheMustard', 'pymManager'], function (cutsTheMustard, pymManager){if (cutsTheMustard){pymManager.init('5e57e13fcddb2', '//www.bbc.co.uk/indepthtoolkit/quizzes/sistema_solar_Quiz_Mundo?iframe=true&iframeUID=5e57e13fcddb2', 'pym', '5e57e13fcddb2-core-content');}});</script>`;

const idt2Include = `<style data-styled="dFVjRg dxInUs cFxBNd kcLzbd dsXAGV jcVCQh fLHIGc fuFPxs kKlRIM eaehaZ fFKUty" data-styled-version="4.0.3"> /* sc-component-id: components__EditorialFooterDiv-s4q8aoa-0 */ .kKlRIM.kKlRIM{max-width: 100%; width: 100%; font-size: 16px; box-sizing: border-box; word-break: break-word; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-items: flex-end; -webkit-box-align: flex-end; -ms-flex-align: flex-end; align-items: flex-end;}.kKlRIM.kKlRIM:last-of-type{border-top: 1px solid; margin-top: 2px;}.kKlRIM.kKlRIM:last-of-type{padding-top: 4px;}/* sc-component-id: components__EditorialFooterSource-s4q8aoa-2 */ .eaehaZ.eaehaZ{max-width: 100%; width: 100%; box-sizing: border-box; word-break: break-word; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between;}/* sc-component-id: components__EditorialFooterBBCLogo-s4q8aoa-3 */ .fFKUty.fFKUty{margin: 4px 0; box-sizing: border-box; height: 15px; width: 45px; opacity: 0.6; margin-left: 4px; -webkit-flex: 0 0 auto; -ms-flex: 0 0 auto; flex: 0 0 auto;}/* sc-component-id: components__EditorialTitle-s4q8aoa-4 */ .dxInUs.dxInUs{font-size: 24px; font-weight: bold; line-height: 32px; word-break: break-word; padding: 0; margin: 0;}/* sc-component-id: TableGraphic__TableGraphicContainer-s1dx3n27-0 */ .dFVjRg.dFVjRg{width: 100%; background-color: #fff; font-family: Helvetica, Arial, sans-serif; box-sizing: border-box;}/* sc-component-id: TableGraphic__TableHorizontalScrollWrapper-s1dx3n27-1 */ .cFxBNd.cFxBNd{overflow-x: auto;}/* sc-component-id: TableGraphic__Table-s1dx3n27-2 */ .kcLzbd.kcLzbd{width: 100%; border-collapse: collapse; margin: 5px 0; box-sizing: border-box;}.kcLzbd.kcLzbd:only-child{margin: 0;}.kcLzbd.kcLzbd:first-child{margin-top: 0;}.kcLzbd.kcLzbd:last-child{margin-bottom: 0;}/* sc-component-id: TableGraphic__TH-s1dx3n27-3 */ .dsXAGV.dsXAGV{height: 32px; border: 1px solid #ededed; text-align: left; box-sizing: border-box; padding: 8px 16px; overflow: hidden; font-weight: bold;}thead .dsXAGV.dsXAGV{background-color: rgb(217, 230, 242);}tbody .dsXAGV.dsXAGV{background-color: rgb(229, 242, 255);}.dsXAGV.dsXAGV.right-align{text-align: right;}.dsXAGV.dsXAGV.hidden-graphic-column{display: none;}.jcVCQh.jcVCQh{height: 32px; border: 1px solid #ededed; text-align: left; box-sizing: border-box; padding: 8px 16px; overflow: hidden; font-weight: bold;}thead .jcVCQh.jcVCQh{background-color: #f2f2f2;}tbody .jcVCQh.jcVCQh{background-color: #ffffff;}.jcVCQh.jcVCQh.right-align{text-align: right;}.jcVCQh.jcVCQh.hidden-graphic-column{display: none;}/* sc-component-id: TableGraphic__TD-s1dx3n27-4 */ .fLHIGc.fLHIGc{background-color: rgb(229, 242, 255); height: 32px; border: 1px solid #ededed; text-align: left; box-sizing: border-box; padding: 8px 16px; overflow: hidden;}.fLHIGc.fLHIGc.right-align{text-align: right;}.fLHIGc.fLHIGc.hidden-graphic-column{display: none;}.fuFPxs.fuFPxs{background-color: #ffffff; height: 32px; border: 1px solid #ededed; text-align: left; box-sizing: border-box; padding: 8px 16px; overflow: hidden;}.fuFPxs.fuFPxs.right-align{text-align: right;}.fuFPxs.fuFPxs.hidden-graphic-column{display: none;}</style><style>html, body{margin: 0; padding: 0;}@font-face{font-family: "ReithSans"; font-display: swap; src: url(/static/media/BBCReithSans_W_Rg.woff2) format("woff2"), url(/static/media/BBCReithSans_W_Rg.woff) format("woff");}@font-face{font-family: "ReithSans"; font-display: swap; src: url(/static/media/BBCReithSans_W_Md.woff2) format("woff2"), url(/static/media/BBCReithSans_W_Md.woff) format("woff"); font-weight: bold;}@font-face{font-family: "BBCNassim"; font-display: swap; src: url(/static/media/BBCNassimRegularFADesktop.ttf) format("truetype");}@font-face{font-family: "BBCNassim"; font-display: swap; src: url(/static/media/BBCNassimBoldFADesktop.ttf) format("truetype"); font-weight: bold;}@font-face{font-family: "Iskoola_pota_bbc"; font-display: swap; src: url(/static/media/iskpotaRegular.ttf) format("truetype");}@font-face{font-family: "Iskoola_pota_bbc"; font-display: swap; src: url(/static/media/iskpotaBold.ttf) format("truetype"); font-weight: bold;}@font-face{font-family: "Latha"; font-display: swap; src: url(/static/media/lathaRegular.ttf) format("truetype");}@font-face{font-family: "Latha"; font-display: swap; src: url(/static/media/lathaBold.ttf) format("truetype"); font-weight: bold;}@font-face{font-family: "Mangal"; font-display: swap; src: url(/static/media/mangalRegular.ttf) format("truetype");}@font-face{font-family: "Mangal"; font-display: swap; src: url(/static/media/mangalBold.ttf) format("truetype"); font-weight: bold;}@font-face{font-family: "Noto Sans CJK KR"; font-display: swap; src: url(/static/media/NotoSansCJKkr-Regular.otf) format("opentype");}@font-face{font-family: "Noto Sans CJK KR"; font-display: swap; src: url(/static/media/NotoSansCJKkr-Bold.otf) format("opentype"); font-weight: bold;}@font-face{font-family: "Noto Sans Gurmukhi"; font-display: swap; src: url(/static/media/NotoSansGurmukhi-Regular.ttf) format("truetype");}@font-face{font-family: "Noto Sans Gurmukhi"; font-display: swap; src: url(/static/media/NotoSansGurmukhi-Bold.ttf) format("truetype"); font-weight: bold;}@font-face{font-family: "Padauk"; font-display: swap; src: url(/static/media/PadaukRegular.ttf) format("truetype");}@font-face{font-family: "Padauk"; font-display: swap; src: url(/static/media/PadaukBold.ttf) format("truetype"); font-weight: bold;}@font-face{font-family: "Shonar_bangala"; font-display: swap; src: url(/static/media/ShonarRegular.ttf) format("truetype");}@font-face{font-family: "Shonar_bangala"; font-display: swap; src: url(/static/media/ShonarBold.ttf) format("truetype"); font-weight: bold;}@font-face{font-family: "NotoSansEthiopic"; font-display: swap; src: url(/static/media/NotoSansEthiopic-Regular.ttf) format("truetype");}@font-face{font-family: "NotoSansEthiopic"; font-display: swap; src: url(/static/media/NotoSansEthiopic-Bold.ttf) format("truetype"); font-weight: bold;}</style><div data-idt-uuid="41a6ad82-8bad-482e-9645-301af4a8e857"> <div data-graphicuuid="41a6ad82-8bad-482e-9645-301af4a8e857" dir="ltr" class="TableGraphic__TableGraphicContainer-s1dx3n27-0 dFVjRg" > <h2 class="components__EditorialTitle-s4q8aoa-4 dxInUs"> Top places with highest pass rate </h2> <div class="TableGraphic__TableHorizontalScrollWrapper-s1dx3n27-1 cFxBNd"> <table class="TableGraphic__Table-s1dx3n27-2 kcLzbd"> <thead> <tr> <th class="right-align TableGraphic__TH-s1dx3n27-3 dsXAGV" scope="col" ></th> <th class="left-align TableGraphic__TH-s1dx3n27-3 jcVCQh" scope="col" > Test centre </th> <th class="right-align TableGraphic__TH-s1dx3n27-3 jcVCQh" scope="col" > Number of tests Apr-Dec 2018 </th> <th class="right-align TableGraphic__TH-s1dx3n27-3 jcVCQh" scope="col" > Pass rate % </th> </tr></thead> <tbody> <tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">1</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Inveraray </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">53</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">84.9</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">2</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Mallaig </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">18</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">83.3</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">3</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Gairloch </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">24</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">83.3</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">4</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Pitlochry </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">93</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">78.5</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">5</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Isle of Mull </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">18</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">77.8</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">6</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Lochgilphead </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">110</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">75.5</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">7</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Llandrindod Wells </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">464</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">74.1</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">8</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Ullapool </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">38</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">73.7</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">9</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Islay Island </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">29</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">72.4</td></tr><tr> <td class="right-align TableGraphic__TD-s1dx3n27-4 fLHIGc">10</td><td class="left-align TableGraphic__TD-s1dx3n27-4 fuFPxs"> Ballater </td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">144</td><td class="right-align TableGraphic__TD-s1dx3n27-4 fuFPxs">70.1</td></tr></tbody> </table> </div><span class="components__EditorialFooterDiv-s4q8aoa-0 kKlRIM" ><span class="components__EditorialFooterSource-s4q8aoa-2 eaehaZ" ><div>Source: DVSA</div><svg height="15" width="45" xmlns="http://www.w3.org/2000/svg" aria-label="BBCLogo" viewBox="0 0 211.122 60.482" rtl="ltr" class="components__EditorialFooterBBCLogo-s4q8aoa-3 fFKUty" > <g fill-rule="evenodd"> <defs><path id="SVGID_1_" d="M0 0h211.122v60.482H0z"></path></defs> <clipPath id="SVGID_2_"> <use xlink:href="#SVGID_1_" overflow="visible"></use> </clipPath> <path d="M187.413 8.567c-.28-.048-.568-.095-.86-.14l-.346-.05c-.487-.067-.984-.123-1.484-.17-.34-.033-.68-.056-1.018-.076-.603-.037-1.2-.052-1.774-.052-.262 0-.412.005-.668.008-.483.008-.952.03-1.415.06-.264.017-.523.04-.78.062-.38.034-.756.075-1.125.122l-.31.042-.342.05-.423.067c-.186.03-.367.062-.547.095-.25.047-.5.097-.746.148-1.514.32-2.914.746-4.208 1.25-.666.26-1.31.54-1.917.84-.507.247-.996.504-1.464.774-.455.263-.893.528-1.312.81-.242.16-.48.323-.71.49-.198.143-.395.286-.586.434-.403.313-.795.63-1.16.955-.342.303-.675.61-.984.918-.267.267-.534.537-.787.82-.255.287-.51.576-.754.877-.265.328-.526.663-.776 1.01-.184.257-.364.518-.538.784-.12.18-.234.362-.348.546-.666 1.088-1.25 2.254-1.727 3.497-.598 1.55-1.03 3.216-1.267 4.99-.074.557-.132 1.124-.165 1.704-.025.445-.043.896-.043 1.353 0 .342.003.68.025 1.014.023.35.05.694.09 1.036l.025.24c.052.406.114.805.19 1.2.03.152.062.307.095.46.07.328.147.652.233.97.112.413.23.818.364 1.216.165.487.34.964.534 1.426.308.735.644 1.44 1.008 2.103.214.39.433.77.66 1.133.183.292.37.57.56.846.248.36.507.707.762 1.037.27.35.55.677.82.99.34.39.683.748 1.013 1.077l.18.175c.274.264.57.55.913.84.233.198.474.406.737.612.245.192.497.39.768.583.322.23.66.466 1.02.698.38.244.78.49 1.207.728.843.472 1.773.925 2.797 1.337.382.152.778.3 1.188.44.405.138.82.267 1.252.392.734.208 1.507.395 2.318.553.652.127 1.332.232 2.034.317.698.084 1.42.15 2.17.187.363.018.732.032 1.107.038.172.003.347.007.52.007 1.343 0 2.584-.05 3.733-.146l.226-.02c.46-.042.9-.09 1.33-.142.656-.082 1.285-.18 1.88-.285.377-.07.74-.143 1.095-.218.55-.118 1.072-.246 1.572-.378.367-.097.724-.2 1.065-.303.41-.123.807-.254 1.18-.382l.364-.127c.18-.064.427-.152.718-.266.384-.15.848-.333 1.375-.558.313-.135.655-.288 1.004-.45.31-.14.64-.3.968-.46.14-.068.28-.132.42-.203v-8.19c-.094.06-.196.12-.293.178l-.562.34c-.56.34-1.1.658-1.643.954-.595.322-1.175.62-1.75.892-1.014.477-1.983.88-2.924 1.217-1.783.64-3.424 1.05-4.87 1.3-.17.03-.34.058-.506.084-.4.063-.78.11-1.148.15-.572.063-1.1.095-1.58.118-.31.013-.6.02-.87.02-.58 0-1.178-.015-1.787-.058-.713-.05-1.44-.13-2.172-.254-1.185-.198-2.373-.5-3.537-.92-.17-.062-.343-.132-.514-.2-.11-.042-.225-.09-.333-.136-.192-.082-.38-.163-.57-.252-.398-.19-.797-.393-1.185-.612-.19-.11-.378-.224-.578-.347-.194-.123-.39-.25-.578-.38-.24-.168-.476-.338-.708-.52-.22-.175-.45-.362-.64-.53l-.272-.244-.135-.124-.08-.076-.1-.095c-.367-.366-.705-.735-1.012-1.104-.172-.208-.334-.416-.488-.626-.15-.2-.287-.406-.42-.606-.127-.19-.246-.386-.358-.577-.17-.29-.324-.58-.465-.865-.122-.245-.232-.49-.336-.732-.176-.41-.327-.828-.453-1.222-.1-.308-.183-.615-.256-.91-.214-.854-.326-1.637-.388-2.3-.023-.258-.04-.495-.05-.714-.015-.328-.02-.612-.02-.84 0-.15.002-.322.01-.52.018-.468.055-1.06.153-1.736.06-.41.144-.85.252-1.31.073-.307.16-.616.258-.938.09-.292.195-.585.31-.886.075-.203.162-.405.25-.61.12-.277.254-.553.398-.835.108-.21.228-.42.35-.633.27-.467.575-.93.92-1.39.125-.164.253-.33.388-.493.173-.21.357-.425.548-.63.097-.102.193-.21.294-.312 1.5-1.5 3.19-2.624 4.938-3.42.27-.123.548-.234.822-.344.28-.11.553-.208.836-.304.302-.1.61-.194.913-.28.288-.08.58-.15.865-.217.288-.067.58-.123.865-.176.317-.06.633-.106.947-.15.316-.04.63-.074.94-.1.598-.052 1.184-.078 1.755-.078.193 0 .38-.002.57.003.423.01.838.024 1.242.05.282.02.556.037.826.062.517.048 1.015.112 1.488.184.42.063.828.136 1.208.21.59.117 1.126.248 1.607.374.315.082.603.168.867.246.396.118.735.224.998.315.455.157.706.25.706.25.403.143.795.302 1.184.457.52.208 1.016.435 1.494.65.397.178.772.364 1.127.537.292.142.563.286.82.418.448.23.826.442 1.138.61l.835.455V11.74s-.503-.208-1.37-.534c-.382-.146-.834-.317-1.348-.5-.287-.1-.586-.21-.907-.317-.254-.086-.516-.18-.79-.267-.306-.097-.623-.203-.952-.302-.235-.07-.48-.145-.724-.215l-.22-.062c-.238-.068-.48-.136-.728-.202-.29-.077-.587-.153-.888-.227l-.58-.14c-.318-.072-.64-.143-.966-.21-.33-.073-.668-.134-1.007-.196zM147.208.21h63.818v60.058h-63.818V.21zM98.16 33.33V45.13h7.663s.153-.004.404-.014c.258-.01.623-.023 1.065-.06.836-.078 1.928-.23 2.99-.59.963-.324 1.9-.81 2.615-1.526.275-.275.503-.562.687-.852.6-.946.753-1.91.786-2.455.018-.236.017-.375.017-.375s.004-.106 0-.29c-.01-.228-.036-.67-.158-1.142-.144-.56-.415-1.21-.896-1.803-.09-.113-.19-.226-.297-.333-.21-.21-.438-.414-.688-.598-.42-.308-.9-.572-1.42-.798-.688-.297-1.46-.52-2.306-.68-.433-.08-.893-.147-1.362-.19-.29-.03-.58-.05-.883-.067-.262-.017-.538-.028-.81-.028-2.72 0-7.41-.003-7.41-.003zM98.16 15.385v11.19h3.71s.248 0 .575-.01c.256-.008.562-.026.835-.04.763-.057 1.82-.163 2.876-.458.206-.058.413-.122.616-.194.828-.295 1.622-.726 2.24-1.333.49-.482.815-1.02 1.03-1.542.262-.64.354-1.253.392-1.687.034-.387.032-.633.032-.633s.008-.185-.008-.475c-.026-.488-.127-1.28-.51-2.043-.187-.366-.44-.718-.786-1.06-.417-.41-.923-.727-1.468-.968-1.045-.46-2.24-.644-3.247-.71-.438-.03-.837-.037-1.177-.037h-5.11z" ></path> <path d="M90.413 8.632v43.253h16.283s7.94.22 12.324-4.166c3.568-3.568 3.312-7.697 3.312-7.697s.257-4.31-3.047-7.616c-2.815-2.814-6.41-3.564-6.41-3.564s1.624-.762 2.872-2.01c.584-.585 2.662-2.462 2.662-7.018 0-4.59-3.057-7.23-3.057-7.23s-3.345-3.954-10.9-3.954h-14.04v.002zM73.673.21h63.817v60.058H73.672V.21zM24.625 33.33V45.13h7.663s.153-.004.404-.014c.26-.01.623-.023 1.065-.06.835-.078 1.928-.23 2.99-.59.963-.324 1.9-.81 2.614-1.526.277-.275.505-.562.687-.852.602-.946.753-1.91.787-2.455.018-.236.016-.375.016-.375s.004-.106 0-.29c-.008-.228-.036-.67-.157-1.142-.144-.56-.414-1.21-.895-1.803-.09-.113-.19-.226-.297-.333-.21-.21-.437-.414-.687-.598-.42-.308-.9-.572-1.42-.798-.688-.297-1.458-.52-2.306-.68-.433-.08-.892-.147-1.362-.19-.29-.03-.58-.05-.883-.067-.262-.017-.538-.028-.81-.028-2.718 0-7.407-.003-7.407-.003zM24.625 15.385v11.19h3.71s.248 0 .575-.01c.257-.008.562-.026.834-.04.763-.057 1.82-.163 2.876-.458.206-.058.413-.122.616-.194.828-.295 1.622-.726 2.24-1.333.49-.482.814-1.02 1.028-1.542.263-.64.355-1.253.393-1.687.034-.387.032-.633.032-.633s.007-.185-.008-.475c-.026-.488-.128-1.28-.51-2.043-.187-.366-.44-.718-.786-1.06-.417-.41-.923-.727-1.468-.968-1.044-.46-2.24-.644-3.247-.71-.437-.03-.836-.037-1.176-.037h-5.11z" ></path> <path d="M16.878 8.632v43.253H33.16s7.94.22 12.324-4.166c3.57-3.568 3.312-7.697 3.312-7.697s.258-4.31-3.046-7.616c-2.815-2.814-6.41-3.564-6.41-3.564s1.625-.762 2.872-2.01c.583-.585 2.662-2.462 2.662-7.018 0-4.59-3.055-7.23-3.055-7.23S38.473 8.63 30.917 8.63h-14.04v.002zM.138.21h63.816v60.058H.137V.21z" ></path> </g></svg></span ></span> </div></div><script type="text/javascript" src="https://news.files.bbci.co.uk/include/idt2/static/js/table.fa9ddcac.js"></script><script type="text/javascript">IDT.init({graphicUUID: "41a6ad82-8bad-482e-9645-301af4a8e857"});</script>`;

const vjInclude = `<script>window.vjConfigObject=window.vjConfigObject ||{}; window.vjConfigObject["newsspec-19077-brexit-glossary-app"]={js: true, output:{wrapper: "embed"}, name: "newsspec-19077-brexit-glossary", version: "1.2.16", urlToOutputDir: "https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary", assetsPath: "https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary/assets/app-project-assets", includeName: "app", language: "english", textDirection: "ltr", serviceName: "news", serviceNameNative: "News", vocab:{"jargon-term-button-1": "Brexit day", "jargon-term-button-2": "Customs plan", "jargon-term-button-3": "Divorce bill", "jargon-term-button-4": "Settled status", "jargon-term-button-5": "Transition period", "jargon-term-button-6": "WTO rules", "reset-button-text": "Reset", "core-content": "Please upgrade your browser", title: "Your guide to Brexit jargon", cta: "Use the list below or select a button", "lookup-label": "Enter the word or phrase you are looking for", "lookup-placeholder": "e.g. Brexit", "search-error": "No terms found.", "lookup-screenreader-submit": "Search", "search-screenreader-autosuggest-help": "results are available, use up and down arrow keys to navigate."}, outputs: [{wrapper: "embed"},{wrapper: "core"},{wrapper: "envelope"},{wrapper: "amp"},{wrapper: "full-width"},{wrapper: "news-app"},{wrapper: "syndication"},{wrapper: "facebook", height: 960, withMargins: "yes"},{wrapper: "applenews", photoCaption: "", photoURL: "", hyperlinkCallToAction: "Click or tap here to see interactive content"}], autoFixLintingErrors: false, failFast: false, includePath:{responsive: true, newsapps: true, "app-image": "https://placehold.it/640x360", "app-clickable": true, "amp-clickable": true, "amp-image-height": 360, "amp-image-width": 640, "amp-image": "https://placehold.it/640x360"}, languages: ["english"], uncompressedAppBudget: "(1024 * 1000) * 0.5", shadowDom: true, projectNamespace: "newsspec-19077-brexit-glossary", outputDir: "include/newsspec/19077-brexit-glossary", pathToWrapperAssets: "https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary/assets/embed", pathToInclude: "https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary/english/app/embed", pathToWrapperAssetsToInclude: "https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary/english/app/embed"};</script><link rel="stylesheet" href="https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary/assets/embed/css/inline.css"/><div id="responsive-embed-newsspec-19077-brexit-glossary-app" class="bbc-news-vj-embed-wrapper"> <div id="responsive-embed-newsspec-19077-brexit-glossary-app-core-content"> <div class="brexit-glossary"> <div class="gel-wrap"> <div class="gel-layout"> <div class="gel-layout__item gel-1/1" id="core-content"> <p>Please upgrade your browser</p></div></div></div><div class="gel-wrap"> <div class="gel-layout"> <div class="gel-layout__item gel-1/1" id="full-experience" style="display: none" > <img class="brexit-logo" alt="" src="https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary/assets/app-project-assets/brexit_logo--small.png"/> <h2>Your guide to Brexit jargon</h2> <p class="cta">Use the list below or select a button</p><div class="input-form"></div><div class="input-form__buttons"></div><div class="results-view"></div></div></div></div></div></div></div><style id="responsive-embed-newsspec-19077-brexit-glossary-app-inline-css"> false</style><script>(function(){function cutsTheMustard(){return true;}if (cutsTheMustard()){function initEmbed(){require([ "https://news.files.bbci.co.uk/include/newsspec/19077-brexit-glossary/assets/embed/js/embed-init.js?v=1.2.16"], function(initFullFatApplication){initFullFatApplication( vjConfigObject["newsspec-19077-brexit-glossary-app"] );});}if (typeof require==="undefined"){var headTag=document.getElementsByTagName("head")[0], requireTag=document.createElement("script"); requireTag.type="text/javascript"; requireTag.src="https://news.files.bbci.co.uk/include/vjassets/js/vendor/require-2.1.20b.min.js"; requireTag.onload=initEmbed; headTag.appendChild(requireTag);}else{initEmbed();}}else if (window.require){require(["istats-1"], function(istats){istats.log("browser does not cut the mustard", "newsspec-nonuser");});}})();</script>`;

storiesOf('Components|Include', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Visual Journalism Include',
    () => {
      return <Include html={vjInclude} />;
    },
    { notes },
  );

storiesOf('Components|Include', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'IDT2 Include',
    () => {
      return <Include html={idt2Include} />;
    },
    { notes },
  );

storiesOf('Components|Include', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'IDT1 Include',
    () => {
      return <Include html={idt1Include} requireJsSrc={requireJsSrc} />;
    },
    { notes },
  );
