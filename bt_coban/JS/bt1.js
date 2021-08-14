//bt1: sắp xếp thứ tự tăng dan cua 3 số nguyên

/**
 * khối 1: inputs
 * int1, int2, int3
 * 
 * khối 2: 
 * B1: tạo và lấy giá trị về 
 * B2: sắp xếp các giá trị theo thứ tự tăng dần
 *  - nếu int1 >= int2 thì đổi vị trí cả 2 cho nhau thông qua biến trung gian m
 *  - tiếp tục xét int2 >= int3 thì đổi vị trí cả 2 cho nhau thông qua biến trung gian m
 *  ( sẽ tìm được giá trị lớn nhất là int3 đặt ở ngoai cung bên phải
 *   và chỉ còn 2 giá trị của 2 biến int1, int2 cần so sánh sau cung)
 *  - xét int1 >= int2 thì đổi vị trí cả 2 cho nhau thông qua biến trung gian m  
 * B3: hiển thị UI theo thứ tự int1, int2, int3
 * 
 * 
 * khối 3: outputs
 * thứ tự tăng dần  các số 
 * 
 */

var m;

document.getElementById("btnSort").onclick = function(){
    var int1 = parseInt(document.getElementById("numInt1").value);
    var int2 = parseInt(document.getElementById("numInt2").value);
    var int3 = parseInt(document.getElementById("numInt3").value);

    if (int1 >= int2){
        m = int1;
        int1 = int2;
        int2 = m;
    }
    
    if (int2 >= int3){
        m = int2;
        int2 = int3;
        int3 = m;
    }

    if (int1 >= int2){
        m = int1;
        int1 = int2;
        int2 = m;
    }

    // console.log(int1, int2, int3);    
    
    document.getElementById("txtThongBao1").innerHTML = "Thứ tự tăng dần 3 số nguyên là: " + int1 + "; " + int2 + "; " + int3;
}                                                               