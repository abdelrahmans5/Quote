var bookmarName = document.getElementById('bookmarkName')
var bookmarURL = document.getElementById('bookmarkURL')
var bookmarks = []

function isValidURL(url) {
    var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // http or https
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})" + // domain name
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment
        "i"
    );
    return pattern.test(url);
}

if(localStorage.getItem('bookmarks') != null){
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    displayBooks()
}
function  addBookmark () {
    var bookmark = {
        name : bookmarName.value,
        url : bookmarURL.value
    }

    var urlError = document.getElementById("urlError");

    if (!isValidURL(bookmark.url)) {
        urlError.classList.remove("d-none");
        return;
    } else {
        urlError.classList.add("d-none");
    }

    bookmarks.push(bookmark)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    displayBooks()
    clearData()
}
function clearData () {
    bookmarName.value=null
    bookmarURL.value=null
}
function displayBooks () {
    cartona = ``
    for (var i=0 ; i < bookmarks.length ; i++ ){
        cartona += `
            <tr>
                <td>${i}</td>
                <td>${bookmarks[i].name}</td>
                <td><a href="${bookmarks[i].url}" target="_blank" class="btn btn-success btn-sm">Visit</a></td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteBookmark(${i})">Delete</button></td>
            </tr>
        `
    }
    document.getElementById("bookmarkList").innerHTML = cartona
}
function deleteBookmark(deletedIndex){
    bookmarks.splice(deletedIndex,1)
    displayBooks()
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

