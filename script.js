function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo');
  
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    
    function activeTab(index) {
      tabContent.forEach((section) =>{
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativo = 'ativo'
  if(accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);
    
    function activeAccordion(event) {
      event.currentTarget.classList.toggle(ativo);
      event.currentTarget.nextElementSibling.classList.toggle(ativo);
    }
    
    accordionList.forEach((item) =>{
      item.addEventListener('click', activeAccordion);
    })
  }
}
initAccordion();


function initScrollSuave (){

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    
    /*  forma alternativa
    const topo = section.offsetTop
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
      }) */
    }
    
    linksInternos.forEach((link) =>{
      link.addEventListener('click',scrollToSection)
    })
}
initScrollSuave();