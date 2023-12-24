// DOMが完全に読み込まれた後に実行されるコード
document.addEventListener('DOMContentLoaded', function() {
    function loadTouristInfo() {
        var element = document.getElementById('touristInfo');
        if (element) {
            element.innerText = '京都は、千年以上日本の首都であり続け、多くの古い寺院、文化遺産が残る街です。';
        }
    }

    loadTouristInfo();
});
