



let closeFilter = document.querySelector('.filter-close');
let openFilter = document.querySelector('.filter-btn');
let filter = document.querySelector('.form-filter');


openFilter.addEventListener('click', () => {
    filter.classList.add('active');
})

closeFilter.addEventListener('click', () => {
    filter.classList.remove('active');
})


let sortingValue = document.querySelector('.sorting__name ');
let openSort = document.querySelector('.sorting__title ')

openSort.addEventListener('click', () => {
    sortingValue.classList.toggle('active');
})

/*document.addEventListener('click', (event) => {
    if (event.target !== sortingValue) {
      sortingValue.classList.remove('active');
    }
  })*/
