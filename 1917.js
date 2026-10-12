document.querySelectorAll('.open_popup').forEach(i => 
    {
       i.addEventListener('click', () => {
        const popup = document.getElementById(i.dataset.popup);
        popup.classList.add('is-open');
       })
    }
)
document.querySelectorAll('.popup').forEach(popup => 
    {
        const close = popup.querySelector('.popup_close')
        close.addEventListener('click', () => {
            popup.classList.remove('is-open');
        }
        )
       
    }
)