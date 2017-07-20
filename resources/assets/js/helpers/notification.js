import { get } from './api'

export default {
	state: {
		unreadTotal : 0
	},
	count() {
		get('/count-unread-notification')
			.then((res) => {
				this.state.unreadTotal = res.data
			})
	}
}