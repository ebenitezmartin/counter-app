//No lo vamos a utilizar
// import '@testing-library/jest-dom/extend-expect';
//Enzyme is a JavaScript Testing utility for React 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Para crear las snapshoots de como se encuentra mi componente renderizado en test/__snapshots__
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer( { mode: 'deep' } ) );