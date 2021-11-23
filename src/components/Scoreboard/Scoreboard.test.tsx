import { render } from '@testing-library/react';

import { Scoreboard } from './ScoreBoard';

it('Scoreboard renders correctly', () => {
  const { asFragment } = render(
    <Scoreboard
      time="000"
      levels={['beginner', 'intermediate', 'expert']}
      mines="010"
      onReset={() => null}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});