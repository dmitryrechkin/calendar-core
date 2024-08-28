import { type ActionInterface } from '@dmitryrechkin/foundation-core';
import { type TypeCalendarAvailabilityTimeSlot } from '../Type/CalendarAvailability';
import { type TypeCalendarEvent } from '../Type/CalendarEvent';

export interface GetCalendarEventsActionInterface extends ActionInterface<TypeCalendarAvailabilityTimeSlot, TypeCalendarEvent[]> {}
