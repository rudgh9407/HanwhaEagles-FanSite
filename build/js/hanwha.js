$(document).ready(()=>{
  
  $(window).scrollTop(0);
  let window_width = $(window).width();
  $(`body`).addClass('scroll_lock');

  //--- memu ---//
  const slide_header = document.querySelector(`.slide_header`);
  const header_tag = document.querySelector(`header`);
  $(slide_header).on('click', (e)=>{
    if($(e.target).find('i')[0].className == "xi-upload") {
      $(slide_header).find('i').removeClass('xi-upload');
      $(slide_header).find('i').addClass('xi-download');
      gsap.to(header_tag, {x: '0vw', duration: 0.2});
      gsap.to(slide_header, {x: '-1.5vw', duration: 0.2});
    } else {
      $(slide_header).find('i').removeClass('xi-download');
      $(slide_header).find('i').addClass('xi-upload');
      gsap.to(header_tag, {x: '-10vw', duration: 0.2});
      gsap.to(slide_header, {x: '-0vw', duration: 0.2});
    }
  })
  $(`header>h1`).on('click', ()=>{
    window.location.reload();
  })
  
  //--- main_video ---//
  const main_video = document.querySelector(`.main_video`);
  setTimeout(()=>{ main_video.play(); }, 2000)
  setTimeout(()=>{$(`body`).removeClass('scroll_lock');} , 3500);
  const video_text = document.querySelector(`.video_text`);
  setTimeout(()=>{
    const action_color_text = [
      {filter: `drop-shadow(0.3vw 0 0 #F00A)`},
      {filter: `drop-shadow(0vw 0 0 #F00A)`},
      {filter: `drop-shadow(-0.3vw 0 0 #F00A)`},
      {filter: `drop-shadow(0vw 0 0 #F00A)`},
      {filter: `none`},
      {filter: `none`},
      {filter: `none`},
      {filter: `drop-shadow(0.3vw -0.3vw 0 #0F0A)`},
      {filter: `drop-shadow(0vw 0vw 0 #0F0A)`},
      {filter: `drop-shadow(-0.3vw 0.3vw 0 #0F0A)`},
      {filter: `drop-shadow(0vw 0vw 0 #0F0A)`},
      {filter: `none`},
      {filter: `none`},
      {filter: `none`},
      {filter: `drop-shadow(-0.3vw 0.3vw 0 #00FA)`},
      {filter: `drop-shadow(0vw 0vw 0 #00FA)`},
      {filter: `drop-shadow(0.3vw -0.3vw 0 #00FA)`},
      {filter: `drop-shadow(0vw 0vw 0 #00FA)`},
      {filter: `none`},
      {filter: `none`},
      {filter: `none`},
      {filter: `drop-shadow(-0.3vw 0vw 0 #FFFA)`},
      {filter: `drop-shadow(0vw 0 0 #FFFA)`},
      {filter: `drop-shadow(0.3vw 0vw 0 #FFFA)`},
      {filter: `drop-shadow(0vw 0 0 #FFFA)`},
      {filter: `none`},
      {filter: `none`},
      {filter: `none`},
    ];
    const action_color_duration = {
      duration: 4000,
      iterations: Infinity
    }
    video_text.animate(action_color_text, action_color_duration);
  }, 6000);

  //--- Gallery ---//
  const gallery_img_list = $(`.gallery_wrap .img_list`);
  const img_container = $(`.img_container`);
  function slide_gallery(){
    $(img_container).each(function(i,v){
      if($(v).offset().left < (window_width * 2.525)*(-1)) {
        $(v).css({left: '252.5vw'})
      } else {
        $(v).offset({ left: $(v).offset().left -= 1.5});
      }
      $(v).off('mouseenter');
      $(v).on('mouseenter', function(e){
        cancelAnimationFrame(loop_ani);
      });
      $(v).off('mouseleave');
      $(v).on('mouseleave', function(e){
        slide_gallery();
      });
    })
    let loop_ani = requestAnimationFrame(slide_gallery);
  }
  slide_gallery();

  //--- footer ---//
  const btn_top = document.querySelector(`.btn_top`);
  $(btn_top).on('click', ()=>{
    $('html, body').animate({scrollTop: 0}, 0);
  })

  const btn_family = document.querySelector(`.btn_family`);
  const show_family = document.querySelector(`.show_family`);
  let family_flag_key = 0;
  $(btn_family).on('click', (e)=>{
    if(family_flag_key == 0) {
      gsap.to(show_family, {y: '-80vh', duration: 0.8});
      gsap.to(e.target, {borderColor: '#F37320', duration: 0.5, ease: 'Power4.easeOut'});
      gsap.to($(e.target).find('p')[0], {color: '#F37320', duration: 0.3});
      gsap.to($(e.target).find('i')[0], {color: '#F37320', rotate: '45deg' , duration: 0.5});
      family_flag_key = 1;
    } else {
      gsap.to(show_family, {y: '0vh', duration: 0.8});
      gsap.to(e.target, {borderColor: '#FFF', duration: 0.5, ease: 'Power4.easeOut'});
      gsap.to($(e.target).find('p')[0], {color: '#FFF', duration: 0.3});
      gsap.to($(e.target).find('i')[0], {color: '#FFF', rotate: '0deg' , duration: 0.5});
      family_flag_key = 0;
    }
  })


  //--- sub_popup ---//
  const btn_close_sub = document.querySelector(`.btn_close_sub`);
  const sub_popup = document.querySelector(`.sub_popup`);
  const sub_inner = document.querySelector(`.sub_inner`);
  const sub_box_items = $(`.sub_inner > div`);
  const eagles_top_menu = $(`.eagles_top > p`);
  const eagles_bottom_items = $(`.eagles_bottom > div`);
  const menu_players = document.querySelector(`.menu_players`);
  const menu_game = document.querySelector(`.menu_game`);
  const menu_shop = document.querySelector(`.menu_shop`);
  const menu_ticket = document.querySelector(`.menu_ticket`);
  const menu_live = document.querySelector(`.menu_live`);
  const menu_fan = document.querySelector(`.menu_fan`);
  const fan_top_menu = $(`.fan_top > p`);
  const fan_bottom_items = $(`.fan_bottom > div`);

  $(btn_close_sub).on('click', ()=>{
    gsap.to(sub_popup, {y: '-100vh', duration: 0.8, ease: 'Power4.easeOut'});
    $(`body`).removeClass('scroll_lock');
  });


  $(`.menu_eagles, .menu_eagles>article>p`).each((i,v)=>{
    $(v).on("click", (e)=>{
      e.stopPropagation();
      //--- ????????? ---//
      $(sub_box_items).css({transform: 'scale(0)'});
      $(eagles_top_menu).removeClass('active');
      $(eagles_bottom_items).css({display: 'none'});
      //--- ?????? ?????? ---//
      $(`.content_eagles`).css({transform: 'scale(1)'})
      if(i < 2) {
        $(`.eagles_top > p:nth-child(1)`).addClass('active');
        $(`.eagles_bottom > div:nth-child(1)`).css({display: 'flex'});
      } 
      if(i > 1) {
        $(`.eagles_top > p:nth-child(${i})`).addClass('active');
        $(`.eagles_bottom > div:nth-child(${i})`).css({display: 'block'});
      }
      gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
      $(`body`).addClass('scroll_lock');
    })
  })

  $(eagles_top_menu).each((i,v)=>{
    $(v).on('click', (e)=>{
      $(eagles_top_menu).removeClass('active');
      $(v).addClass('active');
      $(eagles_bottom_items).css({display: 'none'});
      if(i == 0) {
        $(`.eagles_bottom > div:nth-child(1)`).css({display: 'flex'});
      } else {
        $(`.eagles_bottom > div:nth-child(${i+1})`).css({display: 'block'});
      }
    })
  })

  $(menu_players).on('click', ()=>{
    $(sub_box_items).css({transform: 'scale(0)'});
    $(`.content_players`).css({transform: 'scale(1)'})
    gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
    $(`body`).addClass('scroll_lock');
  })
  $(menu_game).on('click', ()=>{
    $(sub_box_items).css({transform: 'scale(0)'});
    $(`.content_game`).css({transform: 'scale(1)'})
    gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
    $(`body`).addClass('scroll_lock');
  })
  $(menu_ticket).on('click', ()=>{
    $(sub_box_items).css({transform: 'scale(0)'});
    $(`.content_ticket`).css({transform: 'scale(1)'})
    gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
    $(`body`).addClass('scroll_lock');
  })
  $(menu_live).on('click', ()=>{
    $(sub_box_items).css({transform: 'scale(0)'});
    $(`.content_live`).css({transform: 'scale(1)'})
    gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
    $(`body`).addClass('scroll_lock');
  })

  $(`.btn_product, .menu_shop`).on('click', ()=>{
    $(sub_box_items).css({transform: 'scale(0)'});
    $(`.content_shop`).css({transform: 'scale(1)'})
    gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
    $(`body`).addClass('scroll_lock');
  })

  $(`.menu_fan, btn_gallery`).on('click', ()=>{
    $(sub_box_items).css({transform: 'scale(0)'});
    $(`.content_fan`).css({transform: 'scale(1)'})
    gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
    $(`body`).addClass('scroll_lock');
  })

  $(`.menu_fan, .btn_news, .btn_gallery`).each((i,v)=>{
    $(v).on("click", (e)=>{
      e.stopPropagation();
      //--- ????????? ---//
      $(sub_box_items).css({transform: 'scale(0)'});
      $(fan_top_menu).removeClass('active');
      $(fan_bottom_items).css({display: 'none'});
      //--- ?????? ?????? ---//
      $(`.content_fan`).css({transform: 'scale(1)'})
      if(v.className == "menu_title menu_fan" || v.className == "btn_news") {
        $(`.fan_top > p:nth-child(1)`).addClass('active');
        $(`.fan_bottom > div:nth-child(1)`).css({display: 'flex'});
      } else {
        $(`.fan_top > p:nth-child(2)`).addClass('active');
        $(`.fan_bottom > div:nth-child(2)`).css({display: 'flex'});
      }
      gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
      $(`body`).addClass('scroll_lock');
    })
  })
  $(`.news_item, .read_news`).on('click', (e)=>{
      e.stopPropagation();
      //--- ????????? ---//
      $(sub_box_items).css({transform: 'scale(0)'});
      $(fan_top_menu).removeClass('active');
      $(fan_bottom_items).css({display: 'none'});
      //--- ?????? ?????? ---//
      $(`.content_fan`).css({transform: 'scale(1)'})
      $(`.fan_top > p:nth-child(1)`).addClass('active');
      $(`.fan_bottom > div:nth-child(1)`).css({display: 'flex'});
      gsap.to(sub_popup, {y: '0vh', duration: 0.8, ease: 'Power4.easeOut'});
      $(`body`).addClass('scroll_lock');
  })

  $(fan_top_menu).each((i,v)=>{
    $(v).on('click', (e)=>{
      $(fan_top_menu).removeClass('active');
      $(v).addClass('active');
      $(fan_bottom_items).css({display: 'none'});
      $(`.fan_bottom > div:nth-child(${i+1})`).css({display: 'flex'});
    })
  })


  const member_list = [
    {
      no: 53,
      name: `?????????<br><span>KIM MINWOO</span>`,
      member_img: `transparent url('../img/member-1.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_1.png') no-repeat center center/contain`,
      field_name: `??????<br>????????????`,
      birth: `1995.07.25`,
      health: `186cm, 97kg`,
      school: `??????????????? - ????????? - ?????????`,
      career: `2015 ~ ???????????????<br>2014.03.30 ???????????? ???????????? ???????????????(???????????? ??????)`
    },
    {
      no: 13,
      name: `?????????<br><span>CHOI JAEHUN</span>`,
      member_img: `transparent url('../img/member-2.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_2.png') no-repeat center center/contain`,
      field_name: `??????<br>????????????`,
      birth: `1989.08.27`,
      health: `178cm, 76kg`,
      school: `????????? - ????????? - ????????? - ???????????????`,
      career: ``
    },
    {
      no: 37,
      name: `?????????<br><span>KIM INHWAN</span>`,
      member_img: `transparent url('../img/member-3.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_3.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `1994.01.28`,
      health: `186cm, 88kg`,
      school: `????????? - ????????? - ????????? - ????????????`,
      career: `2016 - ??????????????? ??????`
    },
    {
      no: 43,
      name: `?????????<br><span>JUNG EUNWON</span>`,
      member_img: `transparent url('../img/member-4.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_3.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `2000.01.17`,
      health: `177cm, 78kg`,
      school: `?????? ???????????? - ???????????? - ?????????`,
      career: `2018 ??????????????? ??????`
    },
    {
      no: 8,
      name: `?????????<br><span>ROH SIHWAN</span>`,
      member_img: `transparent url('../img/member-5.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_3.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `2000.12.03`,
      health: `185cm, 96kg`,
      school: `????????? - ????????? - ?????????`,
      career: ``
    },
    {
      no: 16,
      name: `?????????<br><span>HA JUSUK</span>`,
      member_img: `transparent url('../img/member-6.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_3.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `1994.02.25`,
      health: `184cm, 81kg`,
      school: `?????? ?????????-?????????-?????????`,
      career: ``
    },
    {
      no: 45,
      name: `?????????<br><span>LEE JIN YOUNG</span>`,
      member_img: `transparent url('../img/member-7.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_4.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `1997.7.21`,
      health: `183cm, 82kg`,
      school: `?????????-?????????-??????????????????`,
      career: `- 2016~2022 KIA????????????<br>- 2022~ ???????????????`
    },
    {
      no: 12,
      name: `?????????<br><span>MICHAEL ROBERT TAUCHMAN</span>`,
      member_img: `transparent url('../img/member-8.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_4.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `1990.12.03`,
      health: `188cm, 95kg`,
      school: `William Fremd High School-Bradley University`,
      career: ``
    },
    {
      no: 17,
      name: `?????????<br><span>RO SOOKWANG</span>`,
      member_img: `transparent url('../img/member-9.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_4.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `1990.08.06`,
      health: `180cm, 80kg`,
      school: `???????????????-?????????-?????????-?????????`,
      career: ``
    },
    {
      no: 25,
      name: `?????????<br><span>KIM TAEYEON</span>`,
      member_img: `tansparent url('../img/member-10.png') no-repeat center center/contain`,
      field_img: `transparent url('../img/field_4.png') no-repeat center center/contain`,
      field_name: `?????????<br>????????????`,
      birth: `1997.06.10`,
      health: `178cm, 99kg`,
      school: `????????? - ????????? - ?????????`,
      career: `2016 - ??????????????? ??????`
    },
  ];
  const member_detail = document.querySelector(`.member_detail`);
  $(`.btn_detail`).each((i,v)=>{
    $(v).on('click', (e)=>{
      $(`.member_detail_img`).css({background: member_list[i].member_img});
      $(`.member_detail_no`).html(member_list[i].no);
      $(`.member_detail_name`).html(member_list[i].name);
      $(`.field_img`).css({background: member_list[i].field_img});
      $(`.field_name`).html(member_list[i].field_name);
      $(`.member_detail_birth`).html(member_list[i].birth);
      $(`.member_detail_health`).html(member_list[i].health);
      $(`.member_detail_school`).html(member_list[i].school);
      $(`.member_detail_career`).html(member_list[i].career);
      gsap.to(btn_close_sub, {scale: 0, duration: 0.3});
      gsap.to(member_detail, {transform: 'scaleY(1)', duration: 0.3});
    })
  })
  $(`.btn_close_detail_member`).on('click', ()=>{
    gsap.to(member_detail, {transform: 'scaleY(0)', duration: 0.3});
    gsap.to(btn_close_sub, {scale: 1, duration: 0.3});
  })



});