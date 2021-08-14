//bt3: Đếm bao nhiêu số lẻ, chẵn

/**
 * khối 1: inputs
 * numInt4, numInt5, numInt6
 * 
 * 
 * khối 2: 
 * B1: tạo và lấy giá trị về 
 * B2: khai báo biến even(chẵn), odd(lẻ)
 * xét từng biến numInt4 % 2 == 0 đúng thi sẽ tăng 1 giá trị cho biến even. 
 * xét tương tự cho biến numInt5, numInt6.
 * 
 * giá trị biến odd = 3 - even;
 * B3: hiển thị UI
 * 
 * 
 * 
 * Khối 3: output
 * số số chẵn, số số lẻ
 * 
 *   
 */

document.getElementById("btnCount").onclick = function(){
    var numInt4 = parseInt(document.getElementById("numInt4").value);
    var numInt5 = parseInt(document.getElementById("numInt5").value);
    var numInt6 = parseInt(document.getElementById("numInt6").value);
    var even = 0;

    if (numInt4 % 2 == 0){
        even += 1;
    }
    if (numInt5 % 2 == 0){
        even += 1;
    }
    if (numInt6 % 2 == 0){
        even += 1;
    }
    // console.log(even);
    var odd = 3 - even;
    
    document.getElementById("txtThongBao3").innerHTML = "có " + even + " số chẵn và " + odd + " số lẻ";

}











