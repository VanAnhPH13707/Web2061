import { apiGet } from "../../api";
const Admin = {
    render:async function(){
        const data = await apiGet('/books')
        return /*html*/ `
        <div class="min-h-full">

            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h3 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Quản lý sản phẩm
                        </h3>
                        </div>
                    </div>
                </div>
            </header>
            <main>
            </main>
          </div>
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sách</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tác giả</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                ${data.map(function(item,index){
                    return /*html*/ `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">${index}</td>
                        <td class="px-6 py-4 "><a href="/admin/books/${item.id}">${item.name}</a></td>
                        <td class="px-6 py-4 whitespace-nowrap">${item.authors?.[0].name?item.authors?.[0].name:""}</td>
                        <td class="grid grid-cols-9 gap-2 px-6 py-4 whitespace-nowrap">${item.images.map(book => /*html*/`<img class ="w-16" src ="${book.base_url}">`)}</td>
                        <td class="px-6 py-4 whitespace-nowrap">${item.list_price}</td>
                    </tr>
                    `
                }).join('')}
                   
                </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        `
    }
}
    
export default Admin;