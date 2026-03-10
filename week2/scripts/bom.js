const input = document.querySelector("#favchap")
const addButton = document.querySelector("button")
const list = document.querySelector("#list")

let listCount = 1;

const bomBooks = [
"1 Nephi","2 Nephi","Jacob","Enos","Jarom","Omni",
"Words of Mormon","Mosiah","Alma","Helaman",
"3 Nephi","4 Nephi","Mormon","Ether","Moroni"
]

addButton.addEventListener("click", () => {

    if (listCount < 11) {

        if (input.value.trim() !== "" && bomBooks.includes(input.value.trim())) {

            const listItm = document.createElement("li")
            const delBtn = document.createElement("button")

            listItm.textContent = input.value
            delBtn.textContent = "❌"

            listItm.append(delBtn)
            list.append(listItm)

            listCount++;

            delBtn.addEventListener("click", () => {
                list.removeChild(listItm)
                listCount--;
                input.focus()
            })

            input.value = ""
            input.focus()

        } else {
            alert("Enter valid Book of Mormon book")
            input.focus()
        }

    } else {
        alert("You can only add 10 items.")
    }

})