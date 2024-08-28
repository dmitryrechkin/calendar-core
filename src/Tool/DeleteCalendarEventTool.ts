import { z } from 'zod';
import { ActionTool } from '@dmitryrechkin/foundation-core';
import { type DeleteCalendarEventActionInterface } from '../Interface/DeleteCalendarEventActionInterface';
import { calendarEventIdSchema } from '../Type/Calendar';

const undefinedSchema = z.undefined().describe('The response is always undefined, as long as success is true it went well.');

/**
 * The tool for deleting or canceling calendar events.
 */
export class DeleteCalendarEventTool extends ActionTool<typeof calendarEventIdSchema, typeof undefinedSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {DeleteCalendarEventActionInterface} action - The service to use.
	 */
	constructor(action: DeleteCalendarEventActionInterface)
	{
		super(
			'deleteCalendarEvent',
			'Executes the process of deleting or canceling a calendar event, validating the input data and ensuring the response conforms to the expected structure.',
			calendarEventIdSchema,
			undefinedSchema,
			action
		);
	}
}
