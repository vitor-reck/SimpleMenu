// Selecionando os 3 botões e container/menu
var btnPosts = document.querySelector(".posts")
    btnAlbums = document.querySelector(".albums")
    btnTodos = document.querySelector(".todos")
    container = document.querySelector(".container")
    menu = document.querySelector(".menu")

var btnMenu = document.createElement("button")
    {
        btnMenu.innerText = "VOLTAR AO MENU"
        btnMenu.style.position = "relative"
    }

btnPosts.onclick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(post => {
        
        var tablePosts = document.createElement("table")
            {
                tablePosts.style.backgroundColor = "#F1EEF3"
                tablePosts.style.boxShadow = "5px 5px #000000"
                tablePosts.style.borderRadius = "10px"
                tablePosts.style.padding = "3rem"
            }
            thPosts = document.createElement("th")
                {
                    thPosts.innerText = "POSTAGENS"
                    thPosts.style.position = "relative"
                    thPosts.style.bottom = "1rem"
                }    
            tfootPosts = document.createElement("tfoot")
                {
                    btnMenu.style.left = "11.1rem"
                }

        // Alterar display do menu
        menu.style.display = "none"
            {
                menu.style.transitionDuration = "0.3s"
            }

        container.append(tablePosts)
        tablePosts.append(thPosts)

        for (let i = 0; i < 5; i++) {
            var titleNode = document.createTextNode(post[i].title)
                contentNode = document.createTextNode(post[i].body)            
                tableRow = tablePosts.insertRow()
                tableData = tableRow.insertCell()
                    tableData.style.cursor = "pointer"            
                
                tableData.appendChild(titleNode)
                // tableData.appendChild(contentNode)
                
                tableData.onclick = () => {                  
                    fetch(`https://jsonplaceholder.typicode.com/posts/${i+1}/comments`)
                    .then(res => res.json())
                    .then(comment => {
                        
                        console.log(comment)
                        var author = document.createElement("p")
                                {
                                    author.style.color = "#79439B"
                                    author.style.fontWeight = "700"
                                }
                            commentary = document.createElement("p")
                                {
                                    commentary.style.fontStyle = "italic"
                                }
                        author.innerText = comment[i].name
                        commentary.innerText = comment[i].body
                        postComments.append(author, commentary)
                    })
                    
                    tablePosts.style.display = "none"

                    var postContent = document.createElement("div")
                            {
                                postContent.style.backgroundColor = "#F1EEF3"
                                postContent.style.boxShadow = "5px 5px #000000"
                                postContent.style.borderRadius = "10px"
                                postContent.style.padding = "3rem"
                                postContent.style.cursor = "pointer"
                                postContent.style.width = "75%"
                                postContent.style.justifyContent = "center"
                            }        
                        postComments = document.createElement("div")
                            {
                                postComments.style.cursor = "pointer"
                                postComments.style.width = "75%"
                                postComments.style.justifyContent = "center"
                            }    
                        title = document.createElement("h1")
                            {
                                title.innerText = post[i].title
                                title.style.marginBottom = "1rem"
                            }    
                        content = document.createElement("p")
                            {
                                content.innerText = post[i].body
                                content.style.marginBottom = "1rem"
                            }    
        
                    postContent.append(title)        
                    postContent.append(content)
                    postContent.append(postComments)
                    container.append(postContent)

                    postContent.onclick = () => {
                        tablePosts.style.display = "block"
                        postContent.remove()
                    }
                }
            }
            
            tfootPosts.append(btnMenu)
            tablePosts.append(tfootPosts)
        })        
}

btnAlbums.onclick = () => {
    var tableAlbums = document.createElement("table")
            {
                tableAlbums.style.backgroundColor = "#F1EEF3"
                tableAlbums.style.boxShadow = "5px 5px #000000"
                tableAlbums.style.borderRadius = "10px"
                tableAlbums.style.padding = "3rem"
            }
        thAlbums = document.createElement("th")
            {
                thAlbums.innerText = "ALBUNS"
                thAlbums.style.position = "relative"
                thAlbums.style.left = "9.8rem"
                thAlbums.style.bottom = "1rem"
            }     
        tfootAlbums = document.createElement("tfoot")
            {
                btnMenu.style.left = "9.8rem"
            }
    
    // Alterar display do menu
    menu.style.display = "none"
    
    container.append(tableAlbums)
    tableAlbums.append(thAlbums)
    tableRow = tableAlbums.insertRow()

    for (let i = 0; i < 3; i++) {
        fetch(`https://jsonplaceholder.typicode.com/albums/${i+1}/photos`)
        .then(res => res.json())
        .then(albumCover => { 
            
            var tableData = tableRow.insertCell()
                albumThumb = document.createElement("img")
                    {
                        albumThumb.style.border = "3px solid #000000"
                        albumThumb.style.borderRadius = "3px"
                    }    
                albumThumb.src = albumCover[0].thumbnailUrl
                
            tableData.appendChild(albumThumb)

        })
    }

    tfootAlbums.append(btnMenu)
    tableAlbums.append(tfootAlbums)
}

btnTodos.onclick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(todo => {
        
        var tableTodos = document.createElement("table")
                {
                    tableTodos.style.backgroundColor = "#F1EEF3"
                    tableTodos.style.boxShadow = "5px 5px #000000"
                    tableTodos.style.borderRadius = "10px"
                    tableTodos.style.padding = "3rem"
                }
            thTodos = document.createElement("th")
                {
                    thTodos.innerText = "TO DOS"
                }    
            tfootTodos = document.createElement("tfoot")
                {
                    btnMenu.style.left = "9.8rem"
                }

        // Alterar display do menu
        menu.style.display = "none"

        container.append(tableTodos)
        tableTodos.append(thTodos)

        for (let i = 0; i < 5; i++) {         
            if(todo[i].completed == false) {
                var dataNode = document.createTextNode(`${todo[i].title} ⬛`)               
                    tableRow = tableTodos.insertRow()
                    tableData = tableRow.insertCell()
                        // tableData.style.cursor = "pointer"
    
                tableData.appendChild(dataNode)
            }
            else {
                var dataNode = document.createTextNode(`${todo[i].title} ✅`)              
                    tableRow = tableTodos.insertRow()
                    tableData = tableRow.insertCell()
                        // tableData.style.cursor = "pointer"                    
    
                tableData.appendChild(dataNode)
            }
        }

        tfootTodos.append(btnMenu)
        tableTodos.append(tfootTodos)
    })
}

btnMenu.onclick = () => {
    var table = document.querySelector("table")
    table.remove()
    btnMenu.remove()

    menu.style.display = "flex"
}