import { z } from 'zod';

export const calendarOpenHoursSchema = z.object({
	days: z.array(z.number()).describe('The days of the week that the open hours settings are applied to. Sunday corresponds to 0, and Saturday corresponds to 6.'),
	timezone: z.string().describe('The calendar\'s time zone as an IANA-formatted string.'),
	start: z.string().describe('The start time for the open hours settings, in 24-hour time format.'),
	end: z.string().describe('The end time for the open hours settings, in 24-hour time format.'),
	exdates: z.array(z.string()).optional().describe('A list of dates that are excluded from the account\'s open hours, in YYYY-MM-DD format.')
});

export const calendarBufferBetweenEventsSchema = z.object({
	before: z.number().min(0).max(120).describe('The amount of buffer time to add before meetings, in increments of five minutes. This value must be between 0 and 120, and must be divisible by 5.'),
	after: z.number().min(0).max(120).describe('The amount of buffer time to add after meetings, in increments of five minutes. This value must be between 0 and 120, and must be divisible by 5.')
});

export const calendarAvailabilityParticipantSchema = z.object({
	email: z.string().email().describe('The email address of the participant.'),
	calendarIds: z.array(z.string()).optional().describe('The calendar IDs associated with the participant.'),
	openHours: z.array(calendarOpenHoursSchema).optional().describe('The open hours for the participant.')
});

export const calendarAvailabilityRulesSchema = z.object({
	availabilityMethod: z.enum(['collective', 'max-fairness', 'max-availability']).describe('The method used to determine availability.'),
	buffer: calendarBufferBetweenEventsSchema.optional().describe('The buffer time added around existing meetings, in minutes.'),
	defaultOpenHours: z.array(calendarOpenHoursSchema).optional().describe('A default set of open hours to apply to all participants.'),
	roundRobinGroupId: z.string().optional().describe('The ID on events that are considered when calculating the order of round-robin participants.')
});

export const calendarAvailabilitySchema = z.object({
	participants: z.array(calendarAvailabilityParticipantSchema).describe('A list of participants that you want to get availability information for.'),
	startTime: z.number().describe('The beginning of the time slot to check availability for, in Unix epoch format. Must be a multiple of 5 minutes.'),
	endTime: z.number().describe('The end of the time slot to check availability for, in Unix epoch format. Must be a multiple of 5 minutes.'),
	durationMinutes: z.number().describe('The duration of each time slot, in minutes. Must be a multiple of 5 minutes.'),
	intervalMinutes: z.number().optional().describe('A time slot is generated every interval_minutes (for example, every 30 minutes) and returns only slots when all participants are free. Must be a multiple of 5 minutes.'),
	roundTo: z.number().optional().describe('Rounds each time slot to the nearest round_to value. For example, if a time slot starts at 9:05 a.m. and round_to is set to 15, it rounds to 9:15 a.m. Must be a multiple of 5 minutes. Default: 15'),
	availabilityRules: calendarAvailabilityRulesSchema.optional().describe('The rules for determining availability, including buffer times and open hours.')
});

export const calendarAvailabilityTimeSlotSchema = z.object({
	calendarId: z.string().optional().describe('The calendar ID of the participant who is available in this time slot.'),
	emails: z.array(z.string()).describe('An array of emails of the participants available in this time slot.'),
	startTime: z.number().describe('The start of a time slot, in Unix epoch format.'),
	endTime: z.number().describe('The end of a time slot, in Unix epoch format.')
});

export const calendarAvailabilityInfoSchema = z.object({
	order: z.array(z.string()).describe('(Round-robin events only) The order of participants in line to attend the proposed meeting.'),
	timeSlots: z.array(calendarAvailabilityTimeSlotSchema).describe('An array of the available time slots when you can create a meeting using the requested settings.')
});

export interface TypeCalendarOpenHours extends z.infer<typeof calendarOpenHoursSchema> {}
export interface TypeCalendarBufferBetweenEvents extends z.infer<typeof calendarBufferBetweenEventsSchema> {}
export interface TypeCalendarAvailabilityParticipant extends z.infer<typeof calendarAvailabilityParticipantSchema> {}
export interface TypeCalendarAvailabilityRules extends z.infer<typeof calendarAvailabilityRulesSchema> {}
export interface TypeCalendarAvailability extends z.infer<typeof calendarAvailabilitySchema> {}
export interface TypeCalendarAvailabilityTimeSlot extends z.infer<typeof calendarAvailabilityTimeSlotSchema> {}
export interface TypeCalendarAvailabilityInfo extends z.infer<typeof calendarAvailabilityInfoSchema> {}
