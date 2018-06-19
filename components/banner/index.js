import './style.css';

export default ({
  message = '',
  actions = []
}) => {
  const bannerElement = document.createElement('div');
  bannerElement.classList.add('banner');

  const messageElement = document.createElement('span');
  messageElement.classList.add('message');
  messageElement.textContent = message;

  const actionElements = actions.map(({ name, onAction }) => {
    const actionElement = document.createElement('a');
    actionElement.classList.add('action');
    actionElement.href = 'javascript:void(0);'
    actionElement.onclick = onAction;
    actionElement.textContent = name;
    return actionElement;
  });

  bannerElement.appendChild(messageElement);
  actionElements.forEach(bannerElement.appendChild, bannerElement);

  return bannerElement;
};