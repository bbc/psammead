import React from 'react';
import PropTypes from 'prop-types';
import NewsDailyNewsletterIcon from './sub-components/news-daily-icon';
import classNames from 'classnames';

export default function NewsDailyNewsletter(props) {
    const newsLeterClasses = classNames(
            'ws-c-news-daily',
            'ws-c-social-secondary-component',
            'gel-brevier',
            'gel-layout__item',
            'gs-u-pb++@m',
            'gs-o-faux-block-link'
        );

    return (
        <div className={newsLeterClasses}>
            <h3 className="gs-u-vh">{props.newsDailyNewsletterTitle}</h3>
            <NewsDailyNewsletterIcon serviceName={props.serviceName} />
            <a href={props.newsDailyNewsletterUrl} className="ws-c-news-daily__text nw-o-link gel-brevier-bold gs-o-faux-block-link__overlay-link">
                {props.newsDailyNewsletterLinkText}
            </a>
        </div>
    );
}

NewsDailyNewsletter.displayName = 'news-daily';

NewsDailyNewsletter.propTypes = {
    newsDailyNewsletterUrl: PropTypes.string,
    newsDailyNewsletterLinkText: PropTypes.string,
    newsDailyNewsletterTitle: PropTypes.string,
    serviceName: PropTypes.string
};
