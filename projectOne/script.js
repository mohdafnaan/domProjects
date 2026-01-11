let statuss = document.querySelector("h5")

let addFriend = document.querySelector("#add")

let friend = 0;

let img = document.querySelector("img")

addFriend.addEventListener("click",()=>{
    if(friend == 0){
    statuss.innerHTML = "Friends"
    addFriend.innerHTML = "Remove"
    addFriend.style.backgroundColor = "grey"
    statuss.style.color = "green"
    friend = 1;
    img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5CNpbCZwUTqWxdSEWknRJwDcy9o4LzcyXkA&s") 
}
    else{
    statuss.innerHTML = "Stranger"
    statuss.style.color = "red"
    friend = 0
    addFriend.innerHTML = "Add Friend"
    addFriend.style.backgroundColor = "cadetblue"
    img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr7IjHOfBjEQMFYPt8ZsBh2iD2WqTw5gmEQhhULtetdRcr-8NSEn32PBOt_1DgH1FV4kH9k3GR7-AsfPoNbHf1BW6iIHTQS3wrdNeEkUk&s=10")
    }
})