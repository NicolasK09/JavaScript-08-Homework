fetch('https://reqres.in/api/unknown')
  .then(response => response.json())
  .then(data => {
    const resultsContainer = document.getElementById('results');
    const results = data.data;

    results.forEach(result => {
      const name = result.name;
      const color = result.color;

      const resultElement = document.createElement('div');
      resultElement.classList.add('result');
      resultElement.textContent = `Name: ${name}, Color: ${color}`;

      resultsContainer.appendChild(resultElement);
    });
  })
  .catch(error => console.log(error));

  function loadUsers() {
    var xhr = new XMLHttpRequest();
    var url = "https://reqres.in/api/users?page=2";
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var users = response.data;
  
        var usersList = document.getElementById("users-list");
  
        for (var i = 0; i < users.length; i++) {
          var user = users[i];
          var listItem = document.createElement("li");
  
          var nameElement = document.createElement("p");
          nameElement.classList.add("name");
          nameElement.innerHTML = "Name: " + user.first_name;
  
          var lastNameElement = document.createElement("p");
          lastNameElement.innerHTML = "Surname: " + user.last_name;
  
          var emailElement = document.createElement("p");
          emailElement.classList.add("email");
          emailElement.innerHTML = "E-mail: " + user.email;
  
          listItem.appendChild(nameElement);
          listItem.appendChild(lastNameElement);
          listItem.appendChild(emailElement);
  
          usersList.appendChild(listItem);
        }
      }
    };
  
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  loadUsers();
  


  function navigateToNextPage() {
    if (currentPage < totalPages) {
      currentPage++;

    } else {

      console.log("You are in the last page");
    }
  }
  
  function navigateToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
    } else {

      console.log("You are in the first page");
    }
  }
  