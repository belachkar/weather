/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "34ab68d5bc47600124b316f6f091ed41"
  },
  {
    "url": "favicon.ico",
    "revision": "22298544979c4a6950cea9dc5423a3cd"
  },
  {
    "url": "img/clear.png",
    "revision": "e17de36d2c2ddf7b068892fa4678cd31"
  },
  {
    "url": "img/cloudy_s_sunny.png",
    "revision": "827577d4371bd0c83789fac7a2fe1546"
  },
  {
    "url": "img/cloudy-scattered-showers.png",
    "revision": "855f638a52b7fbc1ec2a3d596fedbd28"
  },
  {
    "url": "img/cloudy.png",
    "revision": "6b2148e05e5fe4bf2a218438afcb6d3c"
  },
  {
    "url": "img/fog.png",
    "revision": "44f56cff88530b5e3315890d6c209ac2"
  },
  {
    "url": "img/ic_add_white_24px.svg",
    "revision": "b09442e8f4b45894cf21566f0813453c"
  },
  {
    "url": "img/ic_refresh_white_24px.svg",
    "revision": "21e4c77a8b98c7516d6c7a97cdbddc22"
  },
  {
    "url": "img/icons/apple-120.png",
    "revision": "57f3280ad7c3786e1826c9dd870e9e5f"
  },
  {
    "url": "img/icons/apple-152.png",
    "revision": "d32edffe7f7060235df300c77d9fd06f"
  },
  {
    "url": "img/icons/apple-167.png",
    "revision": "232f56af4ef6b558c3a713305ccefbb0"
  },
  {
    "url": "img/icons/apple-180.png",
    "revision": "7338f2fc7e04b2a749f628abddc1f2ac"
  },
  {
    "url": "img/icons/apple-60.png",
    "revision": "9948a10280c0b559fc37cc226aa2c0c4"
  },
  {
    "url": "img/icons/apple-76.png",
    "revision": "943228f9074ee8790c4d5e0a18d64aae"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "1a090925da1967384dee5b00c9ea901e"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "edf21aca46bdd34e8e129e7c24642a0b"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "cec1ef3b55e16ad130b61a78a4c98c17"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "767c82dd235bd543cb69a4559ada7284"
  },
  {
    "url": "img/icons/icon-256x256.png",
    "revision": "827577d4371bd0c83789fac7a2fe1546"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "8459780986fa06ddfab0bf231375af30"
  },
  {
    "url": "img/icons/icon-48x48.png",
    "revision": "9607053b9c673618b86c4040f6053316"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "162dc9e0d014b32900ded741698493a1"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "5ad52ceba80b7fe1b977ac96e458e79f"
  },
  {
    "url": "img/partly-cloudy.png",
    "revision": "a2e10546a6f7000e1b7d5846ba492f9b"
  },
  {
    "url": "img/rain.png",
    "revision": "5a2600b1199d1c95da554a5f97861c04"
  },
  {
    "url": "img/scattered-showers.png",
    "revision": "ec178dbbcd45abb9db4be616801df3b0"
  },
  {
    "url": "img/sleet.png",
    "revision": "15ee1fe8d87a5b1ca604eb56729f3f08"
  },
  {
    "url": "img/snow.png",
    "revision": "6f9fa355f32b353a18a1dd3f89ac3fd7"
  },
  {
    "url": "img/thunderstorm.png",
    "revision": "c4df123a44c17a1b5d1e8b33b268ea5c"
  },
  {
    "url": "img/wind.png",
    "revision": "c1136285b55a50c206f0a96f64080767"
  },
  {
    "url": "index.html",
    "revision": "a0aef92ac1f43bd6546c9b1c556799bf"
  },
  {
    "url": "js/app.js",
    "revision": "a4fbd4f35054c8d5d6d2bcc3e6a4a2da"
  },
  {
    "url": "js/localforage.min.js",
    "revision": "6de1bf1f7f98328eba5295e0e8a00110"
  },
  {
    "url": "manifest.json",
    "revision": "30b3be444d785fd5a9ae0acbb7f11928"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^(https:\/\/publicdata-weather\.firebaseio\.com)/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"data", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
