import { z } from 'zod';

export const calendarSchema = z.object({
	grantId: z.string().optional().describe('The unique identifier for the grant associated with this calendar.'),
	description: z.string().optional().nullable().describe('A brief description of the calendar. Can be null if no description is set.'),
	id: z.string().optional().describe('A unique identifier for the calendar.'),
	isPrimary: z.boolean().optional().describe('Indicates whether this is the primary calendar for the user.'),
	name: z.string().describe('The name of the calendar.'),
	object: z.literal('calendar').optional().describe('The type of object, always set to "calendar" for calendar objects.'),
	readOnly: z.boolean().optional().describe('Indicates whether the calendar is read-only.'),
	timezone: z.string().optional().describe('The timezone in which the calendar operates, specified as an IANA timezone string.'),
	hexColor: z.string().optional().describe('The hexadecimal color code associated with the calendar.'),
	hexForegroundColor: z.string().optional().describe('The hexadecimal foreground color code for text displayed on the calendar.'),
	isOwnedByUser: z.boolean().optional().describe('Indicates whether the calendar is owned by the current user.'),
	location: z.string().optional().describe('The physical location associated with the calendar, if specified.')
});

export const calendarEventIdSchema = z.object({
	eventId: z.string().describe('A unique identifier for the event.'),
	calendarId: z.string().describe('The ID of the calendar to which this event belongs.')
});

export const calendarNamesSchema = z.object({
	calendarNames: z.array(z.string()).describe('The list of calendar names to filter by (optional)')
});

export const dateTimeStringSchema = z.object({
	dateTimeString: z.string().describe('A date and time string with a fixed UTC offset, supporting ISO 8601, natural language expressions like “tomorrow at 7am,” “next Friday,” and date ranges, without reliance on timezone names like America/Vancouver.')
});


// TypeScript type definitions
export interface TypeCalendar extends z.infer<typeof calendarSchema> {}

export type TypeCalendarEventId = z.infer<typeof calendarEventIdSchema>;
export type TypeCalendarNames = z.infer<typeof calendarNamesSchema>;
export type TypeDateTimeString = z.infer<typeof dateTimeStringSchema>;

