import { z } from 'zod';
import { ActionTool } from '@dmitryrechkin/foundation-core';
import { type GetCalendarsActionInterface } from '../Interface/GetCalendarsActionInterface';
import { calendarNamesSchema, calendarSchema } from '../Type/Calendar';

const calendarsSchema = z.array(calendarSchema).describe('The list of calendars.');

/**
 * The tool for finding calendars by their names.
 */
export class GetCalendarsTool extends ActionTool<typeof calendarNamesSchema, typeof calendarsSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {GetCalendarsActionInterface} action - The service to use.
	 */
	constructor(action: GetCalendarsActionInterface)
	{
		super(
			'getCalendars',
			'Finds calendars by their names, validating the input data and ensuring the response conforms to the expected structure.',
			calendarNamesSchema,
			calendarsSchema,
			action
		);
	}
}

