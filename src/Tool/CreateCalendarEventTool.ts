import { ActionTool } from '@dmitryrechkin/foundation-core';
import { type CreateCalendarEventActionInterface } from '../Interface/CreateCalendarEventActionInterface';
import { calendarEventSchema } from '../Type/CalendarEvent';

/**
 * The tool for creating calendar events.
 */
export class CreateCalendarEventTool extends ActionTool<typeof calendarEventSchema, typeof calendarEventSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {CreateCalendarEventActionInterface} action - The service to use.
	 */
	constructor(action: CreateCalendarEventActionInterface)
	{
		super(
			'createCalendarEvent',
			'Executes the process of creating a calendar event, validating the input data and ensuring the response conforms to the expected structure.',
			calendarEventSchema,
			calendarEventSchema,
			action
		);
	}
}
