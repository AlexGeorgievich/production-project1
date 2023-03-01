import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoryProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    // селектор возвращает тот участок state, что ожидаем, DeepPartial позволяет работать с частью state
    // позволяет игнорировать все поля, объявить те, что необходимы
    test('schould return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
