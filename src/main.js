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

      // Ocultar estado vacío
      if (emptyState) emptyState.style.display = 'none';

      // Crear el elemento visual
      const item = document.createElement('div');
      item.className = 'p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg shadow-sm transition-all duration-500 ease-in-out';
      item.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <p class="font-bold text-indigo-900 text-sm">${result.recipient}</p>
            <p class="text-gray-600 text-xs mt-1 truncate w-48">${result.message}</p>
          </div>
          <span class="status-badge bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            Scheduled: ${result.scheduledDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </span>
        </div>
      `;
      
      // Agregar a la lista
      queueList.prepend(item);

      // --- NUEVA LÓGICA DE ENVÍO AUTOMÁTICO ---
      // Calcular milisegundos hasta la fecha programada
      const timeUntilSend = result.scheduledDate.getTime() - Date.now();

      setTimeout(() => {
        // 1. Cambiar a estado "Enviado" (Verde)
        item.classList.replace('bg-indigo-50', 'bg-green-50');
        item.classList.replace('border-indigo-500', 'border-green-500');
        
        const badge = item.querySelector('.status-badge');
        badge.classList.replace('bg-blue-100', 'bg-green-100');
        badge.classList.replace('text-blue-800', 'text-green-800');
        badge.textContent = 'Sent Successfully! ✅';

        // 2. Esperar 4 segundos para que el usuario lo lea, luego desaparecerlo
        setTimeout(() => {
          item.classList.add('opacity-0', '-translate-x-4');
          
          setTimeout(() => {
            item.remove();
            // Si la lista queda vacía (solo queda el div emptyState), lo mostramos de nuevo
            if (queueList.children.length === 1 && queueList.contains(emptyState)) {
              emptyState.style.display = 'block';
            }
          }, 500); // Esperar a que termine la animación
        }, 4000);

      }, timeUntilSend);
      // -----------------------------------------

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