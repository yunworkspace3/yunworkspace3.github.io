const rootElement = '#app';

const app = Vue.createApp({
	data() {
		return {
			data: reverse ? data.reverse() : data,
			picturePath,
		};
	},
	methods: {
		imgSrc(item) {
			return `${this.picturePath}/${item.img}`;
		},
	},
});

const vm = app.mount(rootElement);