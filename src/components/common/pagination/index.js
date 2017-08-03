import paginationComponent from './pagination.vue';

const Pagination = {
	install:function(Vue){
		Vue.component('Pagination',paginationComponent);
	}
}

export default Pagination;