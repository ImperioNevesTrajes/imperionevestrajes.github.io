export default function preload() {
  const preload = document.querySelector('#preload');
  const navbar = document.querySelector('#navbar');
  const hero = document.querySelector('#hero');
  const browse = document.querySelector('#browse');
  const games = document.querySelector('#games');
  const controller = document.querySelector('#controller');
  const faqs = document.querySelector('#faqs');
  const order = document.querySelector('#order');
  const footer = document.querySelector('#footer');

  navbar.style.display = 'none';
  hero.style.display = 'none';
  browse.style.display = 'none';
  games.style.display = 'none';
  controller.style.display = 'none';
  faqs.style.display = 'none';
  order.style.display = 'none';
  footer.style.display = 'none';

  setTimeout(() => {
    navbar.style.display = 'flex';
    hero.style.display = 'block';
    browse.style.display = 'block';
    games.style.display = 'block';
    controller.style.display = 'block';
    faqs.style.display = 'block';
    order.style.display = 'block';
    footer.style.display = 'block';

    preload.style.display = 'none';
  }, 13000);
}
