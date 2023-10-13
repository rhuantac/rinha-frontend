import './style.css'

const errorMsg = document.getElementById("error")
const jsonFile = document.getElementById("json-input")

const showErrorMsg = (show = true) => {
  errorMsg.hidden = !show;
}

const jsonParse = (text) => {
  console.time("json-parse")
  JSON.parse(text)
  console.timeEnd("json-parse")
}

const readFile = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      jsonParse(e.target.result)
    } catch {
      showErrorMsg(true);
    }
  }
  reader.readAsText(file)
}

const openFile = () => {
  if (jsonFile.files.length < 1)
    return;

  showErrorMsg(false);
  try {
    const file = jsonFile.files[0];
    readFile(file)

  } catch {
    showErrorMsg(true);
  }
}

jsonFile.addEventListener("change", openFile, false)

