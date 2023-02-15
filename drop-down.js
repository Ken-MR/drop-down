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
  function viewOnHover (list) {
    list.addEventListener('mouseover', () => {
      list.classList.remove('invisible-list');
    });
    list.addEventListener('mouseout', () => {
      list.classList.add('invisible-list');
    });
  }
  return {viewOnClick, viewOnHover};
})();

const numbersList = document.getElementById('numbers');

menuDropDown.viewOnClick(numbersList);

const lettersList = document.getElementById('letters');

menuDropDown.viewOnHover(lettersList);