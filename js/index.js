// shopList
(function () {
    var sm = document.querySelector(".shopMain");
    $.getJSON("./json/ShopList.json", function (data, status, xhr) {
      //    console.log(data,status,xhr);
      shopList1(data);
      //  console.log(x.list1);
    });
    function shopList1(data) {
      // 左边的长图
      var div = ce("div", {
        width: "240px",
        height: "380px",
        float: "left",
      });
      var img = ce("img", {
        borderRadius: "3px",
      });
      img.src = data.list1[0].src;
      div.appendChild(img);
      sm.appendChild(div);
      // 右边的小图
      var ul = ce("ul", {
        
        width: "920px",
        float: "left",
      });
      var list = [];
      for (let i = 1; i < data.list1.length; i++) {
        var li = ce("li", {
          width: "420px",
          height: "160px",
          borderRadius: "3px",
          backgroundColor: "rgba(255,255,255,1)",
          float: "left",
          marginLeft: "20px",
          marginTop: "20px",
          padding: "10px",
        });
        if (i === 1 || i === 2) li.style.marginTop = "0px";
        list.push(li);
        createContent(li, data.list1[i]);
  
        ul.appendChild(li);
      }
      sm.appendChild(ul);
    }
    function ce(type, style) {
      var elem = document.createElement(type);
      Object.assign(elem.style, style);
      return elem;
    }
    function createContent(elem, data) {
      // 图片
      var img = ce("img", {
        width: "160px",
        height: "160px",
        float: "left",
      });
      img.src = data.src;
      var div = ce("div", {
        float:"left"
      });
      // 文本
      var a = ce("a", {
        fontSize: "18px",
        height: "50px",
        width: "255px",
        display: "block",
        lineHeight: "24px",
        color: "#666",
        paddingTop: "10px",
      });
      a.textContent = data.title;
      a.href = data.href;
      // 价格
      var span1 = ce("span", {
        lineHeight: "37px",
        color: "red",
        marginTop: "10px",
        fontSize: "22px",
        display: "inline-block",
        marginRight:"4px"
      });
      span1.textContent = data.price;
      // 删除线价格
      var span2 = ce("span", {
        color: "#9b9b9b",
        fontSize: "13px",
        textDecoration:"line-through"
      });
      span2.textContent = data.oldPrice;
      // 按钮
      var divbtn=ce("div",{
         
      })
      var btn=ce("a",{
        width:"135px",
        height:"35px",
        backgroundColor:"#333",
        lineHeight:"35px",
        color:"#fff",
        fontSize:"18px",
        borderRadius:"3px",
        marginTop:"8px",
        textAlign:"center",
        float:"left",
      });
      btn.href=data.href;
      btn.textContent="马上抢";
      // 进度条
      var p=ce("p",{
        border:" 1px solid #ea2727",
        borderRadius: "5px",
        display: "inline-block",
        height: "10px",
        marginBottom: "4px",
        position: "relative",
        width: "60px",
        float:"left",
        marginLeft:"18px",
        float:"left",
        marginTop:"27px"
      });
      var b=ce("b",{
        width:data.sold*60+"px",
        backgroundColor:"#ef312b",
        height:"10px",
        borderRadius: "4px",
        position:"absolute",
        left:0,
        top:0
      });
      p.appendChild(b)
      var span3=ce("span3",{
        color: "#333",
        display: "inline-block",
        fontSize: "12px",
        lineHeight: "20px",
        verticalAlign: "bottom",
        textAlign:"right",
        margin:"23px 0 0 6px"
      });
      span3.textContent=data.sold*100+"%";
      divbtn.appendChild(span3);
  
      elem.appendChild(img);
      div.appendChild(a);
      div.appendChild(span1);
      div.appendChild(span2);
      div.appendChild(divbtn);
      divbtn.appendChild(btn);
      divbtn.appendChild(p);
      elem.appendChild(div);
      return elem;
    }
  })();
  