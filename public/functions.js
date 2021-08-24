function ShowToast(type, message){
    toastr.options.positionClass = 'toast-bottom-center';
    toastr.options.timeOut = 3000;
    switch (type) {
        case 1:
            toastr.error(message);
            break;
        case 2:
            toastr.success(message);
            break;
        case 3:
            toastr.warning(message);
            break;
        case 4:
            toastr.info(message);
            break;
    }
}