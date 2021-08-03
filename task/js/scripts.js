// making json from student form
const formElement = document.querySelector('form#studForm')
const getFormJSON = (form) => {
    const data = new FormData(form);
    return Array.from(data.keys()).reduce((result, key) => {
        if (result[key]) {
            result[key] = data.getAll(key)
            return result
        }
        result[key] = data.get(key);
        return result;
    }, {});
}
const handler = (e) => {
    e.preventDefault();
    const valid = formElement.reportValidity();
    if (valid) {
        const result = getFormJSON(formElement);
        const output = {
            ...result
        }
        console.log(output)
    }
}
formElement.addEventListener('submit', handler)
// making json from teacher form
const teachForm = document.querySelector('form#teacherForm')
const getJSON = (form) => {
    const data = new FormData(form);
    return Array.from(data.keys()).reduce((result, key) => {
        if (result[key]) {
            result[key] = data.getAll(key)
            return result
        }
        result[key] = data.get(key);
        return result;
    }, {})
}
const tHandler = (e) => {
    e.preventDefault();
    const valid = teachForm.reportValidity();
    if (valid) {
        const result = getJSON(teachForm);
        const output = {
            ...result
        }
        console.log(output)
    }
}
teachForm.addEventListener('submit', tHandler)
//check all checkboxes
$('.selectAll').click(function () {
    if ($(this).is(':checked')) {
        $('input:checkbox').attr('checked', true);
    } else {
        $('input:checkbox').attr('checked', false);
    }
})
//clearing inputs
$(document).ready(function () {
    let clear = document.getElementById('reset');
    let inputs = document.querySelectorAll('input')
    clear.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
    })

})

getDataByCountries = () => {
    const api = "https://statistics.abakus-center.ru/statistic/students/country";
    fetch(api).then(
        res => {
            res.json().then(
                data => {
                    console.log(data);
                    if (data.length > 0) {

                        let temp = "";
                        let i = 1;
                        data.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td> " + i++ + " </td>";
                            temp += "<td>" + itemData.country + "</td>";
                            temp += "<td>" + itemData.count + "</td></tr>";
                        });
                        document.getElementById('cData').innerHTML = temp;
                    }
                }
            )
        }
    )
}

//adding rows
const tbodyEl = document.querySelector('tbody')

function addRow() {
    tbodyEl.innerHTML += `
                <tr>
                    <td>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="form-check-input" id="customCheck2">
                            <label class="custom-control-label" for="customCheck1"></label>
                        </div>
                    </td>
                    <td><input class="form-control" placeholder="Введите задание"></td>
                    <td><input class="form-control" placeholder="Напишите комментарий"></td>
                    <td><input type="date" id="daterange"  class="form-control" ></td>
                    <td><input type="date" class="form-control" ></td>
                    <td><input class="form-control" placeholder="Оценка"></td>
                    <td><input type="time" class="form-control" ></td>
                    <td><div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item href="">изменить</a> </li>
    <li><a class="dropdown-item href="">параметры</a></li>
    <li><a class="dropdown-item href="">тестировать</a></li>
    <li><a class="dropdown-item href="">удалить</a></li>
  </ul>
</div>
</td>
                </tr>
                `
}
$('#adding').click(function (){
    $('#pop-up-modal').modal();
})