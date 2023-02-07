// const baseUrl = 'http://192.168.184.1:7777'
const baseUrl = 'http://127.0.0.1:5000'

const config = {
	locale: 'zh-CN', // en-US, zh-CN
	url: baseUrl,
	debug: {
		http: false // http request log
	},
	api: `${baseUrl}`
}

export default config
 