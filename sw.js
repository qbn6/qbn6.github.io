/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/31/javase-ji-chu/index.html","2c6aa285c6142b6bf5c7d1856887cff7"],["/2019/05/26/java-duo-xian-cheng/index.html","7c182bc356736527d0c240133e1700c0"],["/2019/09/29/mou-pao-pai-xu/index.html","b57d8a5992a4759bb49f56f2798aa923"],["/2019/10/09/zi-ding-yi-yi-chang-lei/index.html","afd7876864f242301cb7ac85da9eabbc"],["/2019/10/14/java-ji-chu/index.html","2b3a28baeeb14f101fbdd8f517d42f1f"],["/2020/05/24/java-xue-xi-lu-xian/index.html","eb7795c70a20d92cde40d200ad7149e4"],["/2020/05/24/vue/index.html","fe5ae46ecc994f28e23231ad7d47094a"],["/2020/05/26/java-wang-hong-mian-shi-ti/index.html","9cf6f19d62cd1c8a7208adcb5c2a0a09"],["/2020/05/26/ke-bian-xing-can-fang-fa/index.html","8d49ac96b66fae5d8eea9576e6af651e"],["/2020/05/26/luo-gu-p1014/index.html","358a843181520443860e7074f18a67b8"],["/2020/05/26/qiu-zhi-shu/index.html","a34da7dbd4aedf83ca341d3e2fd3f298"],["/2020/05/26/suan-fa/index.html","da835a9be6c9701fb6c8a950b0ee20b7"],["/2020/05/26/zi-fu-chuan-fan-zhuan-san-chong-fang-shi/index.html","30706cf7ad1dbe13e86c60fee649d250"],["/2020/05/27/a-li-yun-bu-shu/index.html","722f025764e11bad3db2739aba9a7a62"],["/2020/06/26/zui-da-xiang-tong-zi-chuan/index.html","62680124e36e87c334b4733d15360314"],["/2020/07/26/typora/index.html","8086b5df438af36b08bab63b27fd4ae2"],["/2020/07/26/zi-chuan-chu-xian-ci-shu/index.html","ac89aea286a349a4abb294454f561174"],["/2020/08/21/git/index.html","c63470c8f95f37c01a85e4dd7a01779f"],["/404.html","1c6f4c5e7ed06287d98bafbecce5bae0"],["/about/index.html","b27e7e57de1fda701da4aab1272a80f2"],["/archives/2018/08/index.html","44f2a009b498b3d65872720e5b616f15"],["/archives/2018/index.html","ad6122a5a82a9a321db75d8ae552db3b"],["/archives/2019/05/index.html","20f439b24c3414ffdec78ffaa250cc8b"],["/archives/2019/09/index.html","97f1f27a3ec94b832afa9b96e22b05aa"],["/archives/2019/10/index.html","2b165acf9a9690910865831893fc4667"],["/archives/2019/index.html","3041e13695a20a18a9876693da7ff30d"],["/archives/2020/05/index.html","69bcb39524c537b5c022778529310c1b"],["/archives/2020/06/index.html","dfc7f175a9502b9b8118007321092ac2"],["/archives/2020/07/index.html","a343a3acd0ccda946d1555d3969a2121"],["/archives/2020/08/index.html","99f52350cbc45449e4db5e60365f0323"],["/archives/2020/index.html","164be0693cf74725baff6c7802a783a7"],["/archives/2020/page/2/index.html","85783984448ee77a9f37ffd58cceab03"],["/archives/index.html","7288b05d7a1161edbf45bab6fb75fd64"],["/archives/page/2/index.html","ba507e732aa232574bf12109195369dd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/author/index.html","35f18465b41a6e6a82a3eac785ecc511"],["/books/index.html","8e8351cb5b02707f0306b45990233a1a"],["/categories/Git/index.html","b04e3bf2df0c45563d9f632eb0387285"],["/categories/JavaSE/index.html","8ff8e5ed28ad1972fdb8f5da1cbac54e"],["/categories/Java基础/index.html","d37a18cc93539f2ebf6174a99d70983b"],["/categories/Java异常/index.html","b352f105bbf941fbd0123f2eb3abcf7f"],["/categories/Typora/index.html","06904a70d97bee9c28af96a3d6ab4d89"],["/categories/index.html","7daa5adfcf369a609f74edd962ffa88e"],["/categories/基础类/index.html","7074ca47fb7f8296e042a00024aad936"],["/categories/多线程/index.html","1337a04810edc78f2a05e7736a931adb"],["/categories/技术路线类/index.html","732f0e69eb04c71b5a157abf3703f4e4"],["/categories/洛谷/index.html","dd57c51873f11771d573fc558d0ad92f"],["/categories/算法类/index.html","f6237158b243664a4d34b39d59cdd798"],["/categories/阿里云篇/index.html","da88298c8a1eed400577110c6e79205c"],["/categories/面试/index.html","5dd6848865430256ec034f1d9717d78c"],["/contact/index.html","3b53b4ce2ba02dcbe061e104f27efa8d"],["/css/css.my.css","ea34fcec942bbeb0ca40aaca0ed88de0"],["/css/gallery.css","1d61dbad7c801098e9e336a1e7fb7b7b"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/matery.css","774a69635486b57bf76221b8e51bb224"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","224a2f0a9682e6f9000f5b5000443b97"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/friends/index.html","ca706d1b727d10c9279eab861eb84bec"],["/galleries/2020已经正常运行/index.html","a6484670faa784824450df77bdd7a9df"],["/galleries/index.html","563bfecb2899f42dcd3ca4b47be17d90"],["/galleries/六六的动漫图集/index.html","0b06d85de65ece4e67ab68794bf1d707"],["/galleries/六六的独立空间/index.html","1d84b28f5e986f12eda5909bc35ee513"],["/galleries/小六的2019日记/index.html","e0eb1dade5fa857564741860a8a8af44"],["/galleries/小六的证书系列/index.html","8f3c3f2a7e455546ed024fbfc8f4b489"],["/galleries/阿六失去记忆的2018足迹/index.html","874b77479be0fae11a4f1777fe7a67d7"],["/games/index.html","e36801d9593d3d36454b9b780425560f"],["/index.html","7731912ee966a95dc407bff2d94c26cf"],["/js/click_show_text.js","4ad2e05ada8d6d7ef3d3ac1c3c8e21b6"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/cursor.js","a61538b94ca952574a09735236084d67"],["/js/fireworks.js","ed626c02f6b683ad43208e5d5784a769"],["/js/gallery-encrypt.js","c5f923453a476eee0c66e741c3549ea8"],["/js/love-click.js","ba20c6b83b45c0a66036cc11c47da6e6"],["/js/matery.js","c2d4306a24948ffd6f7f853449c2e44b"],["/js/sakura.js","cb6251075cc14487276119b508cd68bf"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/all.css","0e6a8d020eceb660ebe98adad8639825"],["/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/libs/awesome/webfonts/fa-brands-400.woff2","0425d661f34ffa46604c9dfa344c03bb"],["/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/libs/awesome/webfonts/fa-regular-400.woff2","772a0f14c850c8b0dfe283a95857583e"],["/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/libs/awesome/webfonts/fa-solid-900.woff2","4cc04a31c42f2f9d951547bbce75960b"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","694fcebc5c6758995226be966344ef7c"],["/libs/gitalk/gitalk.css","e4369194a22c7aaf65af93b2a04edb94"],["/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/libs/justifiedGallery/justifiedGallery.min.css","348c6c6fb4b6b302f582519a43892cc2"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","ae76f83708ae62e5a96d38e808392505"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","a260895566c6a9f968a9101d5510f7d6"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","3c37a47598a8970c84db5591f01c483d"],["/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/live2d_models/live2d-widget-model-haruto/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","1cc3c6e1119db282a8a4b62175fdf400"],["/medias/banner/0.jpg","6d8acdb3b968b251904b1a5aef54603e"],["/medias/banner/00.jpg","4667e00dd3e6c3a726be67bd3b10227d"],["/medias/banner/0111.jpg","d4d9b172c56ed9978baf746a178ac257"],["/medias/banner/1.jpg","442b21a2a79b420db0ee211e272fb2db"],["/medias/banner/2.jpg","ffe14f6715d5c9c0ac6463bb6219752d"],["/medias/banner/222.jpg","895da66a2ef2d94718730352164ecb31"],["/medias/banner/26.jpg","9cac8be1e061e684cb449f40e36323b7"],["/medias/banner/3.jpg","dcab1be01034a479aaefd971c76df0a8"],["/medias/banner/333.jpg","4eaeaef919b90ed1c7045f4e70236657"],["/medias/banner/44.jpg","22a50300a642f5043fa1040b7e96c145"],["/medias/banner/5.jpg","ac669fc927093822996b6bfbafc9c3a0"],["/medias/banner/555.jpg","26b777fb92883828af4e64e9b1bf3924"],["/medias/banner/5555555.jpg","1dbb4de77cd8d7a9a3fd899e7f0f9b1a"],["/medias/banner/5656.jpg","a475d578060a2519f2c99f1b89841bf6"],["/medias/banner/6636.jpg","282d5a7a9662f6c855e863c1143c7733"],["/medias/banner/66699.jpg","e394e516969db7fec404f9900a48d5d1"],["/medias/banner/777.jpg","b1b5d09757c629261d3624448ae07f9f"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","bc93ce794469a8d56f805934c5f678ac"],["/medias/featureimages/1.jpg","e394e516969db7fec404f9900a48d5d1"],["/medias/featureimages/10.jpg","222a8094de7c7fa69e8de9ccc7170b58"],["/medias/featureimages/12.jpg","d4a82da83972629757df2dc87a6c7bc0"],["/medias/featureimages/13.jpg","3dc3cdd0b1fb16e1ce038d734c8af32c"],["/medias/featureimages/14.jpg","d6eb1c4c9826ee7d60513947f95d3d83"],["/medias/featureimages/15.jpg","b1b5d09757c629261d3624448ae07f9f"],["/medias/featureimages/18.jpg","656ac82571c93ac1845806683e291d85"],["/medias/featureimages/2.jpg","08aa7a693db4e4814b7d8643b9a62280"],["/medias/featureimages/20.jpg","857106c04d9b694aca762915436a8309"],["/medias/featureimages/21.jpg","941f71bccd2804e369489340a6fd138d"],["/medias/featureimages/22.jpg","87caae854804fd524b83406462952049"],["/medias/featureimages/23.jpg","1bc9d15466af610fab29febe83919172"],["/medias/featureimages/3.jpg","f95b5366d43186754ba5ae548ef1053a"],["/medias/featureimages/4.jpg","21c6e9ce35bbcf90596a9d8b9d433f86"],["/medias/featureimages/5.jpg","6d8acdb3b968b251904b1a5aef54603e"],["/medias/featureimages/6.jpg","4ed322de08d8cb1712d20e2c5041829f"],["/medias/featureimages/7.jpg","7d35f74132f5b3b9e027c258f188b2d7"],["/medias/featureimages/8.jpg","4ba3aa922d0bdc8bbb88fae041c851c7"],["/medias/featureimages/9.jpg","673af5895c6bdfdf1c5cdceecd0da2a6"],["/medias/featureimages/photo-1519638399535-1b036603ac77.jpg","a1808df99d3d48224071422e2cd1e847"],["/medias/featureimages/wallhaven-13vrj9.jpg","8d01f4c3902b38c8db3e17d4951aab76"],["/medias/featureimages/wallhaven-5wvmq9.jpg","795b57a939ca1d3d0ee6195de2d7ade5"],["/medias/featureimages/wallhaven-6k3oox (1).jpg","08aa7a693db4e4814b7d8643b9a62280"],["/medias/featureimages/wallhaven-73vx1o.png","797424876070b83a7de95d5e1ddc97b5"],["/medias/featureimages/wallhaven-q6kykd.jpg","d772ce75066cdbad5abbf5442e4c9139"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/logo.jpg","fccd317efa009514c821c987535b8f92"],["/medias/reward/alipay.png","59787cd0f8e63e9c72ae69b43bb37aba"],["/medias/reward/wechat.png","328fe81f7fd614526fd34cfd42cee3dd"],["/movies/index.html","2d6c59865b796f21ce83eedc43086f8a"],["/musics/index.html","7d4b4d6b896f1180cc9e32fcabfe638b"],["/scripts/loading-pages.js","667d04b29ac577696e4dc2366588aa8c"],["/sw-register.js","ec677158fbd1f0f4e7a42c656ca48c92"],["/tags/DFS/index.html","1ef1b05cb36da462b8b0cfa50b7eb38b"],["/tags/Git/index.html","d6fce883f6e771ff0583a6c07eef2147"],["/tags/Java/index.html","9c5770d3a7f4b91d7158fb47f79ac6a3"],["/tags/Markdown/index.html","ceb8469e419f8ad41a8a59d19a0b6212"],["/tags/Typora/index.html","6345ac6850464163c74a72c040a95ce0"],["/tags/Vue/index.html","c938eeeae1799bedcb8436afb552759e"],["/tags/index.html","de79c6f2f022e7aca237c1287fafbe12"],["/tags/java面试/index.html","fda90e138e97ef9e884f79e24aabebb1"],["/tags/前端/index.html","ceba2afd9ae2ab8b92ef17bf456e2df3"],["/tags/多线程/index.html","0651a3a020c85319ee54b308c17eb907"],["/tags/字符串/index.html","c99cc59b638cb7f18588bffecd7d1574"],["/tags/异常/index.html","2df4b031134b4d5e89eb36b68b82c71a"],["/tags/排序/index.html","7f44ed61db39ccf38c62282fefcbbcb0"],["/tags/暴力枚举/index.html","2d416c3ec5d37b0c372654b5b9c256f8"],["/tags/求质数/index.html","fbf5447bb00801613577dc7ad1d4ec16"],["/tags/洛谷/index.html","3a6265d6dc047f4ade542b744ff9e37a"],["/tags/算法/index.html","8d920f39cd5cecc7f44a85221351024f"],["/tags/路线/index.html","3f30d46e4fe1d6ea2526a811b02fdfeb"],["/tags/递归/index.html","beffd933dbd7d581dfaf4be6c770f5ec"],["/tags/阿里云/index.html","76c572f0f675bd0b13356e852b198528"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
