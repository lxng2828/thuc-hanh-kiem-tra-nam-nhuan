const button = document.getElementById("check");
button.addEventListener("click", kiemtranamnhuan);


function kiemtranamnhuan() {
    const nam = parseInt(document.getElementById("nam").value); // Lấy giá trị năm và chuyển thành số



    if (nam % 4 === 0) {
        if (nam % 100 === 0) {
            if (nam % 400 === 0) {
                document.getElementById("ketqua").innerText = "Đây là năm nhuận";
            } else { // Nếu năm không chia hết cho 400
                document.getElementById("ketqua").innerText = "Không phải năm nhuận";
            }
        } else {
            document.getElementById("ketqua").innerText = "Đây là năm nhuận";
        }
    } else { // Nếu năm không chia hết cho 4
        document.getElementById("ketqua").innerText = "Không phải năm nhuận";
    }
}