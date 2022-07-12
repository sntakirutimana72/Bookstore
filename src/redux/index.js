import { configureStore } from '@reduxjs/toolkit';
import reducer from './configureStore';
import preloadedState from './initialData';

export default configureStore({ reducer, preloadedState });
