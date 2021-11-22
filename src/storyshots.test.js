import initStoryshots, {
  multiSnapshotWithOptions, Stories2SnapsConverter,
} from "@storybook/addon-storyshots";

import { jest } from '@jest/globals';

//  This creates a global mock to avoid the error in the tests:
//  --- TypeError: Cannot read property 'STORYBOOK_HOOKS_CONTEXT' of undefined ---
//  https://github.com/storybookjs/storybook/issues/8083#issuecomment-533184737
jest.mock('global', () =>
  Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: '' } })
);

initStoryshots({
  test: multiSnapshotWithOptions({}),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotExtension: '.snap.js',
  }),
});
