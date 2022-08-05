const btnNotif = document.getElementById('btn-notification')
const notifPanel = document.getElementById('notification-panel')
const logoPageHeader = document.getElementById('logo-pageHeader')
const closeNewsLetter = document.getElementById('close-newsletter-panel')
const newsletterPanel = document.getElementById('newsletter-panel') 
const pageHeaderheroText = document.getElementById('text-pageHeader-heroShot')

btnNotif.addEventListener('click',(e)=>{
    if(e.target.value === 'true'){
        notifPanel.id = 'animation-slide-up'

        setTimeout(()=>{
        notifPanel.style.display = 'none'
        },1000)

        setTimeout(()=>{
            logoPageHeader.id = 'logo-up'
            pageHeaderheroText.id = 'page-header-content'
        },1000)
    }
})


let check 
window.onscroll = function () {
    const scrollYaxis = window.scrollY
    if(check===true) return
    if( scrollYaxis>=500 & scrollYaxis<=650){
        check = true
        newsletterPanel.style.visibility = 'unset'
       return newsletterPanel.id = 'newsletter-panel-up'
    }
};

closeNewsLetter.addEventListener('click',()=>{
    newsletterPanel.id = 'newsletter-panel-down'
    
    setTimeout(()=>{
        newsletterPanel.style.visibility = 'hidden'
    },2400)

    setTimeout(()=>{
        newsletterPanel.style.visibility='unset'
        newsletterPanel.id = 'newsletter-panel-up'
    },60000 * 10 )
})
