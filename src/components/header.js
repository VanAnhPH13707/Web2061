import Home from "../pages/home";
import reRender from "../ultilities/reRender";
const Header = {
    render: function () {
        return /*html*/`
        <div>
            <div class="bg-sky-500 ">
                <nav class="xl:container xl:mx-auto sm:py-4 sm:px-7  px-4">
                    <div class="flex justify-between ">
                        <div class=" flex space-x-3 items-center">
                           <a href="/"> <img class=" font-normal w-30 h-10 leading-6 text-gray-800 dark:text-white " src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png " /></a>
                        </div>
                        <div class=" pt-2">
                            <form method="get" class="relative flex max-w-[746px] w-[100%] justify-end">
                                <input
                                class="max-w-[626px] placeholder:italic placeholder:text-sm outline-none block bg-white w-screen rounded-l py-3 pl-9 pr-3 shadow-sm sm:text-sm"
                                placeholder="Search for anything..."
                                type="text"
                                name="search"
                                id="header-input-search"
                                />
                                <button class="
                                bg-blue-500 px-5 flex content-center 
                                items-center text-[#fff] cursor-pointer
                                hover:bg-opacity-80 border-2 border-bg-search rounded-r"
                                id="header-btn-search"
                                >Search</button>
                            </form>
                        </div>
                        <div class="flex justify-between">
                            
                            <div class="pl-2 pt-1 md:block ">
                                <div class=" flex flex-col justify-center">
                                    <div class=" flex items-center justify-center">
                                        <div class=" relative inline-block text-left dropdown">
                                            <span class=" rounded-md shadow-sm">
                                                <button class=" inline-flex justify-center bg-sky-500 w-full px-4 py-3 text-sm font-medium leading-5 text-black transition duration-150 ease-in-out  rounded-md hover:text-black focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                                    <p class="flex ">
                                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                        <span class="pt-1.5 text-white"> Tài khoản</span>
                                                    </p>
                                                    <svg class="w-5 h-5 ml-2 -mr-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </span>
                                            <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                                <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                                    aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117">
                                                    <div class="py-1">
                                                        <a href="/admin" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">Admin</a>
                                                    </div>
                                                    <div class="py-1">
                                                        <a href="" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">Đăng kí</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center md:block">
                                <a class="relative text-amber-500 hover:text-amber-500" href="">
                                    <svg class="h-8 w-8 mt-5 ml-1 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span class="absolute top-1 left-2 rounded-full bg-indigo-500 text-white p-1 text-xs">
                                </a>
                            </div>
                        </div>

                        

                        

                    </div>
                </nav>
            </div>

        </div>


        `
    },
    afterRender() {
        const btnSearchElement = document.querySelector('#header-btn-search')
        const inputSearchElement = document.querySelector('#header-input-search')
        btnSearchElement.addEventListener('click', function(e) {
            e.preventDefault()
            console.log(inputSearchElement.value)
            history.replaceState(null, null, `?search=${inputSearchElement.value}`);
            reRender('#app', Home)
        })
      },
}

export default Header;
