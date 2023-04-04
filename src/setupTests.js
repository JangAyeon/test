// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// 서버를 mock 하기 위한 서버 세팅
import { server } from './mocks/server.js'
// 1. Establish API mocking before all tests.

// 2. Reset any request handlers that we may add during the tests,
// so they don't affect other tests.


// 3. Clean up after the tests are finished.
