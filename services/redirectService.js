class RedirectService {
    constructor() {}

    redirect() {

        if (window.location.hash === "#introduction" || window.location.hash === "") {
            setTimeout(function () {
                window.location.href = "#aboutMe";
            }, 11000);

        }
    }
}

const _redirectService = new RedirectService();
export default _redirectService;