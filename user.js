user_pref("browser.aboutConfig.showWarning", false);

// Homepage
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// GEOLOCATION
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_geoclue", false);

// QUIETER FOX ( RECOMMENDATIONS )
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shopping.experience2023.enabled", false);

// QUIETER FOX ( TELEMETRY )
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// QUIETER FOX ( STUDIES )
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// QUIETER FOX ( CRASH REPORTS )
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// QUIETER FOX ( OTHER )
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// SAFE BROWSING
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
user_pref(
  "browser.safebrowsing.downloads.remote.block_potentially_unwanted",
  false
);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.allowOverride", false);

//BLOCK IMPLICIT OUTBOUND
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.send_pings", false);

// DNS / DoH / PROXY / SOCKS
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.file.disable_unc_paths", true);
user_pref("network.gio.supported-protocols", "");

// LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false); // [FF92+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+]
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+] [DEFAULT: false]
user_pref("browser.urlbar.clipboard.featureGate", false);
user_pref("browser.urlbar.recentsearches.featureGate", true);
user_pref("browser.formfill.enable", false);
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]

// PASSWORDS
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);

// DISK ( cache )
user_pref("browser.cache.disk.enable", true);

//  PLUGINS / MEDIA / WEBRTC
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

// MISCELLANEOUS
user_pref("browser.uitour.enabled", false);

// DOWNLOADS
user_pref("browser.download.manager.addToRecentDocs", false);

// ETP (ENHANCED TRACKING PROTECTION)
user_pref("browser.contentblocking.category", "strict");

// SMOOTH SCROLLING
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300);

// NOT IN ARKENFOX

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false
);
// enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

user_pref("browser.translations.enable", false); // DEFAULT
user_pref("browser.translations.autoTranslate", false);

// PREF: remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// PREF: disable fullscreen notice
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000

// PREF: smoother font
// [1] https://reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);

// PREF: Disable built-in Pocket extension
user_pref("extensions.pocket.enabled", false);
      user_pref("extensions.pocket.api"," ");
      user_pref("extensions.pocket.oAuthConsumerKey", " ");
      user_pref("extensions.pocket.site", " ");
      user_pref("extensions.pocket.showHome", false);
