import { apiGet } from "../../api"
import { percent } from "../../api"
const BookDetail = {
  render: async function (param) {
    let data = await apiGet('/books')
    const book = await apiGet(`/books/${param.data.id}`)
    
    const categoriesname = book.categories.name
    
    const product = await apiGet(`/books/?categories.name=${categoriesname}`)
        
    console.log(categoriesname)
    return /*html*/ `
      <div class="bg-gray-100 ">
        <div class="pt-10 py-5">
          <main class="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" class="pt-6 pb-14">
              <div class="w-7xl flex">
                <div class="w-4xl">
                  <img class="w-96 h-80 pr-8 border-r-2" src="${book.images[0].base_url}" alt="">
                    <div class=" ">
                        <div class="flex justify-center items-center py-4 pr-14">
                          ${book.images.map(item => /*html*/`<img class="w-16"  src ="${item.base_url}">`)}
                        </div>
                    </div>
                </div>
                <div class="pl-14">
                  <div class=" py-2">
                    <div class="">
                      <div class="text-2xl font-light py-3">${book.name}</div> 
                      <h6 class="text-sm px-3">Tác giả: <a  class="text-[#6d9ae2]"href="#">${book.authors?.[0].name}</a></h6>
                      <p class=" text-xs  py-5">${book.short_description}</p> 
                      <div class="grid grid-cols-2 gap-2">                 
                          <div>
                            <div class="text-2xl font-semibold text-[#ff424e] bg-slate-50 rounded py-5 pl-5">${book.original_price}
                              <span class="underline text-[#ff424e]">đ</span>
                              <span class="rounded border-2 bg-white text-sm">
                                ${percent((100 - ((book.current_seller.price / book.original_price) * 100)).toFixed())}
                              </span>
                            </div>
                            <div class="style__StyledCoupon-sc-kdneqc-0 loFwXW coupon" data-view-id="pdp_main_discount_coupon" id="ma-giam-gia">
                              <div class="coupon__text font-bold mt-3 border-t py-3">14 Mã Giảm Giá</div>
                                <div class="coupon__tags flex border-b py-3">
                                  <div class="h-7 border-2 rounded-lg mr-3 border-blue-500  px-2 text-xs text-blue-500 pt-1">Hoàn 25K Xu</div>
                                  <div class="h-7 border-2 rounded-lg mr-3 border-blue-500  px-2 text-xs text-blue-500 pt-1">Giảm giá 20k</div>
                                  <div class="h-7 border-2 rounded-lg mr-3 border-blue-500  px-2 text-xs text-blue-500 pt-1">Giảm giá 30k</div>
                                  <img class="view-more-coupon h-6 pt-1" src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png">
                                </div>
                              </div>
                            </div>
                            
                          <div class="style__StyledCurrentSeller-sc-i5oomf-0 bisGJP w-80 border-2 rounded-lg ml-10">
                            <div class="style__StyledSellerWidget-sc-kd90zt-0 bTlnnR justify-center">
                              <div class="seller-info flex pl-3">
                                <a class="overview flex" href="https://tiki.vn/cua-hang/tram-doc?source_screen=product_detail&amp;source_engine=organic">
                                  <picture class="webpimg-container">
                                    <source type="image/webp" srcset="https://vcdn.tikicdn.com/cache/w100/ts/seller/e7/14/4f/28b5867c313dc247494291d77cf3910f.jpg.webp">
                                    <img class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo logo" src="https://vcdn.tikicdn.com/cache/w100/ts/seller/e7/14/4f/28b5867c313dc247494291d77cf3910f.jpg" style="width: 44px;">
                                  </picture>
                                  <div class="overview-right ">
                                    <span class="seller-name">
                                      <span>Trạm đọc</span>
                                      <picture class="webpimg-container">
                                        <source type="image/webp" srcset="https://salt.tikicdn.com/cache/w100/ts/upload/fa/9c/2a/6f2fdcc4e24bc81328a73eecdb373bb2.png.webp">
                                        <img class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo badge-img" src="https://salt.tikicdn.com/cache/w100/ts/upload/fa/9c/2a/6f2fdcc4e24bc81328a73eecdb373bb2.png" style="width: 58px; height: 18px;">
                                      </picture>
                                    </span>
                                  </div>
                                </a>
                              </div>
                              <div class="seller-detail flex justify-center pt-5 ">
                                <div class="item review pr-10">
                                  <div class="title flex">
                                    <span class="font-bold">${book.rating_average} / 5</span>
                                    <i style="font-size:12px;display:inline-block flex" class="Stars__Wrapper-sc-1t6kjxa-0 hlnKeG pt-1 "> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12" class="star-icon"><g fill="none" fill-rule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg></i>
                                  </div>
                                  <div class="sub-title pr-2">2.1k+</div> 
                                </div>
                                <div class="border-l-2">
                                </div>
                                <div class="item normal pl-10">
                                  <div class="title">
                                    <span class="font-bold pl-2">2.6k+</span>
                                  </div>
                                  <div class="sub-title ">Theo dõi</div>
                                </div>
                              </div>
                              <div class="seller-action flex justify-center pt-5 border-b py-3 ">
                                <a class="action border-2 rounded-lg flex mr-3 border-blue-500  px-2" data-view-id="pdp_store_seller.view" href="https://tiki.vn/cua-hang/tram-doc?source_screen=product_detail&amp;source_engine=organic">
                                  <img class="w-5 h-5 " src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png">
                                  <span class="text-xs text-blue-500" >Xem Shop</span>
                                </a>
                                <div data-view-id="pdp_store_seller.follow" class="action follow border-2 rounded-lg flex ml-3 border-blue-500  px-2" data-view-label="164395">
                                  <img class="w-5 h-5 " src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png">
                                  <span class="text-xs text-blue-500" >Theo Dõi</span>
                                </div>
                              </div>
                            </div>
                            <div class="style__StyledCustomerBenefits-sc-4w35vj-0 dcoZYl flex justify-center pt-3 pb-3">
                              <div class="benefit-item item-center pr-3">
                                <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png" height="32" width="32">
                                <div class="text-xs">
                                <span>Hoàn tiền<br><b>111%</b><br>nếu hàng giả</span>
                                </div>
                              </div>
                              <div class="benefit-item">
                                <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png" height="32" width="32">
                                <div class="text-xs">
                                <span>Mở hộp<br>kiểm tra<br>nhận hàng</span>
                                </div>
                              </div>
                              <div class="benefit-item pl-3">
                                <img alt="compensation-icon" src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png" height="32" width="32">
                                <div class="text-xs">
                                <span>Đổi trả trong<br><b>30 ngày</b><br>nếu sp lỗi</span>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <p class="font-medium text-base leading-4 text-gray-600 pt-5 ">Số lượng</p>
                      <div class="flex pt-5">
                        <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                          <input id="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text" value="1" />
                        <span class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                      </div>
                      <div>
                        <button class="focus:outline-none focus:ring-2 hover:bg-red-700 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-red-500 w-60 py-4 lg:mt-3 dark:bg-white dark:text-red-700 dark:hover:bg-red-700"  id="btnAddToCart">Chọn mua</button>
                      </div>           
                    </div>
                  </div>
                </div>
                
              </div>
            </section>
          </main>
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white px-3 py-3 mt-5">
             
            <h4 class="font-bold pb-5">Sản Phẩm Tương Tự</h4>      
            <div class="sanphamtuongtu grid grid-cols-6 gap-2 pl-1">

            
              ${product.map(function(book){
                return /*html*/`
                  <div class="px-7 py-3 border-2 hover:shadow-md"> 
                    <a href="/books/${book.id}">
                    <div ><img class="w-60 h-40" src="${book.images[0].thumbnail_url}" alt="img"></div>
                          
                    <p class="py-2 text-left text-sm">${book.name}</p>
                    <p id="isseller" class="font-bold text-left">${book.current_seller.price} 
                      <span class="underline">đ</span>
                      <span class="text-[#ff424e]" >  
                        ${percent((100-((book.current_seller.price/book.original_price)*100)).toFixed())}
                      </span>
                      </p>
                    </a>
                    </div>
                      `
                        }).join('')}
                           
                         
                                          
            </div>
          </div>
         
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white px-3 py-3 mt-5">
            <h2 class="text-xl font-semibold py-3">Thông tin chi tiết</h2>
            <table class="table-auto">
              <tbody>
              ${book.specifications[0].attributes.map(function (spec) {
                return /*html*/`
                <tr>
                  <td class="w-96 bg-[#efefef] px-4 py-4 ">${spec.name}</td>
                  <td class="px-4">${spec.value}</td>
                </tr>
                
                `
                 }).join('')
                 }
              </tbody>
            </table>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 bg-white px-3 py-3 mb-5">
            <h1 class="text-xl font-semibold py-3">Mô Tả Sản Phẩm</h1>
            <div class="">
              ${book.description}
            </div>
          </div>              
        </div>
      </div>
    `;
  }
}

export default BookDetail