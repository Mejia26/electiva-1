// src/main.js
import { validateSchedule } from './scheduler-logic.js';

export function setupApp() {
  const scheduleBtn = document.getElementById('schedule-btn');
  const recipientInput = document.getElementById('recipient');
  const messageInput = document.getElementById('message-body');
  const timeInput = document.getElementById('schedule-time');
  const errorAlert = document.getElementById('error-alert');
  const queueList = document.getElementById('queue-list');
  const emptyState = document.getElementById('empty-state');

  scheduleBtn.addEventListener('click', () => {
    try {
      errorAlert.classList.add('hidden');
      
      const result = validateSchedule(
        recipientInput.value, 
        messageInput.value, 
        timeInput.value
      );

      // Si todo es válido, lo agregamos a la interfaz visual
      if (emptyState) emptyState.style.display = 'none';

      const item = document.createElement('div');
      item.className = 'p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg shadow-sm animate-fade-in';
      item.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <p class="font-bold text-indigo-900 text-sm">${result.recipient}</p>
            <p class="text-gray-600 text-xs mt-1 truncate w-48">${result.message}</p>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            ${result.scheduledDate.toLocaleString()}
          </span>
        </div>
      `;
      
      queueList.prepend(item);

      // Limpiar formulario
      recipientInput.value = '';
      messageInput.value = '';
      timeInput.value = '';

    } catch (error) {
      errorAlert.textContent = error.message;
      errorAlert.classList.remove('hidden');
    }
  });
}

if (typeof window !== 'undefined' && document.getElementById('schedule-btn')) {
  setupApp();
}