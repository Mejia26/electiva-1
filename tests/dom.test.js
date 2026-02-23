import { describe, it, expect, beforeEach } from 'vitest';
import { setupApp } from '../src/main.js';

describe('DOM Integration - ToSend Scheduler', () => {
  beforeEach(() => {
    // Simulamos el HTML de nuestra app
    document.body.innerHTML = `
      <input id="recipient" value="team@empresa.com" />
      <textarea id="message-body">Revisión de propuesta</textarea>
      <input id="schedule-time" value="2030-01-01T10:00" />
      <div id="error-alert" class="hidden"></div>
      <button id="schedule-btn"></button>
      <div id="queue-list"></div>
      <div id="empty-state"></div>
    `;
    setupApp();
  });

  it('debería agregar un mensaje programado a la lista en la interfaz', () => {
    const btn = document.getElementById('schedule-btn');
    const queueList = document.getElementById('queue-list');
    
    btn.click(); // Simulamos el clic del usuario
    
    // Verificamos que el mensaje se haya agregado al DOM
    expect(queueList.innerHTML).toContain('team@empresa.com');
  });
});