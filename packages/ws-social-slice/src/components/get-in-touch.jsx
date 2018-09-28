import React from 'react';
import PropTypes from 'prop-types';
import GetInTouchPlatform from './sub-components/get-in-touch-platform';
import classNames from 'classnames';

export default class GetInTouch extends React.Component {

    getPlatformListItem(platform, index) {
        return (
            <li className={classNames('ws-c-get-in-touch__item', `ws-c-get-in-touch__item--${index}`)} key={index}>
                <GetInTouchPlatform platform={platform} />
            </li>
        );
    }

    render() {
        const getInTouchClasses = classNames(
                'ws-c-get-in-touch',
                'ws-c-social-secondary-component',
                'gel-layout__item',
                'gel-brevier',
                'gs-u-pb++@m'
            );

        return (
            <div className={getInTouchClasses}>
                <h3 className="gs-u-vh">
                    {this.props.getInTouchTitle}
                </h3>
                <ul className="ws-c-get-in-touch__list">
                    {this.props.getInTouchPlatforms.map(this.getPlatformListItem)}
                </ul>
            </div>
        );
    }
}

GetInTouch.displayName = 'get-in-touch';

GetInTouch.propTypes = {
    getInTouchTitle: PropTypes.string,
    getInTouchPlatforms: PropTypes.array
};
