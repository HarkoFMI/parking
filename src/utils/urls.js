import queryString from 'query-string';

export const openInNewTab = url => {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: url
  }).click();
};

export const stringifyParams = params => queryString.stringify(params);
export const parseParams = search => queryString.parse(search);
