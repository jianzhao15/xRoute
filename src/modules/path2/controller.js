import Router from '../../route';

class PageModel {
    constructor(){
        this.init();
    }
    init() {
        console.log('This\'s path2 file');

        document.querySelector('.route-btn').addEventListener('click', () => {
            Router.go('path1');
        })
    }
}

module.exports = PageModel;