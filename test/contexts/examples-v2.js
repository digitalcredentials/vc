/*!
* Copyright (c) 2024 Digital Bazaar, Inc. All rights reserved.
*/
const contextUrl = 'https://www.w3.org/ns/credentials/examples/v2';
const context = {
  '@context': {
    '@vocab': 'https://www.w3.org/ns/credentials/examples#'
  }
};
export const constants = {CREDENTIALS_V2_EXAMPLE_CONTEXT_URL: contextUrl};
export const contexts = new Map([[contextUrl, context]]);
