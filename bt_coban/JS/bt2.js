//bt2: Chào hỏi

/**
 * khối 1: input
 * inputAsk
 * 
 * khối 2: 
 * B1: tạo và lấy giá trị về
 * B2: các case
 *  - nếu user nhập "ba", hiển thị ra screen lời chào
 *  - nếu user nhập "mẹ", hiển thị ra screen lời chào 
 *  - nếu user nhập "anh trai", hiển thị ra screen lời chào
 *  - nếu user nhập "em trai", hiển thị ra screen lời chào
 *  - nếu user nhập các kí tự khác 4 case trên, hiển thị ra screen thông báo nhập không hợp lệ
 * 
 * 
 * 
 * khối 3: output
 * gửi lời chao các thành viên  
 * 
 * 
 * 
 */

document.getElementById("btnAsk").onclick = function(){
    var inputAsk = document.getElementById("inputAsk").value;

    switch (inputAsk){
        case "ba":
            // console.log("Chào ba");
            document.getElementById("txtThongBao2").innerHTML = "Chào Ba. Chúc Ba một ngày tốt lành.";
            break;
        case "mẹ":
            document.getElementById("txtThongBao2").innerHTML = "Chào Mẹ. Chúc Mẹ một ngày tốt lành.";
            break;
        case "anh trai":
            document.getElementById("txtThongBao2").innerHTML = "Chào anh Hai. Chúc anh Hai một ngày tốt lành.";
            break;
        case "em trai":
            document.getElementById("txtThongBao2").innerHTML = "Chào em trai. Chúc em trai một ngày tốt lành.";
            break;
        default: 
            // console.log("không hợp lệ");
            document.getElementById("txtThongBao2").innerHTML = "không hợp lệ! Mentor nhập 4 case á. Chúc Mentor một ngày tốt lành.";
    }
}







