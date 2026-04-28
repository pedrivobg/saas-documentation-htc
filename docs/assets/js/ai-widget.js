/* ============================================================
   AI-WIDGET.JS — Shell visual apenas (sem API)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const aiToggle = document.getElementById('ai-toggle');
  const aiPanel = document.getElementById('ai-panel');
  const aiClose = document.getElementById('ai-close');
  const aiInput = document.getElementById('ai-input');
  const aiSend = document.getElementById('ai-send');
  const aiMessages = document.getElementById('ai-messages');
  const aiNameDisplay = document.getElementById('ai-name-display');
  const aiWelcome = document.getElementById('ai-welcome');

  // Apply config
  if (aiNameDisplay && typeof APP_CONFIG !== 'undefined') {
    aiNameDisplay.textContent = APP_CONFIG.aiName || 'Assistente';
  }
  if (aiWelcome && typeof APP_CONFIG !== 'undefined') {
    aiWelcome.textContent = APP_CONFIG.aiWelcome || 'Olá! Como posso te ajudar?';
  }

  // Hide widget if disabled
  const widget = document.getElementById('ai-widget');
  if (widget && typeof APP_CONFIG !== 'undefined' && !APP_CONFIG.aiEnabled) {
    widget.style.display = 'none';
    return;
  }

  // Toggle panel
  if (aiToggle) aiToggle.addEventListener('click', () => {
    if (aiPanel) aiPanel.removeAttribute('hidden');
  });

  if (aiClose) aiClose.addEventListener('click', () => {
    if (aiPanel) aiPanel.setAttribute('hidden', '');
  });

  // Send message (static response only)
  function sendMessage() {
    const msg = aiInput.value.trim();
    if (!msg) return;
    aiInput.value = '';

    // Append user message
    appendMessage(msg, 'user');

    // Static response
    setTimeout(() => {
      appendMessage(
        'Configure o assistente de IA nas configurações da sua conta para ativar esta funcionalidade.',
        'bot'
      );
    }, 500);
  }

  function appendMessage(text, role) {
    const div = document.createElement('div');
    div.className = `ai-message ai-message--${role}`;
    div.textContent = text;
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
    return div;
  }

  if (aiSend) aiSend.addEventListener('click', sendMessage);
  if (aiInput) aiInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
  });
});
