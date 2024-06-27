
// let navSorting = document.querySelector('#nav');

// replaceNode = navSorting.replaceChild(navSorting.children[1], navSorting.children[0]);

// сортировака пузырьком

// можно и let
const a = [1, 78, 5, 35, 8, 64, 2, 0, 46, 9,];

for (let i = 0; i < a.length; i++) {
   for (let j = i; j < a.length; j++) {
      if (a[i] > a[j]) {
         let temp = a[i];
         a[i] = a[j];
         a[j] = temp;
      }
      console.log(a);
   }
}



document.querySelector('#stor-ase').onclick = function() {
   mySort('data-stor');
}
document.querySelector('#stor-desc').onclick = function() {
   mySortDesc('data-stor');
}
document.querySelector('#stor-rating').onclick = function() {
   mySortDesc('data-reting');
}


function mySort(sortTape) {
   let navSorting = document.querySelector('#nav');
   for (let i = 0; i < navSorting.children.length; i++) {
      for (let j = i; j < navSorting.children.length; j++) {
         if (+navSorting.children[i].getAttribute(sortTape) > +navSorting.children[j].getAttribute(sortTape)) {
            replaceNode = navSorting.replaceChild(navSorting.children[j], navSorting.children[i]);
            insertAfter(replaceNode, navSorting.children[i]);
         }
      }
   }
}

function mySortDesc(sortTape) {
   let navSorting = document.querySelector('#nav');
   for (let i = 0; i < navSorting.children.length; i++) {
      for (let j = i; j < navSorting.children.length; j++) {
         if (+navSorting.children[i].getAttribute(sortTape) < +navSorting.children[j].getAttribute(sortTape)) {
            replaceNode = navSorting.replaceChild(navSorting.children[j], navSorting.children[i]);
            insertAfter(replaceNode, navSorting.children[i]);
         }
      }
   }
}



function insertAfter(elem, refElem) {
   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
