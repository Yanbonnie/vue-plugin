import ModalComponent from './modal.vue'
const Modal = {
	install:function(Vue){
		Vue.component('Modal',ModalComponent);
	}
}

export default Modal