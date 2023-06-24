import { DateTime } from 'luxon';

export type DateOnly = { at: DateTime; };
export type DateRange = { from: DateTime; to?: DateTime; };

export type ITimeLineItem = {
    title: string;
    location: string;
    content: string;
} & (DateOnly | DateRange);
