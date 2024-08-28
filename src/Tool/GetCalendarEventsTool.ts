import { z } from 'zod';
import { ActionTool } from '@dmitryrechkin/foundation-core';
import { type GetCalendarEventsActionInterface } from '../Interface/GetCalendarEventsActionInterface';
import { calendarAvailabilityTimeSlotSchema } from '../Type/CalendarAvailability';
import { calendarEventSchema } from '../Type/CalendarEvent';

const calendarEventsSchema = z.array(calendarEventSchema).describe('The list of calendar events for the given time slot.');

/**
 * The tool for finding calendar events for a given time slot.
 */
export class GetCalendarEventsTool extends ActionTool<typeof calendarAvailabilityTimeSlotSchema, typeof calendarEventsSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {GetCalendarsActionInterface} action - The service to use.
	 */
	constructor(action: GetCalendarEventsActionInterface)
	{
		super(
			'getCalendarEvents',
			'Finds calendar events for a given time slot, validating the input data and ensuring the response conforms to the expected structure.',
			calendarAvailabilityTimeSlotSchema,
			calendarEventsSchema,
			action
		);
	}
}

