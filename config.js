module.exports = {
    app: {
        px: 'XXX',
        token: 'OTUxNzc2NjMwODQ0NTcxNjg4.YisZDw.kplf8M3hUg03X54oshjQqPVgHPI',
        playing: 'Custom Bot by ❤️ MOONIS'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume' ,'24/7']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
