module.exports = {
    base: '/lyrebird/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Lyrebird',
            description: '面向移动应用的插件式测试工作台'
        }
    },
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/' },
            { text: '检查器', link: '/checker/'},
            { text: '插件', link: '/plugins/'},
            { text: '高级', link: '/advance/'},
            { text: '开发者指南', link: '/develop/' },
            {
                text: '代码仓库',
                items: [
                    { text: 'Lyrebird', link: 'https://github.com/Meituan-Dianping/lyrebird' },
                    { text: 'iOS', link: 'https://github.com/Meituan-Dianping/lyrebird-ios' },
                    { text: 'Android', link: 'https://github.com/Meituan-Dianping/lyrebird-android' },
                    { text: 'ApiCoverage', link: 'https://github.com/Meituan-Dianping/lyrebird-api-coverage' },
                    { text: 'Tracking', link: 'https://github.com/Meituan-Dianping/lyrebird-tracking'}
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                '',
                'mockdata',
                'checker',
                'plugin',
                'command-line',
                'api',
                'faq'
            ],
            '/checker/': [
                ''
            ],
            '/plugins/': [
                '',
                'android',
                'ios',
                'tracking',
                'api-coverage'
            ],
            '/advance/': [
                '',
                'eventbus'
            ],
            '/develop/': [
                '',
                'plugin'
            ],
            '/aboutus/': [
                ''
            ]
        }
    }
}