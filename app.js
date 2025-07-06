// app.js

document.addEventListener('DOMContentLoaded', function() {
  // Create the floating chat emoji button
  const chatBtn = document.createElement('button');
  chatBtn.innerHTML = '💬';
  chatBtn.style.position = 'fixed';
  chatBtn.style.bottom = '15px';
  chatBtn.style.right = '15px';
  chatBtn.style.zIndex = '1000';
  chatBtn.style.fontSize = '26px';
  chatBtn.style.padding = '12px';
  chatBtn.style.borderRadius = '50%';
  chatBtn.style.background = '#004466';
  chatBtn.style.color = '#fff';
  chatBtn.style.border = 'none';
  chatBtn.style.cursor = 'pointer';
  document.body.appendChild(chatBtn);

  // Create the chatbot box
  const chatbotDiv = document.createElement('div');
  chatbotDiv.id = 'chatbot';
  chatbotDiv.style.position = 'fixed';
  chatbotDiv.style.bottom = '70px';
  chatbotDiv.style.right = '15px';
  chatbotDiv.style.width = '300px';
  chatbotDiv.style.maxHeight = '400px';
  chatbotDiv.style.overflowY = 'auto';
  chatbotDiv.style.background = '#f9f9f9';
  chatbotDiv.style.border = '2px solid #004466';
  chatbotDiv.style.borderRadius = '10px';
  chatbotDiv.style.padding = '10px';
  chatbotDiv.style.display = 'none';
  chatbotDiv.innerHTML = '<div id=\"chatContent\">Hi! 👋 Need help?<br></div><input type=\"text\" id=\"chatInput\" placeholder=\"Type your question...\" style=\"width:95%;margin-top:5px;padding:5px;\">';
  document.body.appendChild(chatbotDiv);

  // Toggle chatbot visibility
  chatBtn.addEventListener('click', function() {
    chatbotDiv.style.display = chatbotDiv.style.display === 'block' ? 'none' : 'block';
    document.getElementById('chatInput').focus();
  });

  // Listen for Enter key
  chatbotDiv.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') replyChat();
  });
});

function replyChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (msg !== '') {
    const chatContent = document.getElementById('chatContent');
    let response = generateResponse(msg);
    chatContent.innerHTML += `<p><strong>You:</strong> ${msg}</p><p><strong>Bot:</strong> ${response}</p>`;
    input.value = '';
    input.scrollIntoView({behavior: 'smooth'});
  }
}

// Smarter multiple replies
function generateResponse(message) {
  message = message.toLowerCase();
  if (message.includes('hello') || message.includes('hi')) {
    return 'Hello there! 👋 How can I assist you today?';
  }
  if (message.includes('pdf') || message.includes('notes') || message.includes('training')) {
    return 'You can view your notes under the Training Materials tab.';
  }
  if (message.includes('profile') || message.includes('account')) {
    return 'Head over to the Profile page to see your details.';
  }
  if (message.includes('contact') || message.includes('reach')) {
    return 'You can contact me via WhatsApp, Facebook, or Twitter on the Contact page.';
  }
  if (message.includes('bye')) {
    return 'Goodbye! 👋 Feel free to chat again anytime.';
  }
  return 'I\'m here to help! Could you please ask in a different way?';
}
