import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

// позволяет переиспользовать другие селекторы, которые у нас уже есть
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
