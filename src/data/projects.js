export const projects = {
    sectionTitle: 'Personal Projects',
    icon: null,
    description: 'Projects, I have completed & attended are listed below. To get general information about private project or not-finished projects you can get in touch.',
    categories: [
        {
            name: 'Cryptocurrency',
            list: [{
                url: 'https://github.com/joepegler/Trader',
                title: 'CryptoCurrency Algorithm Trading Bot',
                description: 'Automatic trader that trades a custom built algorithm using techincal analysis'
            }, {
                url: 'https://github.com/joepegler/CryBot',
                title: 'CryptoBot',
                description: 'Collects rich cryptocurrency trade data from the cryptocurrency exchanges with the highest volume'
            }, {
                url: 'https://github.com/joepegler/gdaxArb',
                title: 'GDax Arbitrage Trader',
                description: 'An automatic trader that does cryptocurrency arbitrage on Coinbase'
            }],
        },
        {
            name: 'Assorted',
            list: [{
                url: 'https://github.com/joepegler/AtheistNews',
                title: 'Atheist News App',
                description: 'A cordova hybrid mobile app built with Ionic that displays Atheist news from reddit'
            },
            {
                url: 'https://github.com/joepegler/Waggli',
                title: 'Waggli',
                description: 'Wordpress theme for a dog walking marketplace business'
            }]
        }
    ]
};

export default projects;
