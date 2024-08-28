import { type ActionInterface } from '@dmitryrechkin/foundation-core';
import { type TypeCalendar, type TypeCalendarNames } from '../Type/Calendar';

export interface GetCalendarsActionInterface extends ActionInterface<TypeCalendarNames, TypeCalendar[]> {}
