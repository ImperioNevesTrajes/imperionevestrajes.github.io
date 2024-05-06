export default function accordion() {
  const accordion = document.querySelectorAll('[data-js="accordion"]');

  accordion.forEach((acc) => {
    acc.addEventListener('click', () => {
      const ElementParent = acc.parentElement;
      ElementParent.classList.toggle('active');
    });
  });
}
