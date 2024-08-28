import { ActionTool } from '@dmitryrechkin/foundation-core';
import { type GetCalendarsAvailabilityActionInterface } from '../Interface/GetCalendarsAvailabilityActionInterface';
import { calendarAvailabilityInfoSchema, calendarAvailabilitySchema } from '../Type/CalendarAvailability';

/**
 * The tool for getting calendars availability.
 */
export class GetCalendarsAvailabilityTool extends ActionTool<typeof calendarAvailabilitySchema, typeof calendarAvailabilityInfoSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {GetCalendarsAvailabilityActionInterface} service - The service to use.
	 */
	constructor(service: GetCalendarsAvailabilityActionInterface)
	{
		super(
			'getCalendarsAvailability',
			'Evaluates the availability of calendars, it will return available time slots with start and end times in Unix time in seconds. If time slots match the requested duration, then it can be considered as available, otherwise alternative time slots can be suggested.',
			calendarAvailabilitySchema,
			calendarAvailabilityInfoSchema,
			service
		);
	}
}
