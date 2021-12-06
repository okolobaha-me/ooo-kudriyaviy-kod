(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contacts-modal-open]'),
    closeModalBtn: document.querySelector('[data-contacts-modal-close]'),
    modal: document.querySelector('[data-contacts-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contacts-fr-modal-open]'),
    closeModalBtn: document.querySelector('[data-contacts-fr-modal-close]'),
    modal: document.querySelector('[data-contacts-fr-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();