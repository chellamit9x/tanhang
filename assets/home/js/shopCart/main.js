let listProducts = [
    {
        id: "maso1",
        name: "san pham 1111",
        image: 'home/img/content/shop/shop-big-1.jpg',
        soLuong: 1,
        gia: 100
    },
    {
        id: "maso2",
        name: "san pham 222",
        image: 'home/img/content/shop/shop-big-4.jpg',
        soLuong: 3,
        gia: 250
    }
]

let tinhToan = {
    tongTien: 300,
    phiVanChuyen: 25,
    giamGia: 0,
    tongThanhToan: 1000
}


function getPriceProduct(size, price) {
    let s = parseInt(size);
    let p = parseInt(price);
    return s * p
}

let taiKhoanNganHang = {
    tenTaiKhoan: "Le Tuan Vu",
    soTaiKhoan: "2425435354353",
    chiNhanh: "Vietcombank TP Thai nguyen",
}


function loadDefault() {
    localStorage.setItem("tinhToan", JSON.stringify(tinhToan));
    // localStorage.setItem("listProducts", JSON.stringify(listProducts));
    let getListProduct = JSON.parse(localStorage.getItem("listProducts"));
    let getTinhToan = JSON.parse(localStorage.getItem("tinhToan"));

    let getMaDonHang = localStorage.getItem("maDonHang");
    let item = '';
    let tongTien = 0;
    if (getListProduct) {
        for (let i = 0; i < getListProduct.length; i++) {
            item += `<div class="shop-cart-box " id="sp${i}">
                        <div class="row no-gutters">
                            <div class="col-md-1 col-sm-1 col-12 pr-0">
                                <div class="button-close"> <button type="button"  onclick="xoaSanPham(${i})" class="close-box" ><i class="ti-close"></i></button> </div>
                            </div>
                            <div class="col-md-2 col-sm-2 col-12">
                                <div class="shop-cart-box-img"> <img src="${getListProduct[i].image}" alt="img">
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="shop-cart-box-info">
                                    <h4><a href="#">${getListProduct[i].name}</a></h4> <span>${getListProduct[i].gia}.000đ</span>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-12">
                                <div class="shop-cart-box-quantity">
                                    <h6>Số lượng</h6> <input class="form-control form-control-sm" id="soLuong${i}" oninput="changeSoLuong(${i}, ${getListProduct[i].gia}, ${getListProduct.length})" type="text" placeholder="Số lượng"
                                        value="${getListProduct[i].soLuong}">
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12">
                                <div class="shop-cart-box-price">
                                    <h5 id="tongTienProduct${i}">${getPriceProduct(getListProduct[i].soLuong, getListProduct[i].gia)}.000đ</h5>
                                </div>
                            </div>
                        </div>
                    </div> `
        }
    }


    let formTinhToan = `
    <div class="input-group mb-3 mt-1">
            <input type="text" class="form-control" id="maGiamGia" placeholder="Nhập mã giảm giá (nếu có):" aria-label="Nhập mã giảm giá (nếu có):"
                aria-describedby="button-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary btnKiemTraMaGiamGia" type="button" id="button-addon2" onclick="kiemTraMa()">Kiểm tra</button>
            </div>

        </div>
        <h6 id="loiMaGiamGia" ></h6>
        <h6 id="dungMaGiamGia" ></h6>
    <div class="shop-cart-info-price clearfix">
        <ul class="right-info-price">
            <li>Tổng tiền:
                <h6 id="tongTien">${getTinhToan.tongTien}.000đ</h6>
            </li>
            <li>Phí vận chuyển:
                <h6 id="phiVanChuyen">${getTinhToan.phiVanChuyen}.000đ</h6>
            </li>
            <li>Giảm giá:
                <h6 id="giamGia">${getTinhToan.giamGia}.000đ</h6>
            </li>
        </ul>
        <div class="total-price">
            <p>Tổng thanh toán: <strong id="tongThanhToan">${getTinhToan.tongThanhToan}.000đ</strong></p>
        </div>
    </div>`;

    document.getElementById("formSanPham").innerHTML = item;
    document.getElementById("formTinhToan").innerHTML = formTinhToan;
    if (getListProduct) {
        for (let i = 0; i < getListProduct.length; i++) {
            tongTien += parseInt(document.getElementById("tongTienProduct" + i).textContent.replace('.000đ', ''));
        }
    }

    document.getElementById("tongTien").innerText = tongTien + ".000đ";
    let phiVanChuyen = parseInt(document.getElementById("phiVanChuyen").textContent.replace('.000đ', ''));
    let giamGia = parseInt(document.getElementById("giamGia").textContent.replace('.000đ', ''));
    let tongThanhToan = tongTien + phiVanChuyen + giamGia;
    document.getElementById("tongThanhToan").innerText = tongThanhToan + ".000đ";

    let newLoadTinhToan = {
        tongTien: tongTien,
        phiVanChuyen: phiVanChuyen,
        giamGia: giamGia,
        tongThanhToan: tongThanhToan
    }
    localStorage.setItem("tinhToan", JSON.stringify(newLoadTinhToan));

    document.getElementById("noiDungChuyenKhoan").innerHTML = `
    <p class="mt-3"> Nội dung chuyển khoản: <b>${getMaDonHang}</b></p>
    <p>Thông tin tài khoản: </p>
    <p> Chủ tài khoản:<b> ${taiKhoanNganHang.tenTaiKhoan}</b></p>
    <p> Số tài khoản: <b>${taiKhoanNganHang.soTaiKhoan}</b></p>
    <p> Chi nhánh tài khoản:<b> ${taiKhoanNganHang.chiNhanh}</b></p>
    `;

    document.getElementById("divBtnDatHang").innerHTML = `
<div class="text-center">
<h6 id="loiDatHang" class="pt-3 pb-2" ></h6>
<h5 id="thongBaoDatHangThanhCong" class="pt-3 pb-2" ></h5>
</div>
    <div class="right-holder text-center">
        <div class="col-12 text-center">
                <button class=" primary-button button-md " onclick="onDatHang()">Đặt hàng</button>
        </div>
    </div>`
}


window.onload = function () {
    loadDefault()

}
function changeSoLuong(i, gia, soLoaiSanPham) {
    let id = 'soLuong' + i;
    let x = document.getElementById(id).value;
    if (!parseInt(x) || parseInt(x) < 0) {
        document.getElementById(id).value = 1;
    }
    x = document.getElementById(id).value;

    let getCurrentListProducs = JSON.parse(localStorage.getItem("listProducts"));
    getCurrentListProducs[i].soLuong = parseInt(x);
    localStorage.setItem("listProducts", JSON.stringify(getCurrentListProducs));


    document.getElementById("tongTienProduct" + i).innerText = parseInt(gia) * parseInt(x) + ".000đ";
    let tongTien = 0;
    for (let i = 0; i < soLoaiSanPham; i++) {
        tongTien += parseInt(document.getElementById("tongTienProduct" + i).textContent.replace('.000đ', ''));
    }
    document.getElementById("tongTien").innerText = tongTien + ".000đ";
    let phiVanChuyen = parseInt(document.getElementById("phiVanChuyen").textContent.replace('.000đ', ''));
    let giamGia = parseInt(document.getElementById("giamGia").textContent.replace('.000đ', ''));
    let tongThanhToan = tongTien + phiVanChuyen + giamGia;
    document.getElementById("tongThanhToan").innerText = tongThanhToan + ".000đ";

    let newTinhToan = {
        tongTien: tongTien,
        phiVanChuyen: phiVanChuyen,
        giamGia: giamGia,
        tongThanhToan: tongThanhToan
    }
    localStorage.setItem("tinhToan", JSON.stringify(newTinhToan));

    let getTinhToanMain = JSON.parse(localStorage.getItem("tinhToan"));
    let getListProductMain = JSON.parse(localStorage.getItem("listProducts"));
    if (getTinhToanMain) {
        let tongSoLuong = 0;
        for (let i = 0; i < getListProductMain.length; i++) {
            tongSoLuong += parseInt(getListProductMain[i].soLuong);
        }
        document.getElementById("infoShopCart").innerHTML =
            `<div class="row">
          Số lượng:&nbsp; <b id="tongSoLuong"> ${tongSoLuong}</b>
        </div>
        <div class="row">
          Tổng giá:&nbsp; <b id="tongGiaShopCart"> ${getTinhToanMain.tongThanhToan}.000đ</b>
        </div>`
    }

}

function onDatHang() {
    let tongTien = parseInt(document.getElementById("tongTien").textContent.replace(".000đ").replace(" ", ""));

    let postListProducts = JSON.parse(localStorage.getItem("listProducts"));
    let postTinhToan = JSON.parse(localStorage.getItem("tinhToan"));
    let postThongTinKhachHang = {
        hoTen: document.getElementById("hoTen").value,
        email: document.getElementById("email").value,
        soDienThoai: document.getElementById("soDienThoai").value,
        diaChi: document.getElementById("diaChi").value,
        ghiChu: document.getElementById("ghiChu").value,
        maDonHang: localStorage.getItem("maDonHang")
    }

    if (tongTien < 50) {
        document.getElementById("loiDatHang").textContent = "Bạn chưa chọn sản phẩm nào!";
        setTimeout(() => {
            document.getElementById("loiDatHang").textContent = ""
        }, 3000)
    } else if (postThongTinKhachHang.hoTen.length < 2) {
        document.getElementById("loiDatHang").textContent = "Vui lòng nhập họ tên hợp lệ!";
        setTimeout(() => {
            document.getElementById("loiDatHang").textContent = ""
        }, 3000)
    } else if (postThongTinKhachHang.soDienThoai.length < 10 || postThongTinKhachHang.soDienThoai.length > 15 || !parseInt(postThongTinKhachHang.soDienThoai / 3)) {
        document.getElementById("loiDatHang").textContent = "Vui lòng nhập số điện thoại hợp lệ!";
        setTimeout(() => {
            document.getElementById("loiDatHang").textContent = ""
        }, 3000)
    } else if (postThongTinKhachHang.diaChi.length < 5) {
        document.getElementById("loiDatHang").textContent = "Vui lòng nhập địa chỉ hợp lệ!";
        setTimeout(() => {
            document.getElementById("loiDatHang").textContent = ""
        }, 3000)
    } else if (!document.querySelector('input[name="radThanhToan"]:checked')) {
        document.getElementById("loiDatHang").textContent = "Vui lòng chọn phương thức thanh toán!";
        setTimeout(() => {
            document.getElementById("loiDatHang").textContent = ""
        }, 3000)
    } else {

        alert("Cảm ơn bạn đã đặt hàng của Tân Hàng. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể!. Chúc bạn một ngày vui vẻ!");


        if (document.querySelector('input[name="radThanhToan"]:checked').value === "0") {
            postThongTinKhachHang.phuongThucThanhToan = "Tiền mặt";
        }
        if (document.querySelector('input[name="radThanhToan"]:checked').value === "1") {
            postThongTinKhachHang.phuongThucThanhToan = "Chuyển khoản";
        }

        localStorage.removeItem("listProducts");
        let maDonHang = "TanHangTra" + Date.now();
        localStorage.setItem("maDonHang", maDonHang);
        let newMaDonHang = localStorage.getItem("maDonHang") ;

        document.getElementById("noiDungChuyenKhoan").innerHTML = `
        <p class="mt-3"> Nội dung chuyển khoản: <b>${newMaDonHang}</b></p>
        <p>Thông tin tài khoản: </p>
        <p> Chủ tài khoản:<b> ${taiKhoanNganHang.tenTaiKhoan}</b></p>
        <p> Số tài khoản: <b>${taiKhoanNganHang.soTaiKhoan}</b></p>
        <p> Chi nhánh tài khoản:<b> ${taiKhoanNganHang.chiNhanh}</b></p>
        `;


        document.getElementById("maDonHang")
        loadDefault()
        let getTinhToanMain = JSON.parse(localStorage.getItem("tinhToan"));
        let getListProductMain = JSON.parse(localStorage.getItem("listProducts"));
        if (getTinhToanMain) {
            let tongSoLuong = 0;
            for (let i = 0; i < getListProductMain.length; i++) {
                tongSoLuong += parseInt(getListProductMain[i].soLuong);
            }
            document.getElementById("infoShopCart").innerHTML =
                `<div class="row">
              Số lượng:&nbsp; <b id="tongSoLuong"> ${tongSoLuong}</b>
            </div>
            <div class="row">
              Tổng giá:&nbsp; <b id="tongGiaShopCart"> ${getTinhToanMain.tongThanhToan}.000đ</b>
            </div>`
        }

        document.getElementById("thongBaoDatHangThanhCong").textContent = "Cảm ơn bạn đã đặt hàng của Tân Hàng. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể!. Chúc bạn một ngày vui vẻ!";
        //Post Đặt hàng ở đây!

    }
}

function xoaSanPham(i) {
    let getCurrentListProduct = JSON.parse(localStorage.getItem("listProducts"));
    getCurrentListProduct.splice(getCurrentListProduct.indexOf(i), 1);
    localStorage.setItem("listProducts", JSON.stringify(getCurrentListProduct));
    console.log(getCurrentListProduct)
    loadDefault()
    let getTinhToanMain = JSON.parse(localStorage.getItem("tinhToan"));
    let getListProductMain = JSON.parse(localStorage.getItem("listProducts"));
    if (getTinhToanMain) {
        let tongSoLuong = 0;
        for (let i = 0; i < getListProductMain.length; i++) {
            tongSoLuong += parseInt(getListProductMain[i].soLuong);
        }
        document.getElementById("infoShopCart").innerHTML =
            `<div class="row">
          Số lượng:&nbsp; <b id="tongSoLuong"> ${tongSoLuong}</b>
        </div>
        <div class="row">
          Tổng giá:&nbsp; <b id="tongGiaShopCart"> ${getTinhToanMain.tongThanhToan}.000đ</b>
        </div>`
    }

}

function kiemTraMa() {
    let maGiamGia = document.getElementById("maGiamGia").value;
    let soTienGiamGia = -25;
    if (maGiamGia === "quynh") {

        document.getElementById("dungMaGiamGia").textContent = "Mã giảm giá hợp lệ, đã tính mã giảm giá trong hóa đơn!";
        let newTinhToan = JSON.parse(localStorage.getItem("tinhToan"));
        newTinhToan.giamGia = soTienGiamGia;
        localStorage.setItem("tinhToan", JSON.stringify(newTinhToan));
        document.getElementById("giamGia").textContent = soTienGiamGia + ".000đ";

        let phiVanChuyen = parseInt(document.getElementById("phiVanChuyen").textContent.replace('.000đ', ''));
        let tongTien = parseInt(document.getElementById("tongTien").textContent.replace('.000đ', ''));
        let tongThanhToan = tongTien + phiVanChuyen + soTienGiamGia;
        document.getElementById("tongThanhToan").innerText = tongThanhToan + ".000đ";

        setTimeout(() => {
            document.getElementById("maGiamGia").value = ""
        }, 1000)

        setTimeout(() => {
            document.getElementById("dungMaGiamGia").textContent = ""
        }, 3000)
    } else {
        document.getElementById("loiMaGiamGia").textContent = "Mã giảm giá không đúng hoặc đã hết hạn!"
        setTimeout(() => {
            document.getElementById("maGiamGia").value = ""
            document.getElementById("loiMaGiamGia").textContent = ""
        }, 3000)
    }
}
