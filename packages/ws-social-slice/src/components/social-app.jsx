import React from 'react';
import PropTypes from 'prop-types';
import MobileAppIcon from './sub-components/mobile-app-icon';
import classNames from 'classnames';

export default function SocialApp(props) {
    const appLinkClasses = classNames(
            'ws-c-social-app',
            'ws-c-social-secondary-component',
            'gel-brevier',
            'gel-layout__item',
            'gs-u-pb++@m',
            'gs-o-faux-block-link'
        );

    return (
        <div className={appLinkClasses}>
            <h3 className="gs-u-vh">{props.mobileAppTitle}</h3>
            <MobileAppIcon serviceName={props.serviceName} />
            <a href={props.mobileAppUrl} className="ws-c-social-app__text nw-o-link gel-brevier-bold gs-o-faux-block-link__overlay-link">
                {props.mobileAppLinkText}
            </a>
        </div>
    );
}

SocialApp.displayName = 'social-app';

SocialApp.propTypes = {
    mobileAppUrl: PropTypes.string,
    mobileAppLinkText: PropTypes.string,
    mobileAppTitle: PropTypes.string,
    serviceName: PropTypes.string
};
