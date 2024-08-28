import { z } from 'zod';
import { ActionTool } from '@dmitryrechkin/foundation-core';
import { DateTimeStringToUnixTimeAction } from '../Action/DateTimeStringToUnixTimeAction';
import { dateTimeStringSchema } from '../Type/Calendar';
import { type DateTimeStringToUnixTimeActionInterface } from '../Action/DateTimeStringToUnixTimeActionInterface';

const numberSchema = z.number().describe('Unix time in seconds');

/**
 * The tool for converting a date and time string to Unix time.
 */
export class DateTimeStringToUnixTimeTool extends ActionTool<typeof dateTimeStringSchema, typeof numberSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {DateTimeStringToUnixTimeActionInterface} action - The service to use.
	 */
	constructor(action: DateTimeStringToUnixTimeActionInterface = new DateTimeStringToUnixTimeAction())
	{
		super(
			'dateTimeStringToUnixTime',
			'Converts a date and time string in various formats, including ISO 8601, natural language expressions (e.g., "Tomorrow at 7am", "Next Friday"), and specific date ranges (e.g., "17 August 2013 - 19 August 2013") to Unix epoch time in seconds.',
			dateTimeStringSchema,
			numberSchema,
			action
		);
	}
}

