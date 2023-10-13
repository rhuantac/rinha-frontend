import './style.css'

const errorMsg = document.getElementById("error")
const jsonFile = document.getElementById("json-input")
let jsonObject;

const showErrorMsg = (show = true) => {
  errorMsg.hidden = !show;
}

const showTreeView = (filename, jsonData) => {
  document.getElementById("upload-container").hidden = true;
  document.getElementById("tree-container").hidden = false;
  document.getElementById("filename").textContent = filename
  jsonObject = jsonData;
}

const readFile = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      showTreeView(file.name, JSON.parse(e.target.result));
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

