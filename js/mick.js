const btnsearch = document.querySelector(".btnSearch");

function fn(){
  //alert("hi");
  let search = document.getElementById("searchiinpu").value;
// alert(search);

let newSeach = search.split(" ").join('')
//fetch api

fetch("https://api.github.com/users/"+newSeach)
.then((result)=>result.json())
.then((data)=>{
    //console.log(data) 
    document.getElementById("myimage").innerHTML = `<img src="${data.avatar_url}" alt="">`
    document.getElementById("name").innerHTML =`${data.name}`;
    document.getElementById("username").innerHTML =`@${data.login}`;
    document.getElementById("date").innerHTML =`${data.created_at}`;
    document.getElementById("bio").innerHTML =`${data.bio}`;
    document.getElementById("repos").innerHTML =`${data.public_repos}`;
    document.getElementById("followers").innerHTML =`${data.followers}`;
    document.getElementById("following").innerHTML =`${data.following}`;
    document.getElementById("location").innerHTML =`${data.location}`;
    document.getElementById("twitter").innerHTML =`<a style="color:white" target="_blank" href="https://twittter.com/${data.twitter_username}">${data.twitter_username}</a>`;

    document.getElementById("github").innerHTML =`<a style="color:white" target="_blank" href="https://github.com/${data.login}">${data.login}</a>`;
})



// alert(newSeach)
}

btnsearch.addEventListener("click", fn);