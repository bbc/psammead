import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkPattern = /(.*){(.+?)}(.*)/;

export default function GetInTouchPlatform(props) {
    var linkPatternMatch = [];

    const linkClasses = classNames(
        'gel-brevier-bold',
        'nw-o-link'
    );

    if (!props.platform.getInTouchPlatformURL) {
        return <p>{props.platform.getInTouchPlatformText}</p>;
    }

    linkPatternMatch = linkPattern.exec(props.platform.getInTouchPlatformText);
    if (linkPatternMatch) {
        return (
            <p>
                {linkPatternMatch[1] ? linkPatternMatch[1] : null}
                <a href={props.platform.getInTouchPlatformURL} className={linkClasses}>
                    {linkPatternMatch[2]}
                </a>
                {linkPatternMatch[3] ? linkPatternMatch[3] : null}
            </p>
        );
    }

    return (
        <a href={props.platform.getInTouchPlatformURL} className={linkClasses}>
            {props.platform.getInTouchPlatformText}
        </a>
    );
}

GetInTouchPlatform.displayName = 'get-in-touch-platform';

GetInTouchPlatform.propTypes = {
    platform: PropTypes.object.isRequired
};
