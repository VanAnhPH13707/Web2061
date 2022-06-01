import {apiGet,percent} from '../api'

const Home = {
    render: async function() {
        let data = await apiGet('/books')
        console.log(data)
        return /*html*/`
        <div class="bg-gray-100">
            <div class="pt-10 py-10">
                <main class="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 ">
                    <section aria-labelledby="products-heading" class="pt-6 pb-24">
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <form class="hidden lg:block border-r border-gray-200 ">
                                <h3 class="text-lg font-medium text-gray-900 space-y-4 pb-2 border-b">Danh mục</h3>
                                <ul class="text-sm font-medium text-gray-900 space-y-4 pb-6 pt-2">
                                   
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">English Books</a>
                                    </li>
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Sách tiếng Việt </a>
                                    </li>
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Văn phòng phẩm</a>
                                    </li>
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Tâm lý học </a>
                                    </li>
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Quà lưu niệm </a>
                                    </li>
                                    
                                </ul>
                                <div class="border-b border-gray-200 py-12">
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
                                
                            </form>
                            <div class="w-screen">
                                <div >
                                    <a href=""><img class="max-w-4xl text-center pl-1" src="https://salt.tikicdn.com/cache/w1080/ts/banner/1a/e3/58/db35d8d6abed8e09d693fdf4b75c22a6.jpg.webp" alt=""/></a>
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
                                    ${data.map(item => /*html*/`                 
                                    <div class="px-7 py-3 border-2 hover:shadow-md"> 
                                        <a href="/books/${item.id}">
                                            <div class=""><img src="${item.image}" alt=""></div>
                                            <p class="py-2 text-left text-xs">${item.title}</p>
                                            <p class="font-bold text-left ">${item.price} 
                                                <span class="underline">đ</span>
                                                <span class="" >
                                                        ${percent((100-((item.sale_off/item.price)*100)).toFixed())}
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
        </div >
        `
    }
}

export default Home