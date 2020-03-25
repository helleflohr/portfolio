class Fadeservice {
    constructor() {

    }

    fade() {
        AOS.init({
            duration: 1200,
        });
    }
}

const _fadeService = new Fadeservice();
export default _fadeService;