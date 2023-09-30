const createBtn = document.querySelector(".Btn");
const main = document.querySelector("#main");
const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  // console.log(data);
  localStorage.setItem("notes", JSON.stringify(data));
};

createBtn.addEventListener("click", (text = "") => {
  let note = document.createElement("div");
  note.classList.add("note");
  note.className = "note";

  let tool = document.createElement("div");
  tool.className = "tool";
  tool.innerHTML =
    "<div class='tool'><img src= images/save.png class='save'></img><img src= 'images/delete.png' class='trash'></img></div>";

  tool.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });
  tool.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  let textarea = document.createElement("textarea");
  main.appendChild(note).appendChild(tool);
  note.appendChild(textarea);
  saveNotes();
});
(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  lsnotes.forEach((lsnotes) => {
    createBtn(lsnotes);
  });
})();
