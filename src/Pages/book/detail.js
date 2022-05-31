import { apiGet } from "../../api"
import { percent } from "../../api"
const BookDetail = {
  render: async function (param) {
    const book = await apiGet(`/books/${param.data.id}`)
    console.log(book)
    return /*html*/ `
    <div class="bg-gray-100">
      <div class="pt-10 py-10">
        <main class="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 ">
        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 pl-10">
              <div>
                <img class="w-80 h-96 text-center pr-14 border-r-2" src="${book.image}" alt="">
              </div>
              <div>
              <div class="w-screen flex py-2 ">
                <div class="">
                    <h6 class="text-xs">${book.short_description}</h6>
                    <div class="text-2xl font-light py-3">${book.title}</div>                   
                    <div class="text-4xl font-semibold bg-slate-50 rounded py-5">${book.sale_off}
                      <span class="underline text-[#ff424e]">đ</span>
                      <span class="rounded border-2 bg-white text-sm">
                        ${percent((100 - ((book.sale_off / book.price) * 100)).toFixed())}
                      </span>
                      </div>
                        <p class="font-medium text-base leading-4 text-gray-600 pt-5 ">Số lượng</p>
                        <div class="flex pt-5">
                          <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                            <input id="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />
                          <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                        </div>
                        <button class="focus:outline-none focus:ring-2 hover:bg-red-700 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-red-500 w-60 py-5 lg:mt-10 dark:bg-white dark:text-red-700 dark:hover:bg-red-700"  id="btnAddToCart">Add to cart</button>
                      </div>           
                    </div>
                  </div>
              </div>
             <div class="mt-5 bg-white px-3 py-3">
                        <h2 class="text-xl font-semibold py-3">Thông tin chi tiết</h2>
               <table class="table-auto">
                 <tbody>
                        <tr>
                            <td class="bg-[#efefef] px-4 py-4 ">Công ty phát hành</td>
                            <td class="px-4">${book.publisher}</td>
                        </tr>
                        <tr>
                             <td class="bg-[#efefef] px-4 py-4">Nhà xuất bản</td>
                            <td class="px-4">${book.publisher}</td>
                        </tr>
                        <tr >
                             <td class="bg-[#efefef] px-4 py-4">Loại sách</td>
                            <td class="px-4">${book.categories}</td>
                        </tr>
                 </tbody>
              </table>
             </div>
             <div class="mt-5 bg-white px-3 py-3">
             <h1 class="text-xl font-semibold py-3">Mô Tả Sản Phẩm</h1>
             <div class="">
             ${book.description}
                            
        </div>
        </section>
         </main>
         </div>
         </div>
    `;
  }
}

export default BookDetail