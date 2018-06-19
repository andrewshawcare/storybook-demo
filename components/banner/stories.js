import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';
import { text } from '@storybook/addon-knobs';
import Banner from './index.js';
import notes from './README.md';
import results from '../../.test-results.json';

const componentName = 'Banner';
const storyParameters = { notes: { markdown: notes } };

storiesOf(componentName, module)
  .addDecorator(withTests({ results })(componentName))
  .add('with a message and an action', () => Banner({
      message: text('Message', 'Create your account to unlock benefits'),
      actions: [
        {
          name: text('Action name', 'Get started now'),
          onAction: action('onAction')
        }
      ]
  }), storyParameters);