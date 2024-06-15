const deleteButton = document.getElementById('delete-button')
const deleteInput = document.getElementById('delete-id')



const errorCheck = (error) => {
    if (error.error_code === 1 ||
        error.error_code === 3)
        alert(error.error_desc)

    if (error.error_code === 0) {
        alert(error.desc)
        location.href = '/'
    }
}



const deleteButtonHandleClick = (e) => {

    e.preventDefault()

    const { value } = deleteInput

    if (value.length === 0)
        return alert('Debe ingresar un valor')

    const url = './products/' + value

    fetch(url, { method: "DELETE" })
        .then(res => res.json())
        .then(res => errorCheck(res))
        .catch(err => alert(err))
}



deleteButton.addEventListener('click', deleteButtonHandleClick)