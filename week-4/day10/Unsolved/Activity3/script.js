var tagName = prompt ("Please enter an html tag (ex. h1, h2, p, div);","enter tag");

if (tagName !== "These are my favorite food" && tagName !== "Food 1, Food 2, and Food 3" && tagName !== "main")    
    alert("please enter a valid tag");
} 
else {
    var tag = document.createElement (tagName);
    tag.textContent = "This was made via prompts. It's a " + tagName;

    var mainEl = document.querySelector ("#main");
    mainEl.appendChild(tag);
}

var nextTag = confirm ("Would like to add another tag");
if (nextTag ===true) {
    var secondTagName = prompt ("Please enter another HTML tag (ex. h1, h2, p, div):", "enter tag here")
    if secondTagName !== "h1" && secondTagName !=="h2" && secondTagName !== "p" && secondTagName !== "div")
    alert ("please enter a valid tag");
} 
else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tags via rpompts, It's a " + secondTagName;
    document.body.appendChild(secondTag);
}
}