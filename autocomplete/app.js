var arr = [
    "Alborz",
    "Ardabil",
    "Bushehr",
    "Chaharmahal and Bakhtiari",
    "East Azerbaijan",
    "Isfahan",
    "Fars",
    "Gilan",
    "Golestan",
    "Hamadan",
    "Hormozgan",
    "Ilam",
    "Kerman",
    "Kermanshah",
    "Khuzestan",
    "Kohgiluyeh and Boyer-Ahmad",
    "Kurdistan",
    "Lorestan",
    "Markazi",
    "Mazandaran",
    "North Khorasan",
    "Qazvin",
    "Qom",
    "Razavi Khorasan",
    "Semnan",
    "Sistan and Baluchestan",
    "South Khorasan",
    "Tehran",
    "West Azerbaijan",
    "Yazd",
    "Zanjan"
];

function autocomplete(input, arr) {
    var word = document.getElementsByClassName("autocomplete")[0];
    var word2 = document.getElementsByClassName("item");
    input.addEventListener("input", function(e) {
        var flag, divElement, divContent, value = input.value;
        removeList();
        divElement = document.createElement("div");
        divElement.setAttribute("class", "item");
        word.parentNode.appendChild(divElement);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, value.length) === value) {
                divContent = document.createElement("div");
                divContent.setAttribute("class", "item");
                divContent.innerHTML = arr[i].substr(0, value.length);
                divContent.innerHTML += arr[i].substr(value.length);
                divContent.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                divContent.addEventListener("click", function(e) {
                    input.value = this.getElementsByTagName("input")[0].value;
                    removeList();
                });
                divElement.appendChild(divContent);
                flag = true;
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, value.length) !== value && !flag) {
                divContent = document.createElement("div");
                divContent.setAttribute("class", "not-found");
                divContent.innerHTML = "Not Found!";
                divElement.appendChild(divContent);
                break;
            }
        }
    });

    function removeList(elements) {
        for (var i = 0; i < word2.length; i++) {
            if (elements !== word2[i] && elements !== input) {
                word2[i].parentNode.removeChild(document.getElementsByClassName("item")[i]);
            }
        }
    }

    document.addEventListener("click", function(e) {
        removeList(e.target);
    });
}

autocomplete(document.getElementById("myInput"), arr);