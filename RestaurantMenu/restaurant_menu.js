const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseMenuItemsHTML = '';

mainCourseMenu.forEach((item, index) => {
    mainCourseMenuItemsHTML += `<p>Item ${index + 1}: ${item}</p>`;
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

let dessertMenuItemsHTML = '';

for(let i = 0; i<dessertMenu.length; i++){
    dessertMenuItemsHTML += `<p>Item ${i + 1}: ${dessertMenu[i]} </p>`;
}

document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;