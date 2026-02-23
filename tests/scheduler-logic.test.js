// tests/scheduler-logic.test.js
import { describe, it, expect } from 'vitest';
import { validateSchedule } from '../src/scheduler-logic.js';

describe('Scheduler Logic', () => {
  const fakeNow = new Date('2026-01-01T10:00:00Z');

  it('should successfully schedule a valid future message', () => {
    const futureDate = '2026-01-02T10:00:00Z'; // Un día después
    const result = validateSchedule('team@domain.com', 'Hello team', futureDate, fakeNow);
    
    expect(result.status).toBe('Scheduled');
    expect(result.recipient).toBe('team@domain.com');
  });

  it('should throw an error if the date is in the past', () => {
    const pastDate = '2025-12-31T10:00:00Z';
    expect(() => validateSchedule('team@domain.com', 'Hello', pastDate, fakeNow))
      .toThrowError('Schedule time must be in the future.');
  });

  it('should throw an error if the email is invalid', () => {
    expect(() => validateSchedule('invalid-email', 'Hello', '2026-01-02T10:00', fakeNow))
      .toThrowError('Please enter a valid recipient email.');
  });

  it('should throw an error if the message is empty', () => {
    expect(() => validateSchedule('team@domain.com', '   ', '2026-01-02T10:00', fakeNow))
      .toThrowError('Message body cannot be empty.');
  });
});