let usersData = []; 

function displayUsers(users) {
  document.getElementById("users").innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");

    li.textContent =
      "名前: " + user.name +
      " / メール: " + user.email +
      " / 会社: " + user.company.name;

    document.getElementById("users").appendChild(li);
  });
}

document.getElementById("getUser").addEventListener("click", async () => {
  try {
const response = await fetch("https://jsonplaceholder.typicode.com/users");

if (!response.ok) {
  throw new Error("ユーザー情報の取得に失敗しました");
}

const result = await response.json(); 
  
  usersData = result;  
  
 displayUsers(usersData); 
  } catch (error) {
document.getElementById("users").textContent = "ユーザー情報の取得に失敗しました";
  }
});
 
document.getElementById("search").addEventListener("click", () => { 
  const userName = document.getElementById("userName").value; 
 
  const searchedUsers = usersData.filter((user) => { 
    return user.name.includes(userName); 
  }); 
 
  if (searchedUsers.length >= 1) { 
    displayUsers(searchedUsers);
  } else { 
    document.getElementById("users").textContent = 
      "該当するユーザーはいません"; 
  } 
});