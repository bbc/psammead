import fetch from 'cross-fetch';
import { useEffect } from 'react';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';
import {
  useNetworkStatus,
  useHardwareConcurrency,
  useMemoryStatus,
} from 'react-adaptive-hooks';
import useEvent from './use-event';

const noOp = () => {};

const webVitalsBase = {
  age: 0,
  type: 'web-vitals',
  url: 'current-page-url',
};

const vitals = { cls: null, fid: null, lcp: null, fcp: null, ttfb: null };
const deviceMetrics = {
  device_mem: null,
  device_cpu: null,
  device_effective_connection: null,
};

const updateWebVitals = ({ name, value }) => {
  const vitalName = name.toLowerCase();
  vitals[vitalName] = value;
};

const updateDeviceMetrics = ({
  deviceMemory,
  numberOfLogicalProcessors,
  effectiveConnectionType,
}) => {
  deviceMetrics.device_mem = deviceMemory;
  deviceMetrics.device_cpu = numberOfLogicalProcessors;
  deviceMetrics.device_effective_connection = effectiveConnectionType;
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

const shouldSample = (sampleRate = 100) => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber <= sampleRate;
};

const useWebVitals = ({
  enabled,
  reportingEndpoint,
  loggerCallback = noOp,
  sampleRate,
}) => {
  let pageLoadTime;
  const { effectiveConnectionType } = useNetworkStatus();
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  const { deviceMemory } = useMemoryStatus();

  const sendVitals = async () => {
    const pageExitTime = Date.now();
    const pageAge = pageExitTime - pageLoadTime;

    const beacon = [
      { ...webVitalsBase, age: pageAge, body: { ...vitals, ...deviceMetrics } },
    ];

    try {
      if (shouldSample(sampleRate)) {
        await sendBeacon(beacon, reportingEndpoint);
      }
    } catch (error) {
      loggerCallback(error);
    }
  };

  useEvent('pagehide', enabled ? sendVitals : noOp);

  useEffect(() => {
    pageLoadTime = Date.now();
    setCurrentUrl();
    updateDeviceMetrics({
      effectiveConnectionType,
      numberOfLogicalProcessors,
      deviceMemory,
    });
    getCLS(updateWebVitals);
    getFID(updateWebVitals);
    getLCP(updateWebVitals);
    getFCP(updateWebVitals);
    getTTFB(updateWebVitals);
  }, []);

  return null;
};

export default useWebVitals;
