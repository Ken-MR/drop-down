const menuDropDown = (() => {
  function viewOnClick (list) {
    list.addEventListener('click', () => {
      if (list.classList.contains('invisible-list')) {
        list.classList.remove('invisible-list');
      }
      else {
        list.setAttribute('class', 'invisible-list');      
      }
    });
  }
  return {viewOnClick};
})();

const numbersList = document.getElementById('numbers');

menuDropDown.viewOnClick(numbersList);