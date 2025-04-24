fetch('/config')
  .then(res => res.json())
  .then(config => {
    const buildingSelect = document.getElementById("building");
    const gradeSelect = document.getElementById("grade");
    const classroomSelect = document.getElementById("classroom");

    config.buildings.forEach(b => {
      const opt = document.createElement("option");
      opt.value = b;
      opt.textContent = b;
      buildingSelect.appendChild(opt);
    });

    config.grades.forEach(g => {
      const opt = document.createElement("option");
      opt.value = g;
      opt.textContent = g;
      gradeSelect.appendChild(opt);
    });

    config.classrooms.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      classroomSelect.appendChild(opt);
    });
  });

document.getElementById("assignForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    serial: document.getElementById("serial").value,
    building: document.getElementById("building").value,
    grade: document.getElementById("grade").value,
    classroom: document.getElementById("classroom").value,
    station: document.getElementById("station").value
  };

  const res = await fetch("/assign", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message || "Assignment successful");
});
