import { surround } from './apptools';
import { describe, expect, it } from 'vitest';

describe('test that surround() is correctly implemented', () => {
	it('returns various brackets correctly', () => {
		expect(surround('test', '[]')).toBe('[test]');
		expect(surround('test', '()')).toBe('(test)');
		expect(surround('test', '{}')).toBe('{test}');
	});
	it('returns double characters correctly', () => {
		expect(surround('test', '**')).toBe('*test*');
		expect(surround('test', '//')).toBe('/test/');
	});
	it('fails gracefully on wrong number of characters', () => {
		expect(surround('test', '---')).toBe('test');
		expect(surround('test', 'ksdjfaliwejfwiefj')).toBe('test');
		expect(surround('test', 'x')).toBe('test');
	});
	it('fails gracefully on empty values', () => {
		expect(surround('test', '')).toBe('test');
		expect(surround('', '')).toBe('');
		expect(surround('', '[]')).toBe('[]');
	});
});