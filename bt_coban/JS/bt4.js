// bt4: Tam giác gì

/**
 * khối 1: inputs
 * edge1, edge2, edge3
 * 
 * 
 * khối 2:
 * B1: tạo và lấy giá trị về 
 * B2:  các TH: 
 *  - Nếu edge1==edge2==edge3 thi xuất ra "tam giác deu"
 *  - Nếu 2 trong 3 cạnh của tam giác bằng nhau thi xuất ra "tam giác cân"
 *  - Nếu edge1*edge1==edge2*edge2 + edge3*edge3 (xét thêm 2 TH các cạnh đổi vai tro cho nhau) thi xuất ra "tam giác vuông"                                                          
 *  - Nếu edge1 >= edge2 + edge3 thi xuất ra "3 cạnh trên không thể tạo thanh tam giác"
 *  - Ngược lai, xuất ra "tam giác thường"
 * 
 * 
 * khối 3: output
 * hiển thị ra UI, tam giác gi
 * 
 * 
 */

document.getElementById("btnTriangle").onclick = function(){
    var edge1 = parseInt(document.getElementById("edge1").value);
    var edge2 = parseInt(document.getElementById("edge2").value);
    var edge3 = parseInt(document.getElementById("edge3").value);

   
    //JS sẽ đọc từ trên xuống dưới, nên sẽ xét TH tg đều trước rồi mới xét các TH khác. 
    //nếu để TH tg cân trước TH tg đều sẽ bị lỗi khi nhập 3 cạnh bằng nhau do JS xét 2 cạnh bằng nhau là xuất ra kq tg cân chứ chưa xét đến cạnh thứ 3 có bằng không 
    if (edge1==edge2 && edge2==edge3){
        // console.log("Tam giác đều")
        document.getElementById("txtThongBao4").innerHTML = "Tam giác đều";
    }else if ((edge1==edge2) || (edge1==edge3) || (edge2==edge3)){
        // console.log("Tam giác cân");
        document.getElementById("txtThongBao4").innerHTML = "Tam giác cân";
    }else if ((Math.pow(edge1,2)==Math.pow(edge2,2)+Math.pow(edge3,2)) || (Math.pow(edge2,2)==Math.pow(edge1,2)+Math.pow(edge3,2)) || (Math.pow(edge3,2)==Math.pow(edge2,2)+Math.pow(edge1,2))){
        // console.log("Tam giác vuông");
        document.getElementById("txtThongBao4").innerHTML = "Tam giác vuông";
    }else if ((edge1 >= edge2+edge3) || (edge2 >= edge1+edge3) || (edge3 >= edge2+edge1)){
        document.getElementById("txtThongBao4").innerHTML = "3 cạnh trên không thể tạo tam giác";
    }else{
        document.getElementById("txtThongBao4").innerHTML = "Tam giác thường";
    }
}









