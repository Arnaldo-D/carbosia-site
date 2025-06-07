import React from 'react';
import { render } from '@testing-library/react';
import AppProviders from './components/AppProviders';
import { useConfig } from 'wagmi';

function Check() {
  useConfig();
  return null;
}

test('useConfig does not throw', () => {
  expect(() =>
    render(
      <AppProviders>
        <Check />
      </AppProviders>
    )
  ).not.toThrow();
});
