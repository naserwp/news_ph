
const fetchCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((res) => res.json())
    .then((data) => showCategories(data.data));
}


const showCategories = (data) =>{
    // capture categories container to append all the category links
    const categoriesContainer = document.getElementById('categories-container')

    data.news_category.forEach(singleCategory => {  //forEach kora hoyeche.
        //step-2 || += er mane hocche, protibar 1ta kore categories barbe 
        /*categoriesContainer.innerHTML += `<a href="" class="nav-link">${singleCategory.category_name}</a>`;
        */

        //step-2 (recomanded) || here is another way to make plus += it's alternative
        
        let linkContainer = document.createElement('p');
        // linkContainer.innerHTML = `<a href="#" class="nav-link" onclick="fetchCategoryNews('${singleCategory.category_id}')">${singleCategory.category_name}</a>`;
        linkContainer.innerHTML = `<a href="#" class="nav-link" onclick="fetchCategoryNews('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a>`;

        categoriesContainer.appendChild(linkContainer)
        
        console.log(singleCategory);
    });
    console.log(data)
}
// fetchCategories();

// fetch all newses available in a category 
const fetchCategoryNews = (category_id, category_name) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data, category_name))
    console.log(url);
}

const showAllNews = (data, category_name) =>{
    document.getElementById('news-count').innerText = data.length; // items number 
    document.getElementById('category-name').innerText = category_name; // category name
    console.log(data.length, category_name);
}

