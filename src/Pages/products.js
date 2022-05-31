import Footer from "../components/footer";
import Header from "../components/header";

const ProductPage ={
    render(){
        return /*html*/`
        <div>${Header.render()}</div>
        <div class="bg-white">
            <div>
                <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Sản phẩm </h1>
                    </div>
                    <section aria-labelledby="products-heading" class="pt-6 pb-24">
                        <h2 id="products-heading" class="sr-only">Products</h2>
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <form class="hidden lg:block">
                                <h3 class="text-lg font-medium text-gray-900 space-y-4 pb-2 border-b">Danh mục</h3>
                                <ul class="text-sm font-medium text-gray-900 space-y-4 pb-6 pt-2">
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href=""> Thời trang nữ </a>
                                    </li>
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href=""> Thời trang nam </a>
                                    </li>
                                    <li>
                                        <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href=""> Phụ kiện</a>
                                    </li>
                                </ul>
                                <div class="border-b border-gray-200 py-12">
                                    <h3 class="text-lg font-medium text-gray-900 space-y-4 pb-2 border-b">Sắp xếp</h3>
                                    <ul class="text-sm font-medium text-gray-900 space-y-4 pb-10 pt-2">
                                        <li>
                                            <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Sắp xếp A - Z</a>
                                        </li>
                                        <li>
                                            <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Sắp xếp Z - A</a>
                                        </li>
                                        <li>
                                            <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Sắp xếp theo giá từ thấp - cao</a>
                                        </li>
                                        <li>
                                            <a class='focus:outline-none focus:border-b-4 focus:border-indigo-500' href="">Sắp xếp theo giá từ cao - thấp</a>
                                        </li>
                                    </ul>
                                    <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Lọc</button>
                                </div>
                                
                            </form>
                            <div class="lg:col-span-3">
                                <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                                    <div class="relative">
                                        <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p class="text-xs leading-3 text-gray-800">New</p></div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png" alt="A girl Posing Image" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1550</p>
                                        <p class="font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4">2 colours</p>
                                    </div>
                                    <div class="relative">
                                        <div class="bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1"><p class="text-white fonr-normal text-base leading-4">XS , S , M , L</p></div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/m6V0MzR/gs-Kd-Pc-Iye-Gg-1.png" alt="A girl wearing white suit and googgles" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                    </div>
                                    <div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/6g1KhhF/pexels-django-li-2956641-1.png" alt="A girl wearing dark blue suit and posing" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1550</p>
                                        <p class="font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4">2 colours</p>
                                    </div>
                                    <div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/KLDN7Vt/gbarkz-vq-Knu-G8-Ga-Qc-unsplash.png" alt="A girl posing and wearing white suit" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                    
                                        <p class="font-normal text-xl dark:text-white leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                    </div>
                                    <div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/5vxgf7V/pexels-quang-anh-ha-nguyen-884979-1.png" alt="Girl posing for an Image" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                    
                                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                    </div>
                                    <div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/HKFXSrQ/pietra-schwarzler-l-SLq-x-Qd-FNI-unsplash.png" alt="A blonde girl posing" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                    
                                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                                        <p class="font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                                        <p class="font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4">2 colours</p>
                                    </div>
                                    <div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png" alt="A girl wearing white suit posing in desert" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                    
                                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                    </div>
                                    <div>
                                        <div class="relative group">
                                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                            <img class="w-full" src="https://i.ibb.co/mbrk1DK/pexels-h-i-nguy-n-4034532.png" alt="Girl wearing pink suit posing" />
                                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                            </div>
                                        </div>
                    
                                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
        </div >
        <div>${Footer.render()}</div>
        `
    }
}
export default ProductPage;

