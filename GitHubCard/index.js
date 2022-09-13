import axios from "axios";

const entryPoint = document.querySelector(".cards")
const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

function userData(user){
  const url = `https://api.github.com/users/${user}`
  axios.get(url)
  .then(rep => {
    console.log(rep.data)
    console.log(cardMaker(rep.data));
    entryPoint.appendChild(cardMaker(rep.data))
  })
  .catch(err => {
    console.log(err);
  })
  .finally()
}

function cardMaker(dataObj){
  const card = document.createElement("div")
  const image = document.createElement("img")
  const info = document.createElement("div")
  const realName = document.createElement("h3")
  const userName = document.createElement("p")
  const loc = document.createElement("p")
  const profile = document.createElement("p")
  const link = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")
  
  card.classList.add("card")
  info.classList.add("card-info")
  realName.classList.add("name")
  userName.classList.add("username")
  
  image.src = dataObj.avatar_url
  realName.textContent = dataObj.name
  userName.textContent = dataObj.login
  loc.textContent = `Location: ${dataObj.location}`
  profile.textContent = "Profile: "
  link.href = dataObj.html_url
  link.textContent = dataObj.html_url
  followers.textContent = `Followers: ${dataObj.followers}`
  following.textContent = `Following: ${dataObj.following}`
  bio.textContent = `Bio: ${dataObj.bio}`

  card.appendChild(image)
  card.appendChild(info)
  info.appendChild(realName)
  info.appendChild(userName)
  info.appendChild(loc)
  info.appendChild(profile)
  profile.appendChild(link)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)
  return card
}

userData("yem1546")
followersArray.forEach(user => userData(user))
