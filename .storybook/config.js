import { configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

addDecorator(withKnobs);
addDecorator(withNotes);

const loadStories = () => {
  const requireContext = require.context(
    /* directory */ '../components/',
    /* useSubdirectories */ true,
    /* regExp */ /stories\.js$/
  );
  requireContext.keys().forEach(requireContext);
};

configure(loadStories, module);