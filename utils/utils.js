import fs from 'fs';

export const sleep = (seconds) => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const parseFile = (fileName) =>
  fs
    .readFileSync(fileName, 'utf8')
    .split('\n')
    .map((str) => str.trim())
    .filter((str) => str.length > 10);

export const randomValueFromInterval = (min, max) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
};
