const pageView = document.getElementById('page-views')
const viewsRange = document.getElementById('viewsRange');
const monthYearSwitch = document.getElementById('month-year');
const price = document.getElementById('price');


pageView.innerText = "100K";
viewsRange.value = "3";
price.innerText = "$16.00";

let finalPrice;

function priceCal() {
    let val = viewsRange.value;
    let page_view = 100;
    switch (val) {
        case '1':
            finalPrice = 8;
            page_view = "10K";
            break;
        case '2':
            finalPrice = 12;
            page_view = "50K";
            break;
        case '3':
            finalPrice = 16;
            page_view = "100K";
            break;
        case '4':
            finalPrice = 24;
            page_view = "500K";
            break;
        case '5':
            finalPrice = 36;
            page_view = '1M';
            break;
    }
    pageView.innerText = page_view;
    price.innerText = "$" + finalPrice + ".00";
}

viewsRange.addEventListener('change', priceCal)

monthYearSwitch.addEventListener('change', () => {

    if (monthYearSwitch.checked) {
        priceCal();
        finalPrice = finalPrice * 0.75;
        price.innerText = "$" + finalPrice + ".00";
    } else {
        priceCal();
    }
})