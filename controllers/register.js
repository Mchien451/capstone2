// DOM
document.querySelector('#submit').onclick = function() {
    let user = new InfoUser();
    user.phone = document.querySelector('#phone').value;
    user.email = document.querySelector('#email').value;
    user.name = document.querySelector('#name').value;
    user.password = document.querySelector('#password').value;
    user.gender = document.querySelector('#gender').value;



    // check sucess và fail
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user
    })
    promise.then(function(result) {
        console.log(result.data)
        alert("Bạn đã đăng ký tài khoản thành công")
    })
    promise.catch(function(err) {
        console.log('err');
        alert("Bạn đã đăng ký tài khoản thất bại")
    })
}