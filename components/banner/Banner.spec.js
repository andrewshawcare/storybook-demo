import Banner from './index.js';

describe('Banner', () => {
  it('has a message', () => {
    const message = 'Lorem ipsum dolor amit.';
    const bannerElement = Banner({ message });
    const messageElement = bannerElement.querySelector('.message');
    expect(messageElement.textContent).toBe(message);
  });
});