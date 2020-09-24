import { useEffect } from 'react';
import useEvent from '@bbc/use-event';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

const webVitalsBase = {
  age: 0,
  type: 'web-vitals',
  url: 'current-page-url',
};

const vitals = { cls: null, fid: null, lcp: null, fcp: null, ttfb: null };

const updateWebVitals = ({ name, value }) => {
  const vitalName = name.toLowerCase();
  vitals[vitalName] = value;
};

const setCurrentUrl = () => {
  webVitalsBase.url = window.location.href;
};

const sendBeacon = async (rawBeacon, reportingEndpoint) => {
  const beacon = JSON.stringify(rawBeacon);
  if (navigator.sendBeacon) {
    await navigator.sendBeacon(reportingEndpoint, beacon);
  } else {
    await fetch(reportingEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/reports+json' },
      body: beacon,
    });
  }
};

const useWebVitals = ({ enabled, reportingEndpoint, loggerCallback }) => {
  let pageLoadTime;
  const sendVitals = async event => {
    event.preventDefault();
    const pageExitTime = new Date();
    const pageAge = pageExitTime - pageLoadTime;

    const beacon = [{ ...webVitalsBase, age: pageAge, body: { ...vitals } }];

    try {
      await sendBeacon(beacon, reportingEndpoint);
    } catch (error) {
      loggerCallback('web_vitals_send_error', {
        ...error,
      });
    }
  };

  if (enabled) {
    useEvent('beforeunload', sendVitals);

    useEffect(() => {
      pageLoadTime = new Date();
      setCurrentUrl();
      getCLS(updateWebVitals);
      getFID(updateWebVitals);
      getLCP(updateWebVitals);
      getFCP(updateWebVitals);
      getTTFB(updateWebVitals);
    }, []);
  }

  return null;
};

export default useWebVitals;
