const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    audio: [
        {
            name: '你走以后',
            artist: 'FH,黑山羊,COQ GANG',
            url: 'Aplayer/mp3/nizouyihou/nizouyihou.mp3',
            cover: 'Aplayer/mp3/nizouyihou/nizouyihou.jpg',
            lrc: 'Aplayer/mp3/nizouyihou/nizouyihou.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '信仰（翻自 张信哲）',
            artist: '是你的垚',
            url: 'Aplayer/mp3/xinyang/xinyang.mp3',
            cover: 'Aplayer/mp3/xinyang/xinyang.jpg',
            lrc: 'Aplayer/mp3/xinyang/xinyang.lrc',
            theme: '#46718b'
        }
    ]
});