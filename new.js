function send(){
    document.getElementById("pay-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("sell-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("demo-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("send-btn").classList.add("active")
    
}
function pay(){
    document.getElementById("send-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("sell-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("demo-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("pay-btn").classList.add("active")
    
}
function sell(){
    document.getElementById("send-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("pay-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("demo-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("sell-btn").classList.add("active")
    
}
function demo(){
    document.getElementById("send-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("pay-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("sell-btn").className="btn btn-flat btn-rounded form-check-label";
    document.getElementById("demo-btn").classList.add("active")
    
}

function accsend(){
  document.getElementById("send-img").className="";
  document.getElementById("pay-img").className="acc-hide";
  document.getElementById("sell-img").className="acc-hide";
}
function accpay(){
  document.getElementById("send-img").className="acc-hide";
  document.getElementById("pay-img").className="";
  document.getElementById("sell-img").className="acc-hide";
}
function accsell(){
  document.getElementById("send-img").className="acc-hide";
  document.getElementById("pay-img").className="acc-hide";
  document.getElementById("sell-img").className="";
}

function timline(){
  document.getElementById("timeline").className="start";
  document.getElementById("timeline-mob").classList.add="start";
}



$(function() {
  var selectedClass = "";
  $(".filter").click(function(){
  selectedClass = $(this).attr("data-rel");
  $("#marquee-vertical").fadeTo(100, 0.1);
  $("#marquee-vertical div").not("."+selectedClass).fadeOut().removeClass('animation');
  setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('animation');
  $("#marquee-vertical").fadeTo(300, 1);
  }, 300);
  });
});



$(function() {
  var selectedClass = "";
  $(".filter").click(function(){
  selectedClass = $(this).attr("data-rel");
  $("#gallery-blog").fadeTo(100, 0.1);
  $("#gallery-blog div").not("."+selectedClass).fadeOut().removeClass('animation');
  setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('animation');
  $("#gallery-blog").fadeTo(300, 1);
  }, 300);
  });
});


function testall(){
  document.getElementById("fil-all").classList.add("active");
  document.getElementById("fil-cust").classList.remove("active");
  document.getElementById("fil-case").classList.remove("active");
  document.getElementById("fil-whte").classList.remove("active");
  document.getElementById("fil-test").classList.remove("active");
}

function testcust(){
  document.getElementById("fil-all").classList.remove("active");
  document.getElementById("fil-cust").classList.add("active");
  document.getElementById("fil-case").classList.remove("active");
  document.getElementById("fil-whte").classList.remove("active");
  document.getElementById("fil-test").classList.remove("active");
  
}

function testcase(){
  document.getElementById("fil-all").classList.remove("active");
  document.getElementById("fil-cust").classList.remove("active");
  document.getElementById("fil-case").classList.add("active");
  document.getElementById("fil-whte").classList.remove("active");
  document.getElementById("fil-test").classList.remove("active");

}

function testwhte(){
  document.getElementById("fil-all").classList.remove("active");
  document.getElementById("fil-cust").classList.remove("active");
  document.getElementById("fil-case").classList.remove("active");
  document.getElementById("fil-whte").classList.add("active");
  document.getElementById("fil-test").classList.remove("active");
}

function testi(){
  document.getElementById("fil-all").classList.remove("active");
  document.getElementById("fil-cust").classList.remove("active");
  document.getElementById("fil-case").classList.remove("active");
  document.getElementById("fil-whte").classList.remove("active");
  document.getElementById("fil-test").classList.add("active");
}

function blogall(){
  document.getElementById("blog-all").classList.add("active");
  document.getElementById("blog-comm").classList.remove("active");
  document.getElementById("blog-news").classList.remove("active");
  document.getElementById("blog-prd").classList.remove("active");
  document.getElementById("blog-exp").classList.remove("active");
  document.getElementById("blog-tps").classList.remove("active");


  document.getElementById("blog-all-mob").classList.add("active");
  document.getElementById("blog-comm-mob").classList.remove("active");
  document.getElementById("blog-news-mob").classList.remove("active");
  document.getElementById("blog-pro-mob").classList.remove("active");
  document.getElementById("blog-exper-mob").classList.remove("active");
  document.getElementById("blog-tip-mob").classList.remove("active");
}

function blogcomm(){
  document.getElementById("blog-all").classList.remove("active");
  document.getElementById("blog-comm").classList.add("active");
  document.getElementById("blog-news").classList.remove("active");
  document.getElementById("blog-prd").classList.remove("active");
  document.getElementById("blog-exp").classList.remove("active");
  document.getElementById("blog-tps").classList.remove("active");

  document.getElementById("blog-all-mob").classList.remove("active");
  document.getElementById("blog-comm-mob").classList.add("active");
  document.getElementById("blog-news-mob").classList.remove("active");
  document.getElementById("blog-pro-mob").classList.remove("active");
  document.getElementById("blog-exper-mob").classList.remove("active");
  document.getElementById("blog-tip-mob").classList.remove("active");
}

function blognews(){
  document.getElementById("blog-all").classList.remove("active");
  document.getElementById("blog-comm").classList.remove("active");
  document.getElementById("blog-news").classList.add("active");
  document.getElementById("blog-prd").classList.remove("active");
  document.getElementById("blog-exp").classList.remove("active");
  document.getElementById("blog-tps").classList.remove("active");

  document.getElementById("blog-all-mob").classList.remove("active");
  document.getElementById("blog-comm-mob").classList.remove("active");
  document.getElementById("blog-news-mob").classList.add("active");
  document.getElementById("blog-pro-mob").classList.remove("active");
  document.getElementById("blog-exper-mob").classList.remove("active");
  document.getElementById("blog-tip-mob").classList.remove("active");
}

function blogprd(){
  document.getElementById("blog-all").classList.remove("active");
  document.getElementById("blog-comm").classList.remove("active");
  document.getElementById("blog-news").classList.remove("active");
  document.getElementById("blog-prd").classList.add("active");
  document.getElementById("blog-exp").classList.remove("active");
  document.getElementById("blog-tps").classList.remove("active");

  document.getElementById("blog-all-mob").classList.remove("active");
  document.getElementById("blog-comm-mob").classList.remove("active");
  document.getElementById("blog-news-mob").classList.remove("active");
  document.getElementById("blog-pro-mob").classList.add("active");
  document.getElementById("blog-exper-mob").classList.remove("active");
  document.getElementById("blog-tip-mob").classList.remove("active");
}

function blogexp(){
  document.getElementById("blog-all").classList.remove("active");
  document.getElementById("blog-comm").classList.remove("active");
  document.getElementById("blog-news").classList.remove("active");
  document.getElementById("blog-prd").classList.remove("active");
  document.getElementById("blog-exp").classList.add("active");
  document.getElementById("blog-tps").classList.remove("active");

  document.getElementById("blog-all-mob").classList.remove("active");
  document.getElementById("blog-comm-mob").classList.remove("active");
  document.getElementById("blog-news-mob").classList.remove("active");
  document.getElementById("blog-pro-mob").classList.remove("active");
  document.getElementById("blog-exper-mob").classList.add("active");
  document.getElementById("blog-tip-mob").classList.remove("active");
}

function blogtip(){
  document.getElementById("blog-all").classList.remove("active");
  document.getElementById("blog-comm").classList.remove("active");
  document.getElementById("blog-news").classList.remove("active");
  document.getElementById("blog-prd").classList.remove("active");
  document.getElementById("blog-exp").classList.remove("active");
  document.getElementById("blog-tps").classList.add("active");

  document.getElementById("blog-all-mob").classList.remove("active");
  document.getElementById("blog-comm-mob").classList.remove("active");
  document.getElementById("blog-news-mob").classList.remove("active");
  document.getElementById("blog-pro-mob").classList.remove("active");
  document.getElementById("blog-exper-mob").classList.remove("active");
  document.getElementById("blog-tip-mob").classList.add("active");
}

function apidoc(){
  document.getElementById("api-btn").classList.add("active");
  document.getElementById("postman-btn").classList.remove("active");
  document.getElementById("api-key-btn").classList.remove("active");
  document.getElementById("tech-sprt-btn").classList.remove("active");

  document.getElementById("api-btn-mob").classList.add("active");
  document.getElementById("postman-btn-mob").classList.remove("active");
  document.getElementById("api-key-btn-mob").classList.remove("active");
  document.getElementById("tech-sprt-btn-mob").classList.remove("active");

  document.getElementById("dev-api-doc-mob").classList.remove("acc-hide");
  document.getElementById("dev-postman-mob").classList.add("acc-hide");
  document.getElementById("dev-api-key-mob").classList.add("acc-hide");
  document.getElementById("dev-tec-suprt-mob").classList.add("acc-hide");
  
  

  
}

function postman(){
  document.getElementById("api-btn").classList.remove("active");
  document.getElementById("postman-btn").classList.add("active");
  document.getElementById("api-key-btn").classList.remove("active");
  document.getElementById("tech-sprt-btn").classList.remove("active");

  document.getElementById("api-btn-mob").classList.remove("active");
  document.getElementById("postman-btn-mob").classList.add("active");
  document.getElementById("api-key-btn-mob").classList.remove("active");
  document.getElementById("tech-sprt-btn-mob").classList.remove("active");

  document.getElementById("dev-api-doc-mob").classList.add("acc-hide");
  document.getElementById("dev-postman-mob").classList.remove("acc-hide");
  document.getElementById("dev-api-key-mob").classList.add("acc-hide");
  document.getElementById("dev-tec-suprt-mob").classList.add("acc-hide");
}

function apikey(){
  document.getElementById("api-btn").classList.remove("active");
  document.getElementById("postman-btn").classList.remove("active");
  document.getElementById("api-key-btn").classList.add("active");
  document.getElementById("tech-sprt-btn").classList.remove("active");

  document.getElementById("api-btn-mob").classList.remove("active");
  document.getElementById("postman-btn-mob").classList.remove("active");
  document.getElementById("api-key-btn-mob").classList.add("active");
  document.getElementById("tech-sprt-btn-mob").classList.remove("active");

  document.getElementById("dev-api-doc-mob").classList.add("acc-hide");
  document.getElementById("dev-postman-mob").classList.add("acc-hide");
  document.getElementById("dev-api-key-mob").classList.remove("acc-hide");
  document.getElementById("dev-tec-suprt-mob").classList.add("acc-hide");
}

function techsprt(){
  document.getElementById("api-btn").classList.remove("active");
  document.getElementById("postman-btn").classList.remove("active");
  document.getElementById("api-key-btn").classList.remove("active");
  document.getElementById("tech-sprt-btn").classList.add("active");

  document.getElementById("api-btn-mob").classList.remove("active");
  document.getElementById("postman-btn-mob").classList.remove("active");
  document.getElementById("api-key-btn-mob").classList.remove("active");
  document.getElementById("tech-sprt-btn-mob").classList.add("active");

  document.getElementById("dev-api-doc-mob").classList.add("acc-hide");
  document.getElementById("dev-postman-mob").classList.add("acc-hide");
  document.getElementById("dev-api-key-mob").classList.add("acc-hide");
  document.getElementById("dev-tec-suprt-mob").classList.remove("acc-hide");
}









function exyes(){
  document.getElementById("excus-yes").classList.add("active");
  document.getElementById("excus-no").classList.remove("active");
  document.getElementById("excus-mob-yes").classList.add("active");
  document.getElementById("excus-mob-no").classList.remove("active");
}

function exno(){
  document.getElementById("excus-yes").classList.remove("active");
  document.getElementById("excus-no").classList.add("active");
  document.getElementById("excus-mob-yes").classList.remove("active");
  document.getElementById("excus-mob-no").classList.add("active");
}

function subyes(){
  document.getElementById("subs-yes").classList.add("active");
  document.getElementById("subs-no").classList.remove("active");
  document.getElementById("subs-mob-yes").classList.add("active");
  document.getElementById("subs-mob-no").classList.remove("active");
}

function subno(){
  document.getElementById("subs-yes").classList.remove("active");
  document.getElementById("subs-no").classList.add("active");
  document.getElementById("subs-mob-yes").classList.remove("active");
  document.getElementById("subs-mob-no").classList.add("active");
}

function news(){
  document.getElementById("fea-sec").classList.add("active");
  document.getElementById("med-kit").classList.remove("active");
  document.getElementById("award").classList.remove("active");
}

function media(){
  document.getElementById("fea-sec").classList.remove("active");
  document.getElementById("med-kit").classList.add("active");
  document.getElementById("award").classList.remove("active");
}

function award(){
  document.getElementById("fea-sec").classList.remove("active");
  document.getElementById("med-kit").classList.remove("active");
  document.getElementById("award").classList.add("active");
}


function lone(){
  document.getElementById("learn-one").classList.add("acc-hide");
  document.getElementById("learn-two").classList.remove("acc-hide");
  document.getElementById("learn-three").classList.remove("acc-hide");
  document.getElementById("learn-four").classList.remove("acc-hide");
  document.getElementById("l-one-ico").classList.remove("acc-hide");
  document.getElementById("l-two-ico").classList.add("acc-hide");
  document.getElementById("l-three-ico").classList.add("acc-hide");
  document.getElementById("l-four-ico").classList.add("acc-hide");
  
}
function lonemob(){
  document.getElementById("learn-one-mob").classList.add("acc-hide");
  document.getElementById("learn-two-mob").classList.remove("acc-hide");
  document.getElementById("learn-three-mob").classList.remove("acc-hide");
  document.getElementById("learn-four-mob").classList.remove("acc-hide");

  document.getElementById("l-one-ico-mob").classList.remove("acc-hide");
  document.getElementById("l-two-ico-mob").classList.add("acc-hide");
  document.getElementById("l-three-ico-mob").classList.add("acc-hide");
  document.getElementById("l-four-ico-mob").classList.add("acc-hide");
  
}

function ltwo(){
  document.getElementById("learn-one").classList.remove("acc-hide");
  document.getElementById("learn-two").classList.add("acc-hide");
  document.getElementById("learn-three").classList.remove("acc-hide");
  document.getElementById("learn-four").classList.remove("acc-hide");
  document.getElementById("l-one-ico").classList.add("acc-hide");
  document.getElementById("l-two-ico").classList.remove("acc-hide");
  document.getElementById("l-three-ico").classList.add("acc-hide");
  document.getElementById("l-four-ico").classList.add("acc-hide");
}

function ltwomob(){
  document.getElementById("learn-one-mob").classList.remove("acc-hide");
  document.getElementById("learn-two-mob").classList.add("acc-hide");
  document.getElementById("learn-three-mob").classList.remove("acc-hide");
  document.getElementById("learn-four-mob").classList.remove("acc-hide");

  document.getElementById("l-one-ico-mob").classList.add("acc-hide");
  document.getElementById("l-two-ico-mob").classList.remove("acc-hide");
  document.getElementById("l-three-ico-mob").classList.add("acc-hide");
  document.getElementById("l-four-ico-mob").classList.add("acc-hide");
}
function lthree(){
  document.getElementById("learn-one").classList.remove("acc-hide");
  document.getElementById("learn-two").classList.remove("acc-hide");
  document.getElementById("learn-three").classList.add("acc-hide");
  document.getElementById("learn-four").classList.remove("acc-hide");
  document.getElementById("l-one-ico").classList.add("acc-hide");
  document.getElementById("l-two-ico").classList.add("acc-hide");
  document.getElementById("l-three-ico").classList.remove("acc-hide");
  document.getElementById("l-four-ico").classList.add("acc-hide");
}
function lthreemob(){
  document.getElementById("learn-one-mob").classList.remove("acc-hide");
  document.getElementById("learn-two-mob").classList.remove("acc-hide");
  document.getElementById("learn-three-mob").classList.add("acc-hide");
  document.getElementById("learn-four-mob").classList.remove("acc-hide");

  document.getElementById("l-one-ico-mob").classList.add("acc-hide");
  document.getElementById("l-two-ico-mob").classList.add("acc-hide");
  document.getElementById("l-three-ico-mob").classList.remove("acc-hide");
  document.getElementById("l-four-ico-mob").classList.add("acc-hide");
}

function lfour(){
  document.getElementById("learn-one").classList.remove("acc-hide");
  document.getElementById("learn-two").classList.remove("acc-hide");
  document.getElementById("learn-three").classList.remove("acc-hide");
  document.getElementById("learn-four").classList.add("acc-hide");
  document.getElementById("l-one-ico").classList.add("acc-hide");
  document.getElementById("l-two-ico").classList.add("acc-hide");
  document.getElementById("l-three-ico").classList.add("acc-hide");
  document.getElementById("l-four-ico").classList.remove("acc-hide");
}

function lfourmob(){
  document.getElementById("learn-one-mob").classList.remove("acc-hide");
  document.getElementById("learn-two-mob").classList.remove("acc-hide");
  document.getElementById("learn-three-mob").classList.remove("acc-hide");
  document.getElementById("learn-four-mob").classList.add("acc-hide");

  document.getElementById("l-one-ico-mob").classList.add("acc-hide");
  document.getElementById("l-two-ico-mob").classList.add("acc-hide");
  document.getElementById("l-three-ico-mob").classList.add("acc-hide");
  document.getElementById("l-four-ico-mob").classList.remove("acc-hide");
}



function exclone(){
  document.getElementById("learn-one").classList.remove("acc-hide");
  document.getElementById("l-one-ico").classList.add("acc-hide");
}
function exclonemob(){
  document.getElementById("learn-one-mob").classList.remove("acc-hide");
  document.getElementById("l-one-ico-mob").classList.add("acc-hide");
}
function excltwo(){
  document.getElementById("learn-two").classList.remove("acc-hide");
  document.getElementById("l-two-ico").classList.add("acc-hide");
}
function excltwomob(){
  document.getElementById("learn-two-mob").classList.remove("acc-hide");
  document.getElementById("l-two-ico-mob").classList.add("acc-hide");
}
function exclthree(){
  document.getElementById("learn-three").classList.remove("acc-hide");
  document.getElementById("l-three-ico").classList.add("acc-hide");
}
function exclthreemob(){
  document.getElementById("learn-three-mob").classList.remove("acc-hide");
  document.getElementById("l-three-ico-mob").classList.add("acc-hide");
}
function exclfour(){
  document.getElementById("learn-four").classList.remove("acc-hide");
  document.getElementById("l-four-ico").classList.add("acc-hide");
}function exclfourmob(){
  document.getElementById("learn-four-mob").classList.remove("acc-hide");
  document.getElementById("l-four-ico-mob").classList.add("acc-hide");
}



function newsmob(){
  document.getElementById("fea-sec-mob").classList.add("active");
  document.getElementById("med-kit-mob").classList.remove("active");
  document.getElementById("award-mob").classList.remove("active");

  document.getElementById("press-page-mob").classList.remove("acc-hide");
  document.getElementById("crowdz-featured-section-mob").classList.remove("acc-hide");

  document.getElementById("media-mob").classList.add("acc-hide");
  document.getElementById("logo-mob").classList.add("acc-hide");
  document.getElementById("press-gallery-mob").classList.add("acc-hide");
  document.getElementById("press-release-mob").classList.add("acc-hide");

  document.getElementById("awards-mob").classList.add("acc-hide");
  document.getElementById("award-sec-mob").classList.add("acc-hide");
}

function mediamob(){
  document.getElementById("fea-sec-mob").classList.remove("active");
  document.getElementById("med-kit-mob").classList.add("active");
  document.getElementById("award-mob").classList.remove("active");

  document.getElementById("press-page-mob").classList.add("acc-hide");
  document.getElementById("crowdz-featured-section-mob").classList.add("acc-hide");

  document.getElementById("media-mob").classList.remove("acc-hide");
  document.getElementById("logo-mob").classList.remove("acc-hide");
  document.getElementById("press-gallery-mob").classList.remove("acc-hide");
  document.getElementById("press-release-mob").classList.remove("acc-hide");

  document.getElementById("awards-mob").classList.add("acc-hide");
  document.getElementById("award-sec-mob").classList.add("acc-hide");
}

function awardmob(){
  document.getElementById("fea-sec-mob").classList.remove("active");
  document.getElementById("med-kit-mob").classList.remove("active");
  document.getElementById("award-mob").classList.add("active");

  document.getElementById("press-page-mob").classList.add("acc-hide");
  document.getElementById("crowdz-featured-section-mob").classList.add("acc-hide");

  document.getElementById("media-mob").classList.add("acc-hide");
  document.getElementById("logo-mob").classList.add("acc-hide");
  document.getElementById("press-gallery-mob").classList.add("acc-hide");
  document.getElementById("press-release-mob").classList.add("acc-hide");

  document.getElementById("awards-mob").classList.remove("acc-hide");
  document.getElementById("award-sec-mob").classList.remove("acc-hide");
}



function mobapidoc(){
  document.getElementById("api-doc-mob").classList.remove("mob-disabled");
  document.getElementById("postman-mob").classList.add("mob-disabled");
  document.getElementById("api-key-mob").classList.add("mob-disabled");
  document.getElementById("tech-suprt-mob").classList.add("mob-disabled");
  
  document.getElementById("api-btn-mob").classList.add("btn-mob-active");
  document.getElementById("postman-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("api-key-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("tech-sprt-btn-mob").classList.remove("btn-mob-active");

}
function mobapikey(){
  document.getElementById("api-doc-mob").classList.add("mob-disabled");
  document.getElementById("postman-mob").classList.add("mob-disabled");
  document.getElementById("api-key-mob").classList.remove("mob-disabled");
  document.getElementById("tech-suprt-mob").classList.add("mob-disabled");
  
  document.getElementById("api-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("postman-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("api-key-btn-mob").classList.add("btn-mob-active");
  document.getElementById("tech-sprt-btn-mob").classList.remove("btn-mob-active");
}
function mobpostman(){
  document.getElementById("api-doc-mob").classList.add("mob-disabled");
  document.getElementById("postman-mob").classList.remove("mob-disabled");
  document.getElementById("api-key-mob").classList.add("mob-disabled");
  document.getElementById("tech-suprt-mob").classList.add("mob-disabled");
  
  document.getElementById("api-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("postman-btn-mob").classList.add("btn-mob-active");
  document.getElementById("api-key-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("tech-sprt-btn-mob").classList.remove("btn-mob-active");

}
function mobtechsprt(){
  document.getElementById("api-doc-mob").classList.add("mob-disabled");
  document.getElementById("postman-mob").classList.add("mob-disabled");
  document.getElementById("api-key-mob").classList.add("mob-disabled");
  document.getElementById("tech-suprt-mob").classList.remove("mob-disabled");
  
  document.getElementById("api-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("postman-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("api-key-btn-mob").classList.remove("btn-mob-active");
  document.getElementById("tech-sprt-btn-mob").classList.add("btn-mob-active");

}















$( document ).ready(function() {
  $(".option1").click(function(){
    $(".pricing-dsc.section1").show(500);
  });

  $(".option2").click(function(){
    $(".pricing-dsc.section2").show(500);
  });
  $(".option3").click(function(){
    $(".pricing-dsc.section3").show(500);
  });
  $(".option4").click(function(){
    $(".pricing-dsc.section4").show(500);
  });

  $(".hide1").click(function(){
    $(".pricing-dsc.section1").hide(500);
  });

  $(".hide2").click(function(){
    $(".pricing-dsc.section2").hide(500);
  });
  $(".hide3").click(function(){
    $(".pricing-dsc.section3").hide(500);
  });


  $("  .more-legal-1").click(function(){
    $(".more-legal-1").hide(500);

 });

  $("  .more-legal-2").click(function(){
    $(".more-legal-2").hide(500);

 });

    $(".more-legal-3").click(function(){
    $(".more-legal-3").hide(500);

 });

 $(".more-legal-4").click(function(){
  $(".more-legal-4").hide(500);

});
 
});


function buyWidgetClick(){
  document.getElementById("buyers-mob").classList.remove("acc-hide");
  document.getElementById("seller-mob").classList.add("acc-hide");
  document.getElementById("funders-mob").classList.add("acc-hide");
  document.getElementById("privacy-mob").classList.add("acc-hide");
}

function sellWidgetClick(){
  document.getElementById("buyers-mob").classList.add("acc-hide");
  document.getElementById("seller-mob").classList.remove("acc-hide");
  document.getElementById("funders-mob").classList.add("acc-hide");
  document.getElementById("privacy-mob").classList.add("acc-hide");

  document.getElementById("ac-sec").classList.remove("active");
}

function funWidgetClick(){
  document.getElementById("buyers-mob").classList.add("acc-hide");
  document.getElementById("seller-mob").classList.add("acc-hide");
  document.getElementById("funders-mob").classList.remove("acc-hide");
  document.getElementById("privacy-mob").classList.add("acc-hide");

  document.getElementById("ac-sec").classList.remove("active");
}

function priWidgetClick(){
  document.getElementById("buyers-mob").classList.add("acc-hide");
  document.getElementById("seller-mob").classList.add("acc-hide");
  document.getElementById("funders-mob").classList.add("acc-hide");
  document.getElementById("privacy-mob").classList.remove("acc-hide");

  document.getElementById("ac-sec").classList.remove("active");
}

function mobsend(){
  document.getElementById("send-inv-mob").classList.remove("acc-hide");
  document.getElementById("pay-inv-mob").classList.add("acc-hide");
  document.getElementById("sell-inv-mob").classList.add("acc-hide");
  document.getElementById("prd-vdo-mob").classList.add("acc-hide");
  
  document.getElementById("send-btn-mob").classList.add("active");
  document.getElementById("pay-btn-mob").classList.remove("active");
  document.getElementById("sell-btn-mob").classList.remove("active");
  document.getElementById("demo-btn-mob").classList.remove("active");
}

function mobpay(){
  document.getElementById("send-inv-mob").classList.add("acc-hide");
  document.getElementById("pay-inv-mob").classList.remove("acc-hide");
  document.getElementById("sell-inv-mob").classList.add("acc-hide");
  document.getElementById("prd-vdo-mob").classList.add("acc-hide");
  
  document.getElementById("send-btn-mob").classList.remove("active");
  document.getElementById("pay-btn-mob").classList.add("active");
  document.getElementById("sell-btn-mob").classList.remove("active");
  document.getElementById("demo-btn-mob").classList.remove("active");
}

function mobsell(){
  document.getElementById("send-inv-mob").classList.add("acc-hide");
  document.getElementById("pay-inv-mob").classList.add("acc-hide");
  document.getElementById("sell-inv-mob").classList.remove("acc-hide");
  document.getElementById("prd-vdo-mob").classList.add("acc-hide");
  
  document.getElementById("send-btn-mob").classList.remove("active");
  document.getElementById("pay-btn-mob").classList.remove("active");
  document.getElementById("sell-btn-mob").classList.add("active");
  document.getElementById("demo-btn-mob").classList.remove("active");
}

function mobdemo(){
  document.getElementById("send-inv-mob").classList.add("acc-hide");
  document.getElementById("pay-inv-mob").classList.add("acc-hide");
  document.getElementById("sell-inv-mob").classList.add("acc-hide");
  document.getElementById("prd-vdo-mob").classList.remove("acc-hide");
  
  document.getElementById("send-btn-mob").classList.remove("active");
  document.getElementById("pay-btn-mob").classList.remove("active");
  document.getElementById("sell-btn-mob").classList.remove("active");
  document.getElementById("demo-btn-mob").classList.add("active");
}


// about animation



(function ($) {
  $(document).ready(function () {
    setupFade();
    setupClickToScroll();
    setupPostAnimation();
    setupScrollToTop();
    enableScrollAbortion();
    // Trigger window.scroll, this will initiate some of the scripts
    $(window).scroll();
  });


  // Allow user to cancel scroll animation by manually scrolling
  function enableScrollAbortion() {
    var $viewport = $('html, body');
    $viewport.on('scroll mousedown DOMMouseScroll mousewheel keyup', function (e) {
      if (e.which > 0 || e.type === 'mousedown' || e.type === 'mousewheel') {
        $viewport.stop();
      }
    });
  }

  function setupScrollToTop() {
    var scrollSpeed = 750;
    $('.trigger-scroll-to-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0 },
      scrollSpeed);
    });
  }


  function setupPostAnimation() {
    var posts = $('.post-wrapper .post');
    $(window).on('scroll resize', function () {

      var currScroll = $(window).scrollTop() > $(document).scrollTop() ? $(window).scrollTop() : $(document).scrollTop(),
      windowHeight = $(window).height(), // Needs to be here because window can resize
      overScroll = Math.ceil(windowHeight * .20),
      treshhold = currScroll + windowHeight - overScroll;
      posts.each(function () {
        var post = $(this),
        postScroll = post.offset().top;

        if (postScroll > treshhold) {
          post.addClass('hidden');
        } else {
          post.removeClass('hidden');
        }
      });
    });
  }

  function setupFade() {
    var posts = $('.post-wrapper .post').reverse(),
    stemWrapper = $('.stem-wrapper'),
    halfScreen = $(window).height() / 2;
    $(window).on('scroll resize', function () {
      delay(function () {
        var currScroll = $(window).scrollTop() > $(document).scrollTop() ? $(window).scrollTop() : $(document).scrollTop(),
        scrollSplit = currScroll + halfScreen;
        posts.removeClass('active').each(function () {
          var post = $(this),
          postOffset = post.offset().top;
          if (scrollSplit > postOffset) {
            // Add active class to fade in
            post.addClass('active');
            // Get post color
            var color = post.data('stem-color') ? post.data('stem-color') : null,
            allColors = 'color-green color-yellow color-white';
            stemWrapper.removeClass(allColors);
            if (color !== null) {
              stemWrapper.addClass('color-' + color);
            }
            return false;
          }
        });
      }, 20);
    });
  }


  function setupClickToScroll(post) {
    var scrollSpeed = 750;
    $('.post-wrapper .post .stem-overlay .icon').click(function (e) {
      e.preventDefault();
      var icon = $(this),
      post = icon.closest('.post'),
      postTopOffset = post.offset().top,
      postHeight = post.height(),
      halfScreen = $(window).height() / 2,
      scrollTo = postTopOffset - halfScreen + postHeight / 2;
      $('html, body').animate({
        scrollTop: scrollTo },
      scrollSpeed);
    });
  }

})(jQuery);
/*==========  Helpers  ==========*/

// Timeout function
var delay = function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}();

$.fn.reverse = function () {
  return this.pushStack(this.get().reverse(), arguments);
};
//# sourceURL=pen.js


function conbtn(){
  var fname=document.getElementById("first-name").value;
  var lname=document.getElementById("last-name").value;
  var email=document.getElementById("e-mail").value;
  var msg=document.getElementById("message").value;
  if (fname !== "" && lname !== "" && email !== "" && msg !== "") {
  $("#con-submit").css("background-color", "#855BE0");
  document.getElementById("con-submit").classList.remove("disabled");
} else {
  $("#con-submit").css("background-color", "#bbb0d5");
}
}

function conbtnmob(){
  var fname=document.getElementById("first-name-mob").value;
  var lname=document.getElementById("last-name-mob").value;
  var email=document.getElementById("e-mail-mob").value;
  var msg=document.getElementById("message-mob").value;
  if (fname !== "" && lname !== "" && email !== "" && msg !== "") {
  $("#con-submit-mob").css("background-color", "#855BE0");
  document.getElementById("con-submit-mob").classList.remove("disabled");
} else {
  $("#con-submit-mob").css("background-color", "#bbb0d5");
}
}

function tchsprt(){
  var fname=document.getElementById("tec-first-name").value;
  var lname=document.getElementById("tec-last-name").value;
  var email=document.getElementById("tec-email").value;
  var msg=document.getElementById("tec-msg").value;
  if (fname !== "" && lname !== "" && email !== "" && msg !== "") {
  $("#tec-submit").css("background-color", "#855BE0");
  document.getElementById("tec-submit").classList.remove("disabled");
} else {
  $("#tec-submit").css("background-color", "#bbb0d5");
}
}

function tchsprtmob(){
  var fname=document.getElementById("tec-first-name-mob").value;
  var lname=document.getElementById("tec-last-name-mob").value;
  var email=document.getElementById("tec-email-mob").value;
  var msg=document.getElementById("tec-msg-mob").value;
  if (fname !== "" && lname !== "" && email !== "" && msg !== "") {
  $("#tec-submit-mob").css("background-color", "#855BE0");
  document.getElementById("tec-submit-mob").classList.remove("disabled");
} else {
  $("#tec-submit-mob").css("background-color", "#bbb0d5");
}
}
function viewall(){
  document.getElementById("view-more").classList.toggle("acc-hide");
}



/



