let usersData = [];

document.getElementById("getUser").addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();

  usersData = result;

  document.getElementById("users").textContent = "";

  usersData.forEach((person) => {
    const li = document.createElement("li");

    li.textContent =
      "名前: " + person.name +
      " / メール: " + person.email +
      " / 会社: " + person.company.name;

    document.getElementById("users").appendChild(li);
  });
});

document.getElementById("search").addEventListener("click", () => {
  const userName = document.getElementById("userName").value;

  const searchedUsers = usersData.filter((user) => {
    return user.name.includes(userName);
  });

  document.getElementById("users").innerHTML = "";

  if (searchedUsers.length >= 1) {
    searchedUsers.forEach((user) => {
      const li = document.createElement("li");

      li.textContent =
        "名前: " + user.name +
        " / メール: " + user.email +
        " / 会社: " + user.company.name;

      document.getElementById("users").appendChild(li);
    });
  } else {
    document.getElementById("users").textContent =
      "該当するユーザーはいません";
  }
});