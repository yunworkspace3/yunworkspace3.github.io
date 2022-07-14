(function (_picturePath, _vertical, _reverse, _data) {
	'use strict';

	const data = function () {
		if (_picturePath) {
			_data = _data.map((item) => {
				item.img = `${_picturePath}/${item.img}`;
				return item;
			});
		}
		
		if (_reverse) {
			_data.reverse();
		}
		
		return {
			data: _data,
			vertical: _vertical,
			picturePath: _picturePath,
			windowWidth: 0,
		};
	};

	const methods = {
		updateWindowWidth() {
			this.windowWidth = window.innerWidth;
		},
		bricks(_wall) {
			let items = [];
			for (let i = 0; i < this.data.length; i++) {
				if (i % this.walls === _wall) {
					items.push(i);
				}
			}
			return items;
		},
	};

	const computed = {
		walls() {
			if (!this.vertical) {
				return 1;
			}

			const width = this.windowWidth;
			if (width < 978) {
				return 1;
			} else if (width >= 978 && width < 1467) {
				return 2;
			} else if (width >= 1467) {
				return 3;
			}
		},
	};

	const mounted = function () {
		this.updateWindowWidth();
		window.addEventListener('resize', () => {
			this.updateWindowWidth();
		});
	};

	const rootElement = '#app';
	const app = Vue.createApp({ data, methods, computed, mounted });

	app.component('v-card', {
		props: {
			img: {
				type: String,
				default: null,
			},
			primary: {
				type: String,
				default: null,
			},
			secondary: {
				type: String,
				default: null,
			},
			paragraph: {
				type: Array,
				default: [],
			},
			url: {
				type: String,
				default: null,
			},
		},
		template: /*html*/ `
			<div class="card-container">
				<div class="img-container">
					<img :src="img">
				</div>
				<div class="card-body">
					<h4 class="card-title">
						<span class="primary">{{ primary }}</span>
						<span class="secondary float-end">{{ secondary }}</span>
					</h4>
					<p v-for="p in paragraph" class="card-text">{{ p }}</p>
					<a v-if="url" :href="url" target="_blank" class="btn btn-primary">link</a>
				</div>
			</div>
		`,
	});

	app.mount(rootElement);
})(picturePath, vertical, reverse, data);