'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
  const tabs=document.querySelectorAll('.tabheader__item'),
        tabsParent=document.querySelector('.tabheader'),
        tabContent=document.querySelectorAll('.tabcontent');
  function hideTabContent(){
    tabContent.forEach((item)=>{
      item.classList.remove('show','fade');
      item.classList.add('hide');
      tabs.forEach(item=>{
          item.classList.remove('tabheader__item_active');
      });
    });
  }
  function showTabContent(i=0){
    tabContent[i].classList.remove('hide');
    tabContent[i].classList.add('show', 'fade');
    tabs[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('tabheader__item')){
      hideTabContent();
      tabs.forEach((item, i)=>{
        if(e.target==item){
          showTabContent(i);
        }
      });
    }
  });
});