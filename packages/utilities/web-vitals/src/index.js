import fetch from 'cross-fetch';
import { useEffect } from 'react';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';
import useEvent from './use-event';

const noOp = () => {};

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

const sendBeacon = (rawBeacon, reportingEndpoint) => {
  const beacon = JSON.stringify(rawBeacon);
  if (navigator.sendBeacon) {
    return navigator.sendBeacon(reportingEndpoint, beacon);
  }
  return fetch(reportingEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/reports+json' },
    body: beacon,
  });
};

const useWebVitals = ({
  enabled,
  reportingEndpoint,
  loggerCallback = noOp,
}) => {
  let pageLoadTime;
  const sendVitals = async () => {
    const pageExitTime = Date.now();
    const pageAge = pageExitTime - pageLoadTime;

    const beacon = [{ ...webVitalsBase, age: pageAge, body: { ...vitals } }];

    try {
      await sendBeacon(beacon, reportingEndpoint);
    } catch (error) {
      loggerCallback(error);
    }
  };

  useEvent('pagehide', enabled ? sendVitals : noOp);

  useEffect(() => {
    pageLoadTime = Date.now();
    setCurrentUrl();
    getCLS(updateWebVitals);
    getFID(updateWebVitals);
    getLCP(updateWebVitals);
    getFCP(updateWebVitals);
    getTTFB(updateWebVitals);
  }, []);

  return null;
};

export default useWebVitals;
