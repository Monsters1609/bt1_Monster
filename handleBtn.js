export function handleBtn(){
    (()=>{
        setting()
    })()
    function setting(){
        const setting=document.querySelector('#setting')
        setting.addEventListener('click',(e)=>{
            e.preventDefault();
            document.body.style='overflow:hidden ;'
            document.querySelector('.backgroundForm').style='display:block;'
        })
        const close1=document.querySelector('#btnClose')
        close1.addEventListener('click',(e)=>{
            document.querySelector('.backgroundForm').style='display:none;'
            const loading = document.querySelector('.loading');
            loading.style = 'display:none;';
        })
    }
    
}
export function notifycation(){
    if(confirm('Xin chào bn , bn có muốn xem trang web này ko?')==false){
        window.close();
    }else{
        alert('Cảm ơn bn đã vào xem ^_^!');
    }
     
}
