function addSubject() {
    const subjectContainer = document.getElementById('subject-container');
    const subjectIndex = subjectContainer.children.length;
  
    const subjectCard = document.createElement('div');
    subjectCard.className = 'input-container';
    subjectCard.innerHTML = `
      <input type="text" class="input-field" placeholder="Subject Name" id="subjectName${subjectIndex}" required>
      <label class="input-label" for="subjectName${subjectIndex}">Subject Name</label>
      <input type="number" class="input-field" placeholder="Total Chapters" id="totalChapters${subjectIndex}" min="1" required>
      <label class="input-label" for="totalChapters${subjectIndex}">Total Chapters</label>
      <input type="number" class="input-field" placeholder="Chapters Completed" id="completedChapters${subjectIndex}" min="0" required>
      <label class="input-label" for="completedChapters${subjectIndex}">Chapters Completed</label>
    `;
  
    subjectContainer.appendChild(subjectCard);
  }
  
  function calculateProgress() {
    const subjectContainer = document.getElementById('subject-container');
    const subjects = subjectContainer.children;
    const resultsContainer = document.getElementById('results-container');
  
    resultsContainer.innerHTML = '';
  
    Array.from(subjects).forEach((subject, index) => {
      const subjectName = document.getElementById(`subjectName${index}`).value;
      const totalChapters = parseInt(document.getElementById(`totalChapters${index}`).value);
      const completedChapters = parseInt(document.getElementById(`completedChapters${index}`).value);
  
      if (isNaN(totalChapters) || isNaN(completedChapters)) {
        alert('Please enter valid numbers');
        return;
      }
  
      if (completedChapters > totalChapters) {
        alert('Chapters completed cannot exceed total chapters');
        return;
      }
  
      const completedPercentage = ((completedChapters / totalChapters) * 100).toFixed(2);
      const incompletePercentage = (100 - completedPercentage).toFixed(2);
  
      const resultCard = document.createElement('div');
      resultCard.className = 'result';
      resultCard.innerHTML = `
        <h3>${subjectName}</h3>
        <p>Completed: ${completedPercentage}%</p>
        <div class="loaderBar" style="--progress: ${completedPercentage}%"></div>
        <p>Incomplete: ${incompletePercentage}%</p>
        <div class="loaderBar" style="--progress: ${incompletePercentage}%"></div>
      `;
  
      resultsContainer.appendChild(resultCard);
    });
  }
  