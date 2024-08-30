import { z } from 'zod';

export const calendarEventParticipantSchema = z.object({
	comment: z.string().optional().describe('A comment about the participant (for example, their nickname).'),
	email: z.string().email().describe('The participant\'s email address.'),
	name: z.string().optional().describe('The participant\'s full name.'),
	phoneNumber: z.string().optional().describe('The participant\'s phone number.'),
	status: z.enum(['yes', 'no', 'maybe', 'noreply']).optional().describe('The participant\'s attendance status.')
});

export const calendarEventResourceSchema = z.object({
	email: z.string().email().describe('The resource\'s email address.'),
	name: z.string().optional().describe('The resource\'s full name.')
});

export const calendarEventReminderOverrideSchema = z.object({
	reminderMinutes: z.number().describe('The number of minutes before the event start time when a user wants to receive a reminder for this event.'),
	reminderMethod: z.enum(['popup', 'email', 'display', 'sound']).describe('The method used to notify the end user about the event.')
});

export const calendarEventReminderSchema = z.object({
	useDefault: z.boolean().describe('Indicates whether to use the calendar\'s default reminders.'),
	overrides: z.array(calendarEventReminderOverrideSchema).optional().describe('Custom reminder settings, if any.')
});

export const calendarEventConferenceAutocreateSchema = z.object({
	// Define the autocreate settings here if necessary
});

export const calendarEventConferenceDetailsSchema = z.union([
	z.object({
		// google meet
		phone: z.array(z.string()).optional().describe('The phone number associated with the Google Meet conference.'),
		pin: z.string().optional().describe('The PIN associated with the Google Meet conference, if applicable.'),
		url: z.string().describe('The URL for the Google Meet conference.')
	}),
	z.object({
		// zoom meeting
		meetingCode: z.string().describe('A unique ID associated with the Zoom conference.'),
		password: z.string().optional().describe('The password for the Zoom conference, if applicable.'),
		url: z.string().describe('The URL for the Zoom conference.')
	}),
	z.object({
		// microsoft teams
		url: z.string().describe('The URL for the Microsoft Teams conference.')
	})
]).describe('Conference details for different providers');

export const calendarEventConferenceSchema = z.object({
	provider: z.enum(['Google Meet', 'Zoom Meeting', 'Microsoft Teams']).describe('The provider of the conference.')
}).and(
	z.union([
		z.object({
			autocreate: calendarEventConferenceAutocreateSchema,
			details: z.undefined()
		}),
		z.object({
			autocreate: z.undefined(),
			details: calendarEventConferenceDetailsSchema
		})
	])
).describe('An object that allows you to automatically create a conference or enter conferencing details manually.');

export const calendarEventWhenSchema = z.union([
	// Time Object
	z.object({
		// Time Object
		time: z.number().describe('The time that the meeting occurs, in Unix epoch format.'),
		timezone: z.string().optional().describe('The timezone of the event as an IANA-formatted string.')
	}),
	// Timespan Object
	z.object({
		// Timespan Object
		startTime: z.number().describe('The event\'s start time, in Unix epoch format.'),
		endTime: z.number().describe('The event\'s end time, in Unix epoch format.'),
		startTimezone: z.string().optional().nullable().describe('The timezone of the event\'s start time as an IANA-formatted string.'),
		endTimezone: z.string().optional().nullable().describe('The timezone of the event\'s end time as an IANA-formatted string.')
	}),
	// Date Object
	z.object({
		// Date Object
		date: z.string().describe('The date of the event, in ISO 8601 format.')
	}),
	// Datespan Object
	z.object({
		// Datespan Object
		startDate: z.string().describe('The event\'s start date, in ISO 8601 format.'),
		endDate: z.string().describe('The event\'s end date, in ISO 8601 format.')
	})
]).describe('An object that represents the time and duration of an event.');

export const calendarEventSchema = z.object({
	id: z.string().optional().describe('A unique identifier for the event.'),
	calendarId: z.string().describe('The ID of the calendar that the event belongs to.'),
	busy: z.boolean().describe('If true, shows the event\'s time block as "busy" on shared or public calendars.'),
	capacity: z.number().optional().describe('The maximum number of participants that may attend the event.'),
	conferencing: calendarEventConferenceSchema.optional().describe('An object that allows you to automatically create a conference or enter conferencing details manually.'),
	description: z.string().max(8192).optional().nullable().describe('A brief description of the event (for example, its agenda).'),
	hideParticipants: z.boolean().optional().describe('When true, hides the event\'s list of participants.'),
	location: z.string().max(255).optional().describe('The location of the event (for example, a physical address or the name of a meeting room).'),
	metadata: z.record(z.string(), z.string()).optional().describe('The metadata associated with the object.'),
	participants: z.array(calendarEventParticipantSchema).optional().describe('An array of participants or attendees for the event.'),
	resources: z.array(calendarEventResourceSchema).optional().describe('An array of resources for the event.'),
	recurrence: z.array(z.string()).optional().describe('An array of RRULE and EXDATE strings.'),
	reminders: calendarEventReminderSchema.optional().describe('A list of reminders to send for the event.'),
	title: z.string().max(1024).describe('The name of the event.'),
	visibility: z.enum(['public', 'private', 'default']).optional().describe('The event\'s visibility. If not defined, the calendar\'s default settings are used.'),
	when: calendarEventWhenSchema.describe('An object that represents the time and duration of an event.')
});

export interface TypeCalendarEventParticipant extends z.infer<typeof calendarEventParticipantSchema> {}
export interface TypeCalendarEventResource extends z.infer<typeof calendarEventResourceSchema> {}
export interface TypeCalendarEventReminderOverride extends z.infer<typeof calendarEventReminderOverrideSchema> {}
export interface TypeCalendarEventReminder extends z.infer<typeof calendarEventReminderSchema> {}
export interface TypeCalendarEventConferenceAutocreate extends z.infer<typeof calendarEventConferenceAutocreateSchema> {}
export interface TypeCalendarEvent extends z.infer<typeof calendarEventSchema> {}
