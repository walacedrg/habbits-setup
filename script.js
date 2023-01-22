const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
console.log(nlwSetup)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br")
  console.log(today)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso❌")
    return
  }
  alert("Dia Registrado com sucesso✅ ")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],

//   water: ["01-03"],

//   movie: ["01-02"],
//}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
