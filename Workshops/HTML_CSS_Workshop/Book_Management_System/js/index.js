var books = [{id:1,name:'The Quast of Missing Map ',author:'Trilok Shende',price:100},
             {id:2,name:'Harry Potter',author:'Nilesh Zanzal',price:200},
            ]

function addBook(){
    document.getElementById('view').innerHTML = `   <form >
                                                        <div>
                                                            <h2>Add New Book</h2>
                                                        </div>
                                                        <div>
                                                            Name of the Book : <input type="text"><br><br>
                                                            Author of the Book : <input type="text"><br><br>
                                                            Price of the Book : <input type="number"><br>
                                                            <button type="submit">Submit</button>
                                                        </div>
                                                    </form> `
} 
function removeBook(){
    document.getElementById('view').innerHTML = `   <form >
                                                        <div>
                                                            <h2>Remove Book</h2>
                                                        </div>
                                                        <div class="form">
                                                            Name of the Book : <input type="text"><br><br>
                                                            Author of the Book : <input type="text"><br><br>
                                                            <button type="submit">Submit</button><br>
                                                        </div>
                                                    </form>`
} 
function editBook(){
    document.getElementById('view').innerHTML = `   <form >
                                                        <div>
                                                            <h2>Edit Book</h2>
                                                        </div>
                                                        <div>
                                                            Name of the Book : <input type="text"><br><br>
                                                            Author of the Book : <input type="text"><br><br>
                                                            Price of the Book : <input type="number"><br>
                                                            <button type="submit">Submit</button>
                                                        </div>
                                                    </form>`
} 
function listOfBooks(){
    document.getElementById('view').innerHTML = `   <div>
                                                        <h2>List Of Books</h2>
                                                    </div>
                                                    <div>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <td>Id</td>
                                                                    <td>Name of Book</td>
                                                                    <td>Author</td>
                                                                    <td>Price</td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>`
} 




