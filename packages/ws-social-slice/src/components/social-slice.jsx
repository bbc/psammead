import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './social-icons';
// import SliceHeading from 'bbc-morph-slice-heading';
import GetInTouch from './get-in-touch';
import SocialApp from './social-app';
import NewsDailyNewsletter from './news-daily';
import classNames from 'classnames';
import get from 'lodash/get';

export default class SocialSlice extends React.Component {

    componentWillMount() {
        if (!this.props.config.body.findUsHere) {
            throw Error (500, 'invalid config');
        }
    }

    getInTouchLinks(socialConfig) {
        var getInTouchProps = socialConfig.getInTouch && socialConfig.getInTouch.getInTouchEnabled
            ? socialConfig.getInTouch : null;

        return getInTouchProps
            ? <GetInTouch {...getInTouchProps}/> : null;
    }

    getMobileAppLink(socialConfig) {
        var appLinkProps = {};

        if (get(socialConfig, 'mobileApp.mobileAppEnabled')) {
            appLinkProps = socialConfig.mobileApp;
            appLinkProps.serviceName = this.props.serviceName;

            return <SocialApp {...appLinkProps}/>;
        }

        return null;
    }

    getNewsDailyLink(socialConfig) {
        var newsletterProps = {};

        if (get(socialConfig, 'newsDailyNewsletter.newsDailyNewsletterEnabled')) {
            newsletterProps = socialConfig.newsDailyNewsletter;
            newsletterProps.serviceName = this.props.serviceName;

            return <NewsDailyNewsletter {...newsletterProps}/>;
        }

        return null;
    }

    render() {
        const socialConfig = this.props.config.body,
            findUsHere = socialConfig.findUsHere,
            newsLetterLink = this.getNewsDailyLink(socialConfig),
            appLink = this.getMobileAppLink(socialConfig),
            getInTouchLinks = this.getInTouchLinks(socialConfig);

        const headingProps = {
            istatsSliceIdentifier: 'social-slice',
            sectionName: 'social-slice',
            sliceHeadingId: 'social-slice__title',
            titleText: socialConfig.findUsHere.findUsHereTitle
        };

        return (
            <div className={classNames('ws-c-social-slice', 'no-touch', 'gs-u-box-size', 'b-pw-1280')}
                role="region"
                aria-labelledby="social-slice__title"
                data-render-date={Date.now()}
            >
                <div className="gel-wrap">
                    {/*<SliceHeading {...headingProps} />*/}
                    <div className="ws-core-social-slice__wrapper gel-layout">
                        <SocialIcons {...findUsHere}/>
                        <div className="ws-c-social-slice__secondary-links gel-layout gel-layout__item">
                            {newsLetterLink}
                            {appLink}
                            {getInTouchLinks}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SocialSlice.displayName = 'ws-social-slice';

SocialSlice.propTypes = {
    serviceName: PropTypes.string,
    edition: PropTypes.string,
    config: PropTypes.object
};
