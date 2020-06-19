var view = ""
var form = document.getElementById("formItem")
var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]
var kucing = items
var cartAmount = 0

for (var i = 0; i < kucing.length; i++) {
    view += '<div class="col-4 mt-2"><div class="card" style="width: 22rem;">' +
        '<img src="img/' + kucing[i][4] + '" class="card-img-top" alt="..." style="width: 300px; height: 250px">' +

        '<div class="card-body">' +
        '<h5 class="card-title" id="itemName">' + kucing[i][1] + '</h5>' +
        '<p class="card-text" id="itemDesc">' + kucing[i][3] + '</p>' +
        '<p class="card-text">' + kucing[i][2] + '</p>' +
        '<a href="#" class="btn btn-primary" id="addCart" onclick="addCart()">Tambahkan ke keranjang</a>' +
        '</div>' +
        '</div></div>'
}

document.getElementById("listBarang").innerHTML = view
document.getElementById("cartAmount").innerHTML = '(' + cartAmount + ')'

form.addEventListener("submit", function (e) {
    e.preventDefault()

    var keyword = document.getElementById("keyword").value.toLowerCase()

    function filterName(item) {
        return item[1].toLowerCase().includes(keyword)
    }

    kucing = items.filter(filterName)

    document.getElementById("listBarang").innerHTML = ""
    view = ""

    for (var i = 0; i < kucing.length; i++) {
        view += '<div class="col-4 mt-2"><div class="card" style="width: 22rem;">' +
            '<img src="img/' + kucing[i][4] + '" class="card-img-top" alt="..." style="width: 300px; height: 250px">' +

            '<div class="card-body">' +
            '<h5 class="card-title" id="itemName">' + kucing[i][1] + '</h5>' +
            '<p class="card-text" id="itemDesc">' + kucing[i][3] + '</p>' +
            '<p class="card-text">' + kucing[i][2] + '</p>' +
            '<a href="#" class="btn btn-primary" id="addCart" onclick="addCart()">Tambahkan ke keranjang</a>' +
            '</div>' +
            '</div></div>'
    }

    document.getElementById("listBarang").innerHTML = view
})

function addCart() {
    cartAmount += 1
    console.log(cartAmount)
    document.getElementById("cartAmount").innerHTML = '(' + cartAmount + ')'
}