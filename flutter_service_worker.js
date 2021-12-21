'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cf6202c69704eb0f807d2037890b0273",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c24cf8eb066416fba35ea20f47c8cc6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/web/images/1.jpg": "a3d6b2b62144c45a40d6282e32a324bf",
"assets/web/images/10.jpg": "a7e7da8d04cbdca9589dcaf012bbad15",
"assets/web/images/11.jpg": "be8c4a181d5c1123ec34b03658831ac1",
"assets/web/images/12.jpg": "420732831679721898eba24a7a73dfd8",
"assets/web/images/13.jpg": "fdadab3a910342fd211cea3f79552bdb",
"assets/web/images/14.jpg": "be03afb9f1bc6c66351e12f2ffb1157f",
"assets/web/images/15.jpg": "734484360eee72687ee1fc36cd56a08b",
"assets/web/images/16.jpg": "cef1ccf8d19f1312a4498b5190f159bb",
"assets/web/images/17.jpg": "edb5ad6fb3c0c1998670353bd7d3b30a",
"assets/web/images/18.jpg": "40768f1d0d736dbf9fda6d438927b2b0",
"assets/web/images/19.jpg": "38faf35b1d16a4f1b9a6ba9f9fdc77ca",
"assets/web/images/2.jpg": "1b8ee5faf02b336d00e58de996e90530",
"assets/web/images/20.jpg": "39c6892ba6a236e38dbfc5b4d2860d36",
"assets/web/images/21.jpg": "7c802f151f09cdbcb3c4454e4a738af7",
"assets/web/images/22.jpg": "bbb6676ffe5a5afa6ecdf7c5bd69cb3d",
"assets/web/images/23.jpg": "4fb698dcae0b8b7c913395abbb937486",
"assets/web/images/24.jpg": "6b0072c097d5ac1dd125085f7dd20eb9",
"assets/web/images/25.jpg": "1b8ee5faf02b336d00e58de996e90530",
"assets/web/images/26.jpg": "aa27e82d615c0d4caa46c15b58a44a49",
"assets/web/images/3.jpg": "148282daa1e28161573cd8d7534b1838",
"assets/web/images/4.jpg": "fef2e4811aaad47958ff5435af6a5480",
"assets/web/images/5.jpg": "3dcc5bb7d1ac70963a6bda7c5e450d4f",
"assets/web/images/6.jpg": "6394029365f2140d15ed137d007aafc3",
"assets/web/images/7.jpg": "90c2b79bb352980b132c18ae924f1132",
"assets/web/images/8.jpg": "a4adeaf81ddf1c972b69c54c3f2c7023",
"assets/web/images/9.jpg": "0cd2de524b98a7dc81f55f8ede3e91a2",
"assets/web/images/binlogo.png": "5bd1b80f7626182fb24c511d3e143e5e",
"assets/web/images/boysenlogo.png": "d79234187aad6cdd07a462a89bb69ee0",
"assets/web/images/d.jpg": "3ff4ac3994a4541ad105c9a2397d7a64",
"assets/web/images/de.png": "31af1bdf2f73bca780fe55f0c1757059",
"assets/web/images/en.png": "2457638964d843788992006bf1106d26",
"assets/web/images/fr.png": "5b7c345635b6e6e175b1f0cbaa215329",
"assets/web/images/sp.png": "6baf57d444b0d2b6c3709c5e6878dbe4",
"assets/web/pdf/besucherhinweis.pdf": "4a594edcc7f25c9eb391899407fafaf5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"images/1.jpg": "a3d6b2b62144c45a40d6282e32a324bf",
"images/10.jpg": "a7e7da8d04cbdca9589dcaf012bbad15",
"images/11.jpg": "be8c4a181d5c1123ec34b03658831ac1",
"images/12.jpg": "420732831679721898eba24a7a73dfd8",
"images/13.jpg": "fdadab3a910342fd211cea3f79552bdb",
"images/14.jpg": "be03afb9f1bc6c66351e12f2ffb1157f",
"images/15.jpg": "734484360eee72687ee1fc36cd56a08b",
"images/16.jpg": "cef1ccf8d19f1312a4498b5190f159bb",
"images/17.jpg": "edb5ad6fb3c0c1998670353bd7d3b30a",
"images/18.jpg": "40768f1d0d736dbf9fda6d438927b2b0",
"images/19.jpg": "38faf35b1d16a4f1b9a6ba9f9fdc77ca",
"images/2.jpg": "1b8ee5faf02b336d00e58de996e90530",
"images/20.jpg": "39c6892ba6a236e38dbfc5b4d2860d36",
"images/21.JPG": "7c802f151f09cdbcb3c4454e4a738af7",
"images/22.jpg": "bbb6676ffe5a5afa6ecdf7c5bd69cb3d",
"images/23.jpg": "4fb698dcae0b8b7c913395abbb937486",
"images/24.jpg": "6b0072c097d5ac1dd125085f7dd20eb9",
"images/25.jpg": "1b8ee5faf02b336d00e58de996e90530",
"images/26.jpg": "aa27e82d615c0d4caa46c15b58a44a49",
"images/3.jpg": "148282daa1e28161573cd8d7534b1838",
"images/4.jpg": "fef2e4811aaad47958ff5435af6a5480",
"images/5.jpg": "3dcc5bb7d1ac70963a6bda7c5e450d4f",
"images/6.JPG": "6394029365f2140d15ed137d007aafc3",
"images/7.jpg": "90c2b79bb352980b132c18ae924f1132",
"images/8.jpg": "a4adeaf81ddf1c972b69c54c3f2c7023",
"images/9.jpg": "0cd2de524b98a7dc81f55f8ede3e91a2",
"images/binlogo.png": "5bd1b80f7626182fb24c511d3e143e5e",
"images/boysenlogo.png": "d79234187aad6cdd07a462a89bb69ee0",
"images/d.jpg": "3ff4ac3994a4541ad105c9a2397d7a64",
"images/de.png": "31af1bdf2f73bca780fe55f0c1757059",
"images/en.png": "2457638964d843788992006bf1106d26",
"images/fr.png": "5b7c345635b6e6e175b1f0cbaa215329",
"images/sp.png": "6baf57d444b0d2b6c3709c5e6878dbe4",
"index.html": "533f432be427a24e16ef8150e4144b85",
"/": "533f432be427a24e16ef8150e4144b85",
"main.dart.js": "f152a2bb81cad583979903a3ea52623b",
"manifest.json": "8b3d81d1adbcea12982f0cbaf7224f59",
"pdf/besucherhinweis.pdf": "4a594edcc7f25c9eb391899407fafaf5",
"version.json": "635d432143757a269015e424c5b0ffcf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
