const ID_NAME = "nameItem";
const api = "http://jsonplaceholder.typicode.com/users";
const list = new Array();
const i = 11;
var idUpdate=0;
const loading=document.querySelector('.loading')
function renderList(a) {
    if (a!=null) {
        console.log(a);
        const wrapper = document.querySelector('.tableList')
        const table = document.createElement('table')
        table.id="xxx";
        a.forEach((items) => {
            const tr = document.createElement('tr')
            tr.id = "items-" + items.id;
            const id = document.createElement('td')
            id.id = `stt${items.id}Item`;
            id.innerText = items.id;
            tr.appendChild(id)
            const name = document.createElement('td')
            name.id = `${ID_NAME}${items.id}`;
            name.innerText = items.name;
            tr.appendChild(name)
            const username = document.createElement('td')
            username.id = `username${items.id}Item`;
            username.innerText = items.username;
            tr.appendChild(username)
            const email = document.createElement('td')
            email.id = `email${items.id}Item`;
            email.innerText = items.email;
            tr.appendChild(email)
            const phone = document.createElement('td')
            phone.id = `phone${items.id}Item` ;
            phone.innerText = items.phone;
            tr.appendChild(phone)
            const website = document.createElement('td')
            website.id = `website${items.id}Item`;
            website.innerText = items.website;
            tr.appendChild(website)
            const btnUpdate = document.createElement('td')
            const btn1 = document.createElement('button')
            btn1.id = "Update"
            btn1.innerText = "Update";
            btnUpdate.appendChild(btn1)
            tr.appendChild(btnUpdate)
            btn1.addEventListener("click",(e)=>{
                e.preventDefault();
                renderInput(items.id, items.name, items.username, items.email, items.phone, items.website)
            })
            const btnDelete = document.createElement('td')
            const btn2 = document.createElement('button')
            btn2.id = "Delete"
            btn2.innerText = "Delete";
            btnDelete.appendChild(btn2)
            tr.appendChild(btnDelete)
            btn2.addEventListener("click",(e)=>{
                e.preventDefault();
                handleDelete(items.id)
            })
            table.appendChild(tr)
        })
        wrapper.appendChild(table);
    }
}

function getList() {
    fetch(api)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            data.forEach((items) => {
                list.push(items)
            })
           
            renderList(list)
            const button = document.querySelector('#btn1', )
            button.addEventListener("click", (e) => {
                e.preventDefault();
                handleCreate()
            })
        // console.log(list)
        })
        // .then(() => {
        //     const arrFilter = list.filter(item => item.name.toLowerCase().startsWith("L".toLowerCase()))
        //     console.log(arrFilter)
        // })
    
}
getList();

function handleCreate() {
    loading.setAttribute('class','load')
    const form = document.querySelector("#form");
    const valueName = form.querySelector('#name').value
    const valueUsername = form.querySelector('#username').value
    const valueEmail = form.querySelector('#email').value
    const valuePhone = form.querySelector('#phone').value
    const valueWebsite = form.querySelector('#website').value
    const option = {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            name: valueName,
            username: valueUsername,
            email: valueEmail,
            phone:valuePhone,
            website:valueWebsite,
        })
    }
    fetch(api, option)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            list.push({
                id:response.id,
                name: valueName,
                username: valueUsername,
                email: valueEmail,
                phone:valuePhone,
                website:valueWebsite,
            })
            addRow(response.id, valueName, valueUsername, valueEmail, valuePhone, valueWebsite)
            loading.removeAttribute('class',"load")
            loading.setAttribute('class','loading')
        })
    
}

function addRow(id, name, username, email, phone, website) {
    const wrapper = document.querySelector('.tableList')
    const table = document.querySelector('table')
 
        const tr = document.createElement('tr')
        tr.id = "items-" + id;
        const stt = document.createElement('td')
        stt.id = "stt";
        stt.innerText = id;
        tr.appendChild(stt)
        const td1 = document.createElement('td')
        td1.id = `${ID_NAME}${id}`;
        td1.innerText = name;
        tr.appendChild(td1)
        const td2 = document.createElement('td')
        td2.id = "username";
        td2.innerText = username;
        tr.appendChild(td2)
        const td3 = document.createElement('td')
        td3.id = "email";
        td3.innerText = email;
        tr.appendChild(td3)
        const td4 = document.createElement('td')
        td4.id = "phone";
        td4.innerText = phone;
        tr.appendChild(td4)
        const td5 = document.createElement('td')
        td5.id = "website";
        td5.innerText = website;
        tr.appendChild(td5)
        const btnUpdate = document.createElement('td')
        const btn1 = document.createElement('button')
        btn1.id = "update";
        btn1.innerText = "Update";
        btnUpdate.appendChild(btn1)
        tr.appendChild(btnUpdate)
        const btnDelete = document.createElement('td')
        const btn2 = document.createElement('button')
        btn2.id = "delete";
        btn2.innerText = "Delete";
        btnDelete.appendChild(btn2)
        tr.appendChild(btnDelete)
        console.log( table)
        table.appendChild(tr)
        wrapper.appendChild(table);
        
}
function handleDelete(id){
    loading.setAttribute('class','load')
    const option =
    {
      method:"DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    console.log(id)
    fetch(api+'/'+id,option)
    .then((response)=>response.json())
    .then(()=>{
       const Delete =document.querySelector('#items-'+id)
       if(Delete){
        Delete.remove();
       }
       loading.removeAttribute('class',"load")
       loading.setAttribute('class','loading')
    })
}
function renderInput(id, name, username, email, phone, website){
    idUpdate=id;
    const update1=document.querySelector('#updateName');
    const update2=document.querySelector('#updateUsername');
    const update3=document.querySelector('#updateEmail');
    const update4=document.querySelector('#updatePhone');
    const update5=document.querySelector('#updateWebsite');
    update1.value=name;
    update2.value=username;
    update3.value=email;
    update4.value=phone;
    update5.value=website;
  }
  function updateList(){
    loading.setAttribute('class','load')
    if (idUpdate>0){
      const updateName=document.querySelector('#updateName');
      const updateUsername=document.querySelector('#updateUsername');
      const updateEmail=document.querySelector('#updateEmail');
      const updatePhone=document.querySelector('#updatePhone');
      const updateWebsite=document.querySelector('#updateWebsite');
      const name = updateName.value;
      const username=updateUsername.value;
      const email=updateEmail.value;
      const phone=updatePhone.value;
      const website=updateWebsite.value;
      const option ={
        method:"PUT",
        body: JSON.stringify({
          id: idUpdate,
          name:name,
          username:username,
          email:email,
          phone:phone,
          website:website
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
      const url = api  + "/" + idUpdate;
      fetch(url,option)
      .then((response)=>response.json())
      .then((data) => {
        console.log(data)
          const td=document.querySelector(`#stt${idUpdate}Item`);
          console.log(td)
          td.innerText=data.id
          const td1=document.querySelector(`#${ID_NAME}${idUpdate}`);
          td1.innerText=data.name
          const td2=document.querySelector(`#username${idUpdate}Item `);
          td2.innerText=data.username
          const td3=document.querySelector(`#email${idUpdate}Item `);
          td3.innerText=data.email
          const td4=document.querySelector(`#phone${idUpdate}Item `);
          td4.innerText=data.phone
          const td5=document.querySelector(`#website${idUpdate}Item `);
          td5.innerText=data.website
          loading.removeAttribute('class',"load")
          loading.setAttribute('class','loading')
      }) 
    }
   const submit=document.querySelector('#btn2')
   submit.addEventListener("click",(e)=>{
       e.preventDefault();
       updateList();
   })
}

function handleSearch() {
    const table=document.querySelector('#xxx');
    const inputSearch=document.querySelector('#inputSearch');
    const valueSearch=inputSearch.value.toUpperCase();
    console.log(valueSearch)
    //filter theo search
    const search=list.filter((items)=>items.name.toUpperCase().includes(valueSearch))
    //Remove bang cu~
    table.remove();
    //Gender bang theo search
    renderList(search)
}
const btn2 =document.querySelector('#btn2')
btn2.addEventListener('click',(e)=>{
    e.preventDefault;
    updateList()
})
const btnSearch=document.querySelector('#btnSearch')
btnSearch.addEventListener('click',(e)=>{
    e.preventDefault;
    handleSearch()
})