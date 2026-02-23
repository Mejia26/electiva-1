import { describe, it, expect, beforeEach } from 'vitest';
import { setupApp } from '../src/main.js';

describe('DOM Integration', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input id="complexity" value="5" />
      <input id="exposure" value="5" />
      <button id="calculate-btn"></button>
      <div id="result-container" class="hidden"></div>
      <span id="score-text"></span>
    `;
    setupApp();
  });

  it('should display risk level on button click', () => {
    const btn = document.getElementById('calculate-btn');
    const scoreText = document.getElementById('score-text');
    const container = document.getElementById('result-container');

    btn.click();

    expect(scoreText.textContent).toBe('Risk Level: Moderate');
    expect(container.classList.contains('hidden')).toBe(false);
  });
});