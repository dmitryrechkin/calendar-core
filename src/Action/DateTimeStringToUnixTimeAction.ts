import * as chrono from 'chrono-node';
import { type DateTimeStringToUnixTimeActionInterface } from './DateTimeStringToUnixTimeActionInterface';
import { type TypeResponse } from '@dmitryrechkin/foundation-core';
import { ResponseHelper } from '@dmitryrechkin/foundation-core';
import { EnumErrorCode } from '../Type/ErrorCode';
import { type TypeDateTimeString } from '../Type/Calendar';

export class DateTimeStringToUnixTimeAction implements DateTimeStringToUnixTimeActionInterface
{
	/**
	 * Converts a date time string to a Unix time.
	 *
	 * @param {TypeDateTimeString} dateTimeString - The date time string to convert.
	 * @returns {TypeResponse<number>} - The Unix time.
	 */
	public async execute(payload: TypeDateTimeString): Promise<TypeResponse<number>>
	{
		const { dateTimeString } = payload;
		console.log('Converting date time string to Unix time:', dateTimeString);

		try
		{
			const date = chrono.parseDate(dateTimeString)!;
			const unixTime = date.getTime() / 1000;

			console.log('Converted date time string to Unix time:', unixTime);

			return { success: true, data: unixTime };
		}
		catch (error)
		{
			console.error('Failed to convert date time string to Unix time:', error);
			return ResponseHelper.createErrorResponse(EnumErrorCode.INVALID_DATE_TIME_STRING, 'Invalid date time string');
		}
	}
}
