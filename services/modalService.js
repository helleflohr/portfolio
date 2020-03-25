class ModalService {
    constructor() {}

    modal() {
        let modalBtns = document.querySelectorAll(".modal-btn");
        modalBtns.forEach(function (btn) {
            btn.onclick = function () {
                let modal = btn.getAttribute('data-modal');
                document.getElementById(modal).style.display = "block";
            }
        });

        let closeBtns = document.querySelectorAll(".close");
        closeBtns.forEach(function (btn) {
            btn.onclick = function () {
                let modal = btn.closest('.modal');
                modal.style.display = "none";
            }
        });

        window.onclick = function (event) {
            if (event.target.className === "modal") {
                event.target.style.display = "none";
            }
        }

        const onEscape = function (e) {
            if (this.open && e.keyCode === 27) {
                console.log(e);
                let modal = e.onEscape('.modal');
                modal.style.display = "none";
            }
        }
        document.addEventListener('keydown', onEscape)
    }
}
const _modalService = new ModalService();
export default _modalService;