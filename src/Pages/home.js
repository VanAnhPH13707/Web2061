import {apiGet,percent} from '../api'
import reRender from '../ultilities/reRender'

const Home = {
    render: async function() {
        let data = await apiGet('/books')
        const paramUrl = new URLSearchParams(location.search)
        // console.log(paramUrl.get('search'))
        const search = paramUrl.get('search')
        if (search) {
            data = await apiGet(`/books?q=${search}`)
        } else {
            data = await apiGet(`/books`)
        }
        let categories = data.map(i => i.categories?.name)
        console.log(categories)
        categories = categories.filter(function(item, pos) {
            return categories.indexOf(item) == pos;
        })
        
        return /*html*/`
        <div class="bg-gray-100">
            <div class="pt-10 py-10">
                <main class="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 ">
                    <section aria-labelledby="products-heading" class="pt-6 pb-24">
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <form class="hidden lg:block border-r border-gray-200 ">
                                <h3 class="text-lg font-medium text-gray-900 space-y-4 pb-2 border-b">Danh mục</h3>
                                <ul class="text-sm font-medium text-gray-900 space-y-4 pb-6 pt-2">
                                ${categories.map(cate => /*html*/` 
                            
                                    <li>
                                      <a href="" class='data-categories="${cate}" focus:outline-none focus:border-b-4 focus:border-indigo-500 hover:text-blue-600' >${cate}</a>
                                    </li>
                                    `).join('')} 
                                    
                                </ul>
                                <div class="">
                                    <h3 class="text-lg font-medium text-gray-900 space-y-4 pb-2 border-b">Nơi bán</h3>
                                    <div>
                                        <div class="">
                                            <div class="pt-4">
                                                <input class="w-4 h-4 mr-2" type="checkbox" id="Leather" name="Leather" value="Leather" />
                                                <div class="inline-block">
                                                    <div class="flex space-x-6 justify-center items-center">
                                                        <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600">Hà Nội</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <input class="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="Cotton" value="Cotton" />
                                                <div class="inline-block">
                                                    <div class="flex space-x-6 justify-center items-center">
                                                        <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" >Hồ Chí Minh</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <input class="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="Fabric" value="Fabric" />
                                                <div class="inline-block">
                                                    <div class="flex space-x-6 justify-center items-center">
                                                        <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" >Đà Nẵng</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <input class="w-4 h-4 mr-2" type="checkbox" id="Crocodile" name="Crocodile" value="Crocodile" />
                                                <div class="inline-block">
                                                    <div class="flex space-x-6 justify-center items-center">
                                                        <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" >Thanh Hóa</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <input class="w-4 h-4 mr-2" type="checkbox" id="Wool" name="Wool" value="Wool" />
                                                <div class="inline-block">
                                                    <div class="flex space-x-6 justify-center items-center">
                                                        <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" >Cần Thơ</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <input class="w-4 h-4 mr-2" type="checkbox" id="Wool" name="Wool" value="Wool" />
                                                <div class="inline-block">
                                                    <div class="flex space-x-6 justify-center items-center">
                                                        <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" >Thái Nguyên</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="border-b border-gray-200 py-12">
                                <h3 class="text-lg font-medium text-gray-900 space-y-4 border-b border-gray-200 py-2">Đánh giá</h3>
                                    <div class="flex pt-4 ">
                                        <p style="font-size:12px;display:inline-block flex" class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                        </p>
                                        <span style="font-size:12px;display:inline-block " class="pl-2"> từ 5 sao</span>
                                    </div>
                                    <div class="flex">
                                        <p style="font-size:12px;display:inline-block flex" class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#b8b8b8" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                        </p>
                                        <span style="font-size:12px;display:inline-block " class="pl-2"> từ 4 sao</span>
                                    </div>
                                    <div class="flex">
                                        <p style="font-size:12px;display:inline-block flex" class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#b8b8b8" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#b8b8b8" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
                                        </p>
                                        <span style="font-size:12px;display:inline-block " class="pl-2"> từ 3 sao</span>
                                    </div>
                                </div>
                            </form>
                            <div class="w-screen">
                                <div class="" >
                                    <a href=""><img class="max-w-4xl text-center pl-1 " src="https://salt.tikicdn.com/cache/w1080/ts/banner/1a/e3/58/db35d8d6abed8e09d693fdf4b75c22a6.jpg.webp" alt=""/></a>
                                </div>
                                <ul class="w-screen flex py-6 ">
                                    <li><a href="" class="px-4 text-blue-800 hover:text-blue-600 border-b-2 border-blue-800">Phổ biến</a></li>
                                    <li><a href="" class="px-4 text-black hover:text-blue-600 hover:border-b-2 hover: border-blue-800">Bán chạy</a></li>
                                    <li><a href="" class="px-4 text-black hover:text-blue-600 hover:border-b-2 hover: border-blue-800">Hàng mới</a></li>
                                    <li><a href="" class="px-4 text-black hover:text-blue-600 hover:border-b-2 hover: border-blue-800">Giá thấp</a></li>
                                    <li><a href="" class="px-4 text-black hover:text-blue-600 hover:border-b-2 hover: border-blue-800">Giá cao</a></li>
                                </ul>
                                <div>
            
                                <div class="w-3/5 grid grid-cols-4 gap-4 pl-1">
                                    ${data.map(book => /*html*/`                 
                                    <div class="px-7 py-3 border-2 hover:shadow-md"> 
                                        <a href="/books/${book.id}">
                                            <div class=""><img class="w-60 h-40" src="${book.images[0].base_url}" alt=""></div>
                                            <p class="py-2 text-left text-sm">${book.name}</p>
                                            <p class="text-left text-black ">${book.original_price} 
                                                <span class="underline">đ</span>
                                                <span class="rounded border-2 bg-white text-sm text-red-500 border-red-500" >
                                                        ${percent((100 - ((book.current_seller.price / book.original_price) * 100)).toFixed())}
                                                </span>
                                            </p>
                                        </a>
                                    </div>
                                    `).join('')}    
                                           
                                </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
            <div class="pb-10 text-center">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </a>
                
                    <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                    <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                    <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    </a>
                </nav>
            </div>
        </div >



        
        `
    },
    afterRender() {
        const btnElements = document.querySelectorAll('.categories-btn')
            btnElements.addEventListener('click', function(e) {
                
                
                history.replaceState(null, null, ``);
                reRender('#app', Home)
            })

        
        
    }
    
}

export default Home