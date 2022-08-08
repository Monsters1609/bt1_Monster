const api = "https://dummyjson.com/users";
const list = new Array();
const tableList = document.querySelector('.list');
const i= 30;
function renderList(valueList) {
    const table = document.createElement('table');
    table.id = 'table';
    (function thTitle() {
        const trTitle = document.createElement('tr');
        trTitle.id = 'trTitle';
        const thStt = document.createElement('th');
        thStt.innerText = 'Stt';
        thStt.id = 'thStt';
        trTitle.appendChild(thStt);
        const thFirstName = document.createElement('th');
        thFirstName.innerText = 'FirstName';
        thFirstName.id = 'thFirstName';
        trTitle.appendChild(thFirstName);
        const thLastName = document.createElement('th');
        thLastName.innerText = 'LastName';
        thLastName.id = 'thLastName';
        trTitle.appendChild(thLastName);
        const thAge = document.createElement('th');
        thAge.innerText = 'Age';
        thAge.id = 'thAge';
        trTitle.appendChild(thAge);
        const thGender = document.createElement('th');
        thGender.innerText = 'Gender';
        thGender.id = 'thGender';
        trTitle.appendChild(thGender);
        const thEmail = document.createElement('th');
        thEmail.innerText = 'Email';
        thEmail.id = 'thEmail';
        trTitle.appendChild(thEmail);
        const thPhone = document.createElement('th');
        thPhone.innerText = 'Phone';
        thPhone.id = 'thPhone';
        trTitle.appendChild(thPhone);
        const thUsername = document.createElement('th');
        thUsername.innerText = 'Username';
        thUsername.id = 'thUsername';
        trTitle.appendChild(thUsername);
        const thPassword = document.createElement('th');
        thPassword.innerText = 'Password';
        thPassword.id = 'thPassword';
        trTitle.appendChild(thPassword);
        const thBirthDate = document.createElement('th');
        thBirthDate.innerText = 'BirthDate';
        thBirthDate.id = 'thBirthDate';
        trTitle.appendChild(thBirthDate);
        const thDomain = document.createElement('th');
        thDomain.innerText = 'Domain';
        thDomain.id = 'thDomain';
        trTitle.appendChild(thDomain);
        const thIp = document.createElement('th');
        thIp.innerText = 'Ip';
        thIp.id = 'thIp';
        trTitle.appendChild(thIp);
        const thUpdate = document.createElement('th');
        thUpdate.innerText = 'Update';
        thUpdate.id = 'thUpdate';
        trTitle.appendChild(thUpdate);
        const thDelete = document.createElement('th');
        thDelete.innerText = 'Delete';
        thDelete.id = 'thDelete';
        trTitle.appendChild(thDelete);
        table.appendChild(trTitle);
    }())
    valueList.forEach((item) => {
        const trValue = document.createElement('tr');
        trValue.id = `trValue${item.id}`;
        trValue.className = 'trValue';
        const tdStt = document.createElement('td');
        tdStt.innerText = item.id;
        tdStt.id = 'tdStt';
        trValue.appendChild(tdStt);
        const tdFirstName = document.createElement('td');
        tdFirstName.innerText = item.firstName;
        tdFirstName.id = 'tdFirstName';
        trValue.appendChild(tdFirstName);
        const tdLastName = document.createElement('td');
        tdLastName.innerText = item.lastName;
        tdLastName.id = 'tdLastName';
        trValue.appendChild(tdLastName);
        const tdAge = document.createElement('td');
        tdAge.innerText = item.age;
        tdAge.id = 'tdAge';
        trValue.appendChild(tdAge);
        const tdGender = document.createElement('td');
        tdGender.innerText = item.gender;
        tdGender.id = 'tdGender';
        trValue.appendChild(tdGender);
        const tdEmail = document.createElement('td');
        tdEmail.innerText = item.email;
        tdEmail.id = 'tdEmail';
        trValue.appendChild(tdEmail);
        const tdPhone = document.createElement('td');
        tdPhone.innerText = item.phone;
        tdPhone.id = 'tdPhone';
        trValue.appendChild(tdPhone);
        const tdUsername = document.createElement('td');
        tdUsername.innerText = item.username;
        tdUsername.id = 'tdUsername';
        trValue.appendChild(tdUsername);
        const tdPassword = document.createElement('td');
        tdPassword.innerText = item.password;
        tdPassword.id = 'tdPassword';
        trValue.appendChild(tdPassword);
        const tdBirtdDate = document.createElement('td');
        tdBirtdDate.innerText = item.birthDate;
        tdBirtdDate.id = 'tdBirtdDate';
        trValue.appendChild(tdBirtdDate);
        const tdDomain = document.createElement('td');
        tdDomain.innerText = item.domain;
        tdDomain.id = 'tdDomain';
        trValue.appendChild(tdDomain);
        const tdIp = document.createElement('td');
        tdIp.innerText = item.ip;
        tdIp.id = 'tdIp';
        trValue.appendChild(tdIp);
        const tdUpdate = document.createElement('td');
        const btnUpdate = document.createElement('button')
        btnUpdate.innerText = 'Update';
        btnUpdate.id = 'btnUpdate'
        btnUpdate.addEventListener('click', (e) => {
            // e.preventDefault();
            document.body.style = 'overflow:hidden ;'
            document.querySelector('.backgroundForm').style = 'display:block;'
            renderInput(item.id, item.firstName, item.lastName, item.age, item.gender, item.email, item.phone, item.username, item.password, item.birthDate, item.domain, item.ip)
        })
        tdUpdate.appendChild(btnUpdate)
        tdUpdate.id = 'tdUpdate';
        trValue.appendChild(tdUpdate);
        const tdDelete = document.createElement('td');
        const btnDelete = document.createElement('button')
        btnDelete.innerText = 'Delete';
        btnDelete.id = 'btnDelete'
        btnDelete.addEventListener('click', (e) => {
            e.preventDefault();
            handleDelete(item.id)
        })
        tdDelete.appendChild(btnDelete)
        tdDelete.id = 'tdDelete';
        trValue.appendChild(tdDelete);
        table.appendChild(trValue);
    })
    tableList.appendChild(table);
}

function getListTable() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            data.users.forEach(items => {
                list.push(items)
            });
            renderList(list);
            const btnAdd = document.querySelector('#itemBtnAdd')
            btnAdd.addEventListener('click', (e) => {
                e.preventDefault();
                handleAdd();
                document.querySelector('.backgroundForm').style = 'display:none;'
            })
        })
}
getListTable();

function handleAdd() {
    const loading = document.querySelector('.loading');
    loading.style = 'display:block;';
    const formAdd = document.querySelector('#formAdd');
    const addFirstName = formAdd.querySelector('#addFirstName').value;
    const addLastName = formAdd.querySelector('#addLastName').value;
    const addAge = formAdd.querySelector('#addAge').value;
    const addGenden = formAdd.querySelector('#addGender').value;
    const addEmail = formAdd.querySelector('#addEmail').value;
    const addPhone = formAdd.querySelector('#addPhone').value;
    const addUsername = formAdd.querySelector('#addUsername').value;
    const addPassword = formAdd.querySelector('#addPassword').value;
    const addBirthDate = formAdd.querySelector('#addBirthDate').value;
    const addDomain = formAdd.querySelector('#addDomain').value;
    const addIp = formAdd.querySelector('#addIp').value;
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: addFirstName,
            lastName: addLastName,
            age: addAge,
            gender: addGenden,
            email: addEmail,
            phone: addPhone,
            username: addUsername,
            password: addPassword,
            birthDate: addBirthDate,
            domain: addDomain,
            ip: addIp,
        })
    }
    fetch(api + '/add', option)
        .then((res) => res.json())
        .then((data) => {
            list.push({
                firstName: addFirstName,
                lastName: addLastName,
                age: addAge,
                gender: addGenden,
                email: addEmail,
                phone: addPhone,
                username: addUsername,
                password: addPassword,
                birthDate: addBirthDate,
                domain: addDomain,
                ip: addIp,
            }) 
            addRow(data.id, addFirstName, addLastName, addAge, addGenden, addEmail, addPhone, addUsername, addPassword, addBirthDate, addDomain, addIp)
            const loading = document.querySelector('.loading');
            loading.style = 'display:none;';
        })


}

function addRow(id, firstName, lastName, age, gender, email, phone, username, password, birthDate, domain, ip) {
    const table = document.querySelector('#table');
    const trValue = document.createElement('tr');
    trValue.id = `trValue${id}`;
    trValue.className = 'trValue';
    const tdStt = document.createElement('td');
    tdStt.innerText = id
    tdStt.id = 'tdStt';
    trValue.appendChild(tdStt);
    const tdFirstName = document.createElement('td');
    tdFirstName.innerText = firstName;
    tdFirstName.id = 'tdFirstName';
    trValue.appendChild(tdFirstName);
    const tdLastName = document.createElement('td');
    tdLastName.innerText = lastName;
    tdLastName.id = 'tdLastName';
    trValue.appendChild(tdLastName);
    const tdAge = document.createElement('td');
    tdAge.innerText = age;
    tdAge.id = 'tdAge';
    trValue.appendChild(tdAge);
    const tdGender = document.createElement('td');
    tdGender.innerText = gender;
    tdGender.id = 'tdGender';
    trValue.appendChild(tdGender);
    const tdEmail = document.createElement('td');
    tdEmail.innerText = email;
    tdEmail.id = 'tdEmail';
    trValue.appendChild(tdEmail);
    const tdPhone = document.createElement('td');
    tdPhone.innerText = phone;
    tdPhone.id = 'tdPhone';
    trValue.appendChild(tdPhone);
    const tdUsername = document.createElement('td');
    tdUsername.innerText = username;
    tdUsername.id = 'tdUsername';
    trValue.appendChild(tdUsername);
    const tdPassword = document.createElement('td');
    tdPassword.innerText = password;
    tdPassword.id = 'tdPassword';
    trValue.appendChild(tdPassword);
    const tdBirtdDate = document.createElement('td');
    tdBirtdDate.innerText = birthDate;
    tdBirtdDate.id = 'tdBirtdDate';
    trValue.appendChild(tdBirtdDate);
    const tdDomain = document.createElement('td');
    tdDomain.innerText = domain;
    tdDomain.id = 'tdDomain';
    trValue.appendChild(tdDomain);
    const tdIp = document.createElement('td');
    tdIp.innerText = ip;
    tdIp.id = 'tdIp';
    trValue.appendChild(tdIp);
    const tdUpdate = document.createElement('td');
    const btnUpdate = document.createElement('button')
    btnUpdate.innerText = 'Update';
    btnUpdate.id = 'btnUpdate'
    btnUpdate.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style = 'overflow:hidden ;'
        document.querySelector('.backgroundForm').style = 'display:block;'
    })
    tdUpdate.appendChild(btnUpdate)
    tdUpdate.id = 'tdUpdate';
    trValue.appendChild(tdUpdate);
    const tdDelete = document.createElement('td');
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Delete';
    btnDelete.id = 'btnDelete'
    btnDelete.addEventListener('click', (e) => {
        e.preventDefault();
        handleDelete(id)
    })
    tdDelete.appendChild(btnDelete)
    tdDelete.id = 'tdDelete';
    trValue.appendChild(tdDelete);
    table.appendChild(trValue);
    tableList.appendChild(table);
}

function handleDelete(id) {
    const loading = document.querySelector('.loading');
    loading.style = 'display:block;';
    const option = {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    console.log(id)
    fetch(api + `/` + id, option)
        .then((response) => response.json())
        .then((data) => {
            const Delete = document.querySelector(`#trValue${data.id}`)
            if (Delete) {
                Delete.remove();
            }
            const loading = document.querySelector('.loading');
            loading.style = 'display:none;';
        })
}

function renderInput(id, firstName, lastName, age, gender, email, phone, username, password, birthDate, domain, ip) {
    const formUpdate = document.querySelector('#formUpdate');
    const updateFirstName = formUpdate.querySelector('#updateFirstName');
    const updateLastName = formUpdate.querySelector('#updateLastName');
    const updateAge = formUpdate.querySelector('#updateAge');
    const updateGenden = formUpdate.querySelector('#updateGender');
    const updateEmail = formUpdate.querySelector('#updateEmail');
    const updatePhone = formUpdate.querySelector('#updatePhone');
    const updateUsername = formUpdate.querySelector('#updateUsername');
    const updatePassword = formUpdate.querySelector('#updatePassword');
    const updateBirthDate = formUpdate.querySelector('#updateBirthDate');
    const updateDomain = formUpdate.querySelector('#updateDomain');
    const updateIp = formUpdate.querySelector('#updateIp');
    updateFirstName.value = firstName;
    updateLastName.value = lastName;
    updateAge.value = age;
    updateGenden.value = gender;
    updateEmail.value = email;
    updatePhone.value = phone;
    updateUsername.value = username;
    updatePassword.value = password;
    updateBirthDate.value = birthDate;
    updateDomain.value = domain;
    updateIp.value = ip;

    function HandleUpdate() {
        const loading = document.querySelector('.loading');
        loading.style = 'display:block;';
        const option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: updateFirstName.value,
                lastName: updateLastName.value,
                age: updateAge.value,
                gender: updateGenden.value,
                email: updateEmail.value,
                phone: updatePhone.value,
                username: updateUsername.value,
                password: updatePassword.value,
                birthDate: updateBirthDate.value,
                domain: updateDomain.value,
                ip: updateIp.value,
            })
        }

        fetch(api + '/' + id, option)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                const newFirstname = document.querySelector('#tdFirstName');
                newFirstname.innerText = data.firstName;
                const newLastname = document.querySelector('#tdLastName');
                newLastname.innerText = data.lastName;
                const newAge = document.querySelector('#tdAge');
                newAge.innerText = data.age;
                const newGender = document.querySelector('#tdGender');
                newGender.innerText = data.gender;
                const newEmail = document.querySelector('#tdEmail');
                newEmail.innerText = data.email;
                const newPhone = document.querySelector('#tdPhone');
                newPhone.innerText = data.phone;
                const newUsername = document.querySelector('#tdUsername');
                newUsername.innerText = data.username;
                const newPassword = document.querySelector('#tdPassword');
                newPassword.innerText = data.password;
                const newBirthDate = document.querySelector('#tdBirtdDate');
                newBirthDate.innerText = data.birthDate;
                const newDomain = document.querySelector('#tdDomain');
                newDomain.innerText = data.domain;
                const newIp = document.querySelector('#tdIp');
                newIp.innerText = data.ip;
                const loading = document.querySelector('.loading');
                loading.style = 'display:none;';
            })
    }
    const btnUpdate = document.querySelector('#itemBtnUpdate')
    btnUpdate.addEventListener('click', (e) => {
        e.preventDefault();
        HandleUpdate();
        document.querySelector('.backgroundForm').style='display:none;'
    })
}



function HandleFilter() {
    const table=document.querySelector('#table');
    const valueSearch=document.querySelector('#inputSearch').value.toUpperCase();
    const search=list.filter((item)=>item.firstName.toUpperCase().includes(valueSearch));
    table.remove();
    renderList(search);
}
const btnFilter=document.querySelector('#btnFilter');
btnFilter.addEventListener('click',(e)=>{
    e.preventDefault();
    HandleFilter();
})
import {
    handleBtn,
    notifycation
} from "./handleBtn.js";
(() => {
    handleBtn()
    notifycation()
})()