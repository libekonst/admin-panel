// Enzyme set up file that configures an Adapter for React 16.
// Create-react-app automatically picks up this file.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
