import { type ActionInterface } from '@dmitryrechkin/foundation-core';
import { type TypeDateTimeString } from '../Type/Calendar';

/**
 * onverts a date time string to a Unix time.
 */
export interface DateTimeStringToUnixTimeActionInterface extends ActionInterface<TypeDateTimeString, number> {}

