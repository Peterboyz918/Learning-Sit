<script>
document.addEventListener('DOMContentLoaded', function() {
  // Create chat button
  const chatBtn = document.createElement('button');
  chatBtn.innerHTML = '💬';
  Object.assign(chatBtn.style, {
    position: 'fixed', bottom: '15px', right: '15px', zIndex: '1000',
    fontSize: '24px', padding: '12px', borderRadius: '50%',
    background: '#004466', color: '#fff', border: 'none', cursor: 'pointer'
  });
  document.body.appendChild(chatBtn);

  // Create chatbot box
  const chatbotDiv = document.createElement('div');
  chatbotDiv.id = 'chatbot';
  Object.assign(chatbotDiv.style, {
    position: 'fixed', bottom: '70px', right: '15px',
    width: '300px', maxHeight: '400px', overflowY: 'auto',
    background: '#fff', border: '2px solid #004466',
    borderRadius: '10px', padding: '10px', display: 'none'
  });

  // Inner content and input
  chatbotDiv.innerHTML = `
    <div id="chatContent">Hi! 👋 Need help?<br></div>
    <input type="text" id="chatInput" placeholder="Type your question..."
      style="width:95%;margin-top:5px;padding:5px;">
  `;
  document.body.appendChild(chatbotDiv);

  // Toggle visibility
  chatBtn.addEventListener('click', function() {
    chatbotDiv.style.display = chatbotDiv.style.display === 'block' ? 'none' : 'block';
    document.getElementById('chatInput').focus();
  });

  // Handle Enter key
  document.getElementById('chatInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') replyChat();
  });
});

function replyChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (msg !== '') {
    const chatContent = document.getElementById('chatContent');
    let response = generateResponse(msg);
    chatContent.innerHTML += `<p><strong>You:</strong> ${msg}</p>
                              <p><strong>Bot:</strong> ${response}</p>`;
    input.value = '';
    chatContent.scrollTop = chatContent.scrollHeight;
  }
}

function generateResponse(message) {
  message = message.toLowerCase();
  if (message.includes('hello') || message.includes('hi')) {
    return 'Hello there! 👋 How can I assist you today?';
  }
  if (message.includes('pdf') || message.includes('notes')) {
    return 'You can view your training notes on the Training Materials page.';
  }
  if (message.includes('profile') || message.includes('account')) {
    return 'Go to your Profile page to see or update your details.';
  }
  if (message.includes('contact') || message.includes('reach')) {
    return 'You can reach me on WhatsApp, Facebook, or Twitter on the Contact page.';
  }
  if (message.includes('bye')) {
    return 'Goodbye! 👋 Feel free to chat again anytime.';
  }
  return 'I\'m here to help! Could you please rephrase your question?';
}
</script>
