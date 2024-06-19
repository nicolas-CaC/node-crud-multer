const errorCheck = (error) => {
    if (error.error_code === 1 ||
        error.error_code === 3 ||
        error.error_code === 10)
        alert(error.error_desc)

    if (error.error_code === 0) {
        alert(error.desc)
        location.href = '/'
    }
}
