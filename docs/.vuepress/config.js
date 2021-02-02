module.exports = {
    title: 'zz',
    description:'',
	themeConfig: {
	     search: false,
	     searchMaxSuggestions: 10
	},
	  // 导航栏
	themeConfig: {  
	    nav: [
		  { text: 'Home', link: '/' },
	      { text: 'About', link: '/about/index' },
	      { text: 'Mine', link: '/mine/index' }
	    ],
		// sidebar:{
		// 	'/about/':[{
		// 		title: 'zz',
		// 		children: [
		// 			{ title: '动画', path: '/about/slide/slide1'},
		// 			{ title: '插件', path: '/about/slide/slide2' },
		// 			{ title: '其他', path: '/about/slide/slide3' }
		// 		]
		// 	}]
			// '/about/':[{
			// 	title: '关于',
			// 	children: [
			// 		{ title: '关于01',
			// 			children:[
			// 				{
			// 					title: '关于01', path: '/about/slide/slide1'
			// 				},
			// 				{
			// 					title: '关于03', path: '/about/slide/slide3'
			// 				}
			// 			]
			// 		},
			// 		{ title: '关于02', path: '/about/slide/slide2' }
			// 	]
			// }]
		// }
	},
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
	serviceWorker: true, // 是否开启 PWA
	"base":"/Blogs/",
    // dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}