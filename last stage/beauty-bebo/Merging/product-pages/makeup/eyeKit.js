var BBcream = [
    {
        id: 1,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/h/bh1_1.png",
        name: "Blue Heaven Artisto Twin One Eye Kit Kajal",
        rating: "",
        price: "₹225.00",
        strikedoffprice: "",
        discount: "",

    },
    {
        id: 2,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/2/62_1_1.jpg",
        name: "Miss Claire Eyebrow Cake",
        rating: "",
        price: "488.00",
        strikedoffprice: "₹525.00",
        discount: "7% off"
    },
    {
        id: 3,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/s/asdasd.jpg",
        name: "Faces Canada Ultime Pro Eye Pigment - Copper 03",
        rating: "",
        price: "440.00",
        strikedoffprice: "₹499.00",
        discount: "12% off"
    },
    {
        id: 4,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/0/1/01.jpg",
        name: "Maybelline New York Facestudio Master Blush Color & Highlight Kit",
        rating: "",
        price: "810.00",
        strikedoffprice: "₹890.00",
        discount: "9% off"
    },
    {
        id: 5,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/x/s/xsxcsjcsjcsjhcushcu.png",
        name: "Blue Heaven Sketch Eye Liner",
        rating: "",
        price: "135.00",
        strikedoffprice: "₹150.00",
        discount: "10% off"
    },
    {
        id: 6,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/1/11212.jpg",
        name: "Blue Heaven 12 In 1 Fashion Eye Glitter",
        rating: "",
        price: "102.00",
        strikedoffprice: "₹135.00",
        discount: "24% off"
    },
    {
        id: 7,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/_/3_36.jpg",
        name: "PAC Blending Eyeshadow Brush-203",
        rating: "",
        price: "488.00",
        strikedoffprice: "₹525.00",
        discount: "7% off"
    },
    {
        id: 8,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/_/2_39.jpg",
        name: "NIVEA Micellar Cleansing Water - Skin Breathe MicellAIR",
        rating: "",
        price: "315.00",
        strikedoffprice: "₹350.00",
        discount: "10% off"
    },
    {
        id: 9,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/_/2_38.jpg",
        name: "Bioderma Sebium H2O",
        rating: "",
        price: "1,242.00",
        strikedoffprice: "₹1,350.00",
        discount: "8% off"
    },
    {
        id: 10,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_39.jpg",
        name: "Crown HD Effect Eye Primer",
        rating: "",
        price: "500.00",
        strikedoffprice: "₹550.00",
        discount: "9% off"
    },
    {
        id: 11,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_26.jpg",
        name: "L.A. Colors Sweet! 16 Color Eyeshadow Palette",
        rating: "",
        price: "945.00",
        strikedoffprice: "₹1,050.00",
        discount: "10% off"
    },
    {
        id: 12,
        image_url:
            "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/l/ultra_cover_cushion.jpg",
        name: "Maybelline New York Ultra Cover Cushion SPF50 / PA+++ - Natural Beige",
        rating: "",
        price: "1010.00",
        strikedoffprice: "₹1,145.00",
        discount: "12% off"
    }
]






document.querySelector(".cart").addEventListener("click",cartpage)

function cartpage(){
    window.location.href = "/beauty-bebo/Merging/cart/rk.html"
}






var cartarr = JSON.parse(localStorage.getItem("cart")) || []
var wisharr = []    

displayData()


function displayData() {
    BBcream.map(function (elem, index, arr) {
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div1 = document.createElement("div")
        var avatar = document.createElement("img")
        avatar.setAttribute("src", elem.image_url)
        avatar.style.width = "100%"
        avatar.style.height = "100%"
        avatar.addEventListener("click", showbig)
        var name = document.createElement("h4")
        name.innerText = elem.name
        name.style.color = "#8d9793"
        var fdiv = document.createElement("div")
        var price = document.createElement("h3")
        price.innerText = "₹" + elem.price
        price.style.color = "#dd0285"
        var sprice = document.createElement("s")
        sprice.innerText = elem.strikedoffprice
        var discount = document.createElement("h4")
        discount.innerText = elem.discount
        discount.style.color = "#008000"
        var click = document.createElement("div")
        var button1 = document.createElement("button")
        button1.innerHTML = "<i class='fa-solid fa-cart-arrow-down'></i>" + " " + "Add To Cart"
        button1.addEventListener("click",addtocartfn,{once:true})
        function addtocartfn() {
            elem.quantity = 1
            cartarr.push(elem)
            localStorage.setItem("cart", JSON.stringify(cartarr))
            console.log(cartarr)
        }
        var button2 = document.createElement("button")
        button2.innerHTML = "<i class='fa-solid fa-heart'></i>"
        button2.addEventListener("click",addtowishfn,{once:true})
        function addtowishfn(){
            wisharr.push(elem)
            console.log(wisharr)
        }
        var rat = document.createElement("div")
        rat.innerHTML = "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>" + "<i class='fa-solid fa-star'></i>"
        rat.style.fontSize = "10px"
        rat.style.color = "#eca330"
        rat.style.marginBottom = "15px"
        rat.style.letterSpacing = "3px"
        click.style.display = "flex"
        click.style.justifyContent = "center"
        fdiv.style.display = "flex"
        fdiv.style.justifyContent = "space-around"
        var sym = document.createElement("h3")
        sym.innerHTML = "₹"
        var sprc = document.createElement("div")
        sprc.append(price)
        var sdiv = document.createElement("div")
        sdiv.append(sprice)
        var sdiv1 = document.createElement("div")
        sdiv1.append(discount)
        var sale = document.createElement("div")
        sale.innerHTML = "Sale"
        sale.setAttribute("id", "sale")
        button2.setAttribute("id", "btn2")
        fdiv.setAttribute("id", "fdivi")
        div1.setAttribute("id", "div1")
        div2.setAttribute("id", "div2")
        div.setAttribute("id", "divi")
        click.append(button1, button2)
        if (elem.discount == "10% off") {
            div1.append(avatar, sale)
        }
        else {
            div1.append(avatar)
        }
        fdiv.append(sdiv, sprc, sdiv1)
        div2.append(name, rat, fdiv, click)
        div.append(div1, div2)


        document.querySelector("#container2").append(div)

    })

}






document.querySelector("#select1").addEventListener("change", sortfuction)

function sortfuction() {
    var x = document.querySelector("#select1").value

    if (x == "l2h") {
        BBcream.sort(function (a, b) {
            return Number(a.price) - Number(b.price)
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }
    else if (x == "h2l") {
        BBcream.sort(function (a, b) {
            return Number(b.price) - Number(a.price)
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }
    else if (x == "Pname") {
        BBcream.sort(function (a, b) {
            var x = a.name.toUpperCase()
            var y = b.name.toUpperCase()
            if (x > y) {
                var comparision = 1
            }
            else {
                var comparision = -1
            }
            return comparision
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }

    else if (x == "arr") {
        BBcream.sort(function (a, b) {
            var x = a.discount.toUpperCase()
            var y = b.discount.toUpperCase()
            if (x > y) {
                var comparision = -1
            }
            else {
                var comparision = 1
            }
            return comparision
        })
        document.querySelector("#container2").innerHTML = ""
        displayData()
    }

}

document.querySelector("#skin").addEventListener("click", popup1)
skinckick = true
function popup1() {
    arrofcheckbox = ["Combination", "Dry", "Normal", "Oily", "Sensitive", "All Skin Type"]
    idc = 101
    if (skinckick == true) {
        document.querySelector("#skin").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            // x.style = "display : block"
            document.querySelector("#mysteryskin").append(x)
            y = document.getElementById("mysteryskin")
            y.style = "display : block"
            idc++
            skinckick = false
        });
        s = document.querySelectorAll("#mysteryskin>div")

        s.forEach(element => {
            element.addEventListener("click", run)
        });


    }
    else {
        // document.createElement("div").innerHTML= ""
        document.querySelector("#skin").innerText = "+"
        document.querySelector("#mysteryskin").innerHTML = ""
        skinckick = true
    }
}

document.querySelector("#price").addEventListener("click", popup2)
priceclick = true
function popup2() {
    arrofcheckbox = ["Below Rs. 1,000.00", "Rs. 1000.00 and above"]
    idc = 101
    if (priceclick == true) {
        document.querySelector("#price").innerText = "-"
        z = []
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            z += x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            // 
            document.querySelector("#mysteryprice").append(x)
            y = document.getElementById("mysteryprice")
            // 
            y.style = "display : block"
            idc++
            priceclick = false
            displayData()
        });
    }
    else {
        document.querySelector("#price").innerText = "+"
        document.querySelector("#mysteryprice").innerHTML = ""
        priceclick = true
    }
}

document.querySelector("#brand").addEventListener("click", popup3)
brandclick = true
function popup3() {
    arrofcheckbox = ["Garnier", "L'Oreal Paris", "Maybelline", "Olay", "Pond's", "Faces Canada", "NYX", "O3+", "Swiss Beuty", "Colorbar"]
    idc = 201
    if (brandclick == true) {
        document.querySelector("#brand").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            document.querySelector("#mysterybrand").append(x)
            y = document.getElementById("mysterybrand")
            y.style = "display : block"
            idc++
            brandclick = false
        });
        s = document.querySelectorAll("#mysterybrand>div")

        s.forEach(element => {
            element.addEventListener("click", run)
        });


        //  s = document.querySelector("#mysterybrand")
        //  
    }
    else {
        document.querySelector("#mysterybrand").innerHTML = ""
        document.querySelector("#brand").innerText = "+"
        brandclick = true
    }
}

document.querySelector("#shades").addEventListener("click", popup4)
shadesclick = true
function popup4(elem) {
    arrofcheckbox = ["Garnier", "L'Oreal Paris", "Maybelline"]
    idc = 1
    if (shadesclick == true) {
        document.querySelector("#shades").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<span class='dot'></span>"
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = color" + idc + " style = margin:0px>"

            // x.style = "styleradius : 50%"
            // y.style = "display : block"
            document.querySelector("#mysteryshades").append(x)
            idc++
            shadesclick = false
        });
    }
    else {
        document.querySelector("#mysteryshades").innerHTML = ""
        document.querySelector("#shades").innerText = "+"
        shadesclick = true
    }
}


document.querySelector("#form").addEventListener("click", popup5)
formclick = true
function popup5(elem) {
    arrofcheckbox = ["Balm", "Cleansing Milk", "Cream", "Liquid", "Lotion/Body Butter"]
    idc = 401
    if (formclick == true) {
        document.querySelector("#form").innerText = "-"
        arrofcheckbox.forEach(element => {
            var x = document.createElement("div")
            x.innerHTML = "<input class = 'checkbox' type ='checkbox' id = left" + idc + " <label for ='1011'>" + element + "</label>"
            document.querySelector("#mysteryform").append(x)
            y = document.getElementById("mysteryform")
            y.style = "display : block"
            idc++
            formclick = false
        });
        s = document.querySelectorAll("#mysteryform>div")

        s.forEach(element => {
            element.addEventListener("click", run)
        });
    }
    else {
        document.querySelector("#mysteryform").innerHTML = ""
        document.querySelector("#form").innerText = "+"
        formclick = true
    }
}

l101c = false
l102c = false
document > left > mysteryprice.addEventListener("click", clearInterval)
// sq.addEventListener("click",clearInterval)
function clearInterval(ta) {
    ans = []
    BBcreamres = BBcream
    if (ta.target.id == "left101") {
        BBcream.map(element => {
            price = Number(element.price)
            if (price < 1000) {
                ans.push(element)
            }
        });
        BBcream = ans
        document.querySelector("#container2").innerHTML = ""

        if (l101c == true) {
            BBcream = BBcreamres
            displayData()
            l101c = false
        }
        else {
            displayData()
            BBcream = BBcreamres
            l101c = true
        }
    }
    if (ta.target.id == "left102") {
        s = BBcream.map(element => {
            price = Number(element.price)
            if (price > 1000) {
                ans.push(element)
            }
            return ans
        });
        BBcream = ans
        document.querySelector("#container2").innerHTML = ""
        if (l102c == true) {
            BBcream = BBcreamres
            displayData()
            l102c = false
        }
        else {
            displayData()
            BBcream = BBcreamres
            l102c = true
        }
    }
}

leftitemsearch = []
function run(e) {
    eid = e.target.id

    s = document.getElementById(eid)
    found = s.parentNode.innerText
    BBcreamres = BBcream
    if (eid == "left101") {
        BBcream.forEach(ele => {
            s = ele.name.split(" ")
            s.forEach(e => {
                if (e == found) {
                    leftitemsearch.push(ele)
                }
            });
        });
    }
    // if(ei)
    // if(leftitemsearch.length != 0)
    BBcream = leftitemsearch
    document.getElementById("container2").innerHTML = ""
    displayData()
    BBcream = BBcreamres
}



function showbig(e) {
    img = e.target.src
    n = e.target.parentNode.parentNode.lastChild.querySelector("h4").innerText
    // 
    retting = e.target.parentNode.parentNode.lastChild.querySelector("div")
    // 
    price = e.target.parentNode.parentNode.lastChild.querySelector("#fdivi>div>s").innerText
    // 
    strikedoffprice = e.target.parentNode.parentNode.lastChild.querySelector("#fdivi")
    strikedoffprice = strikedoffprice.querySelectorAll("div")[1].innerText

    discount = e.target.parentNode.parentNode.lastChild.querySelector("#fdivi")
    discount = discount.querySelectorAll("div")[2].innerText

    button = e.target.parentNode.parentNode.lastChild.lastChild
    single = { "img": img, "name": n, "price": price, "strikedoffprice": strikedoffprice, "discount": discount }
    single = JSON.stringify(single)
    localStorage.setItem("single", single)
    window.open("http://127.0.0.1:5500/showItem.html", "_self")
}



s = document.querySelector("#selectLogin").childNodes[1].innerText
j = JSON.parse(localStorage.getItem("userispresent"))
// document.querySelector("#selectLogin").childNodes[1].innerText = 
console.log(s,j.name)

document.querySelector("#selectLogin").childNodes[1].innerText = j.name || "My Account"