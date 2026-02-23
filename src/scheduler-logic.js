// src/scheduler-logic.js
export function validateSchedule(recipient, message, dateString, currentDateTime = new Date()) {
  if (!recipient.trim() || !recipient.includes('@')) {
    throw new Error('Please enter a valid recipient email.');
  }

  if (!message.trim()) {
    throw new Error('Message body cannot be empty.');
  }

  const scheduledDate = new Date(dateString);
  if (isNaN(scheduledDate.getTime())) {
    throw new Error('Please select a valid date and time.');
  }

  if (scheduledDate <= currentDateTime) {
    throw new Error('Schedule time must be in the future.');
  }

  return {
    recipient,
    message: message.trim(),
    scheduledDate,
    status: 'Scheduled'
  };
}