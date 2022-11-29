import { padZeros } from './qtools';
import { describe, expect, it } from 'vitest';

describe('test that surround() is correctly implemented', () => {
	it('returns various brackets correctly', () => {
		expect(padZeros(1,1)).toBe('1');
	});
});