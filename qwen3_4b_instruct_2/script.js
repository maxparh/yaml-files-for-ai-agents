document.addEventListener('DOMContentLoaded', () => {
  console.log('Страница загружена');
});

document.querySelector('.btn').addEventListener('click', () => {
  alert('Кнопка нажата!');
});

// Обработка формы контакта
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Пожалуйста, заполните все поля.');
    } else {
      console.log({ name, email, message });
      alert('Форма отправлена!');
    }
  });
}
