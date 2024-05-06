export default function menu() {
  const bx = document.querySelector('.bx');

  const menu_mobile = document.querySelector('.mobile');

  const link_mobile = document.querySelectorAll('.mobile__link');

  bx.addEventListener('click', () => {
    bx.classList.toggle('activebx');
    menu_mobile.classList.toggle('showmenu');
  });

  link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
      menu_mobile.classList.remove('showmenu');
      bx.classList.remove('activebx');
    });
  });
}
