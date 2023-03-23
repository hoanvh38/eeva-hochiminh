'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9024855b2fe11c30a9a138b43bee6b24",
"index.html": "1181c3b64dbd6c002bc3f758400a0218",
"/": "1181c3b64dbd6c002bc3f758400a0218",
"main.dart.js": "c7c6780dcd5682d5ceb3f64f514dac92",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6182f6e2a5c611d4a788cce817215748",
".git/config": "04efaca55577a90c6f846d60a791a05e",
".git/objects/66/e01d63f3b5c829d03cdc040c6a30839e4a61ae": "ca85108d9fbd3e4d02fd688be77782d9",
".git/objects/68/bdd82a43d2650ef600533c14ca0661594706b0": "f87e99dd9b46c9f53e7df168ed80b8a3",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/b5/3fb1c4acbe100c7a91f07564b7f1fa2d5bab12": "e811d0b34945c5ebde7da923776bcfd5",
".git/objects/b2/859cea9bf47ffa5a74275032bbe780aad311ff": "f177b895e046b64200532b465e377c95",
".git/objects/ac/0999dc47e2e7f973cdafb2f96c2b73897b377f": "df556cd70c3062a73a30ff1ec09c4b95",
".git/objects/df/6f76f71fe2c65f8b3d25bade5a210f2afd9463": "004143f3c79c7390884c41b8c7c3fa5d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/cb77fc333ea6e6cd11cdb3d10dea8091d9dc84": "da24c78470575b2d855a61b1b110b494",
".git/objects/e3/70f29ff7570aa10a73f523b3f38341dce1b28b": "f3e90d860627b3fc0fd7d4d6f371d707",
".git/objects/ca/4618e9f26e079946f8809f3d207712878f0318": "7560f0658625272cc97d0950f6f4c7b9",
".git/objects/c6/aeeb16a6d7f754258bc7f3f2101d287976e6e6": "ea0f32909c0e06fc9256a959692bc0d3",
".git/objects/18/df858e4769c0269ee1e7874b0dc20a6fbf1d6e": "8cc25ab8760cbf4706a0aaed97a40f17",
".git/objects/27/bbefd68c305c1974d2ec5169e84b6679e5cdc2": "edd1d60476294438a2ce8c991506d365",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/5c9a4f7bf1b7ccba2a2147503dcb3b86c05a47": "9bb1de997b1621b08a146b74af2f96f6",
".git/objects/26/792ba77ec3c5da820a7ea067e77deffedd545d": "a2214bc4cadfacaf7170430503c07d25",
".git/objects/21/8f43b46825b94563bd5bc8e9a4c3d8fd31473a": "7eb9b0764d49a741b95b22e0258d746e",
".git/objects/44/68bc4336fe335e6dfe9751ea97a25bd100ca75": "be01474031a875b0cd53d63358ad36f6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/c2efc9f04d26a3bc71aeaac2daa187e5f506a1": "96125f802f48f665707351bfe9cc9307",
".git/objects/9f/258b024b953f407423a502867ee11f7bce1e31": "1f418b7889c160496fc54a0f67b3668d",
".git/objects/9f/7db35a607ac26b29a9f5589a199dcbc18c0f09": "ad2f0df21028e12fcb15deda60e5161d",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/53/6a45d03ba2b6bb5aa2fd9ede796b3c4a827a93": "47382c008c9625c83a0b9d9f375ae865",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/01/6a4952e2213b0573a0575f0bdffd1d88e65371": "9639c8dd870fb588500c21f46009d8ed",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/99/566d744c1ca05ed44ae018b494f69cb25f412e": "94091def78eee9525adb40234668bd5e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/b965255eddd423a9fefc9bddb2047078d66cf4": "9c7a4e455d80405ac09c402b3d13c1ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/e8/50a0be66068387d3a1480af4600d04846aaa68": "f6d0f064853a0b7d871979431d07b021",
".git/objects/c5/23d46fa4915484f46ffc760ef6b4e42a94980a": "d6c08b56ef35be4f075fd32a7ef057db",
".git/objects/2c/552ba040b0024f7bd52467373880ad485a1920": "c0dce3762003027f8642d63a76c4b66b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/c417ebfd780ef81c9078a7622b8a5312b8ab0a": "9d2e8a1f408a96391c6782b287cb9a69",
".git/objects/84/0d828d2acf9843218dce8567e78d28d61d4dae": "d74193eb5ba229dccf40cdd96019d2ca",
".git/objects/4a/b4761b4f71ebb69f7481ea47d6c91ac7afd41e": "159c19bd93ecd45be51ebd0f196a9fdf",
".git/objects/24/55bed370e997601f3590d94d1b9c7c93ab2fb4": "c00f7ac8d96b5527e39f5767891dc121",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/9feeca2197dade7602b3d9f71865dd2765b105": "39d0f508de71271f0378c5e299fd10a1",
".git/objects/76/21e92dd2b43eae6dc0ad9aa41f376cf1aa16fe": "db1ccdf8b6c8c5ad7ea60b2b2e506da5",
".git/objects/82/60d449a9fce7d708767a8e452f9f70ae4c699f": "6c7d9764e01f75415442b8217bb29333",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/7a/a6cc5f5970659f3ca041526fe8ddefa3463e4d": "12db5ef1478b776f33b0c9ec4af95ae8",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "5da53daf88ca5a23c390599dccd03502",
".git/logs/refs/heads/master": "5da53daf88ca5a23c390599dccd03502",
".git/logs/refs/remotes/origin/master": "d1a65fa0e275e54329b8d9a1278f39a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2e720d770fbfdfa3c5921a79b68fb3ff",
".git/refs/remotes/origin/master": "2e720d770fbfdfa3c5921a79b68fb3ff",
".git/index": "d6c55888547a9105df0d76a17942e8b0",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "c97056c8b20d18db8a82c3adb69d8cd2",
"assets/NOTICES": "000cd3508abe6f057c5cf69b879cc617",
"assets/FontManifest.json": "c7a604e936ece69e09bf69f4ab61a2a5",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/img_reply.svg": "954bdee68227b3e84018b065e39c4222",
"assets/assets/images/img_arrowleft.svg": "5abfc34886572cc2ed1ad680b8b02360",
"assets/assets/images/img_radar2.svg": "b25d7543bfa8c06e40594797561a2590",
"assets/assets/images/vector.png": "a0028b1210100a8e356dc865fb1771cf",
"assets/assets/images/img_file.svg": "b0bb72ebf93ebc5f293c0742c9f77e99",
"assets/assets/images/img_sct1.png": "c787bb0d01f7add808d277b6122b3eb1",
"assets/assets/images/Rectangle.png": "7b62e42bedc01292fc268959ef377019",
"assets/assets/images/img_user.svg": "d999e9ca9c689b8ad85c62b220e5fd00",
"assets/assets/images/img_trophy_blue_900.svg": "d2c07b89345daedfc4e1138065045acd",
"assets/assets/images/img_menu.svg": "cd4d3ccb906c594d8e2fd2763b85d25d",
"assets/assets/images/img_car.svg": "1fbf444697e82b9ef52677de102b0a1a",
"assets/assets/images/img_trash.svg": "a1f29b7dfab99303e152453d067dc446",
"assets/assets/images/img_trophy.svg": "68338a8b5b49b995f20b76bbb902939b",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_arrowright.svg": "da8edd9daec7bfa5c1ee8c7f7507251f",
"assets/assets/images/img_logousaid1.png": "8d2e170308adad30b29c4cf293b5c06c",
"assets/assets/images/img_arrowright_gray_800.svg": "4cc9f6b2c5680a20010dd45171976167",
"assets/assets/fonts/InterMedium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/InterSemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/InterBold.ttf": "275bfea5dc74c33f51916fee80feae67",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
