import { apiGet, apiPut } from "../../api"
import reRender from "../../ultilities/reRender";
const Management = {
  render: async function (param) {

    const book = await apiGet(`/books/${param.data.id}`)
    //console.log(book)
    return /*html*/ `
    <div class="container mx-auto">
                <h2 class="text-2xl text-primary-dark mt-5">Admin/Book </h2>
                <div class="grid grid-cols-2 mt-3">
                    <form class="w-full max-w-lg" >
                        <div class="w-full">
                            <label class="font-bold">Categories</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="categories-name" 
                            type="text" 
                            value="${book.categories?.name}"
                            >
                        </div>
                        <div class="w-full">
                            <label class="font-bold">Tên sản phẩm</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="book-name" 
                            type="text" 
                            placeholder="Jane"
                            value="${book.name}"
                            >
                        </div>
                        <div class="w-full">
                            <label class="font-bold">Tác giả</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="book-authors" 
                            type="text" 
                            placeholder="Jane"
                            value="${book.authors?.[0].name}"
                            >
                        </div>
                        <div class="w-full">
                            <label class="font-bold">Giá</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="book-price" 
                            type="text" 
                            placeholder="Jane"
                            value="${book.original_price}"
                            >
                        </div>
                        <div class="w-full">
                            <label class="font-bold">SellerPrice</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="SellerPrice" 
                            type="number" 
                            value="${book.current_seller.price}"
                            >
                        </div>
                        <div class="w-full">
                            <label class="font-bold">Số sao</label>
                            <input class="block w-full border rounded py-3 px-4 mb-3"
                            id="rating_average" 
                            type="number" 
                            value="${book.rating_average}"
                            min="0"
                            max="5"
                            >
                        </div>
                        <div class="w-full mt-3">
                            <label class="font-bold">Mô tả ngắn</label>
                            <textarea class="block w-full border rounded py-3 px-4 mb-3" 
                            id="book-shortDescription" 
                            cols="50"
                            rows="5"
                            type="text">${book.short_description}</textarea>
                        </div>
                        <div>
                            <label class="font-bold">Mô tả dài</label>
                            <textarea
                            id="book-description" 
                            rows="10"
                            class="block w-full border"
                            >
                                ${book.description}
                            </textarea>
                        </div>
                        <div class="mt-3">
                            <label class="font-bold">Ẩn sản phẩm</label>
                            <input id="book-isHidden" type="checkbox" ${book.isHidden ? 'checked' : ""}>
                        </div>
                        <button id="book-submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-3">Sửa</button>
                    </form>
                    <div >
                        <img src="${book.images[0].base_url}" alt="image">
                       <div class="grid grid-cols-7 gap-5 pt-10">
                            ${book.images.map(i => `<img class="w-3/4" src="${i.base_url}" alt="image">`)}
                       </div>
                    </div>
                </div>
            </div>
    `;
  },
  afterRender: async function(param){
      const id = param.data.id
      const newData = await apiGet(`/books/${id}`)
      const btnSubmit = document.querySelector("#book-submit")
      //    console.log(btnSubmit);
      btnSubmit.addEventListener("click", function(e){
        e.preventDefault()
        newData.name = document.querySelector("#book-name").value
        newData.categories = document.querySelector("#categories-name").value
        newData.authors = document.querySelector("#book-authors").value
        newData.original_price = document.querySelector("#book-price").value
        newData.current_seller = document.querySelector("#SellerPrice").value
        newData.rating_average = document.querySelector("#rating_average").value
        newData.short_description = document.querySelector("#book-shortDescription").value
        newData.description = document.querySelector("#book-description").value
        apiPut(`/books/${id}`, newData)
        .then(res => alert('Cập nhật thành công'))
        .catch(console.log(err))
      })
  }
  
}


export default Management;