function vTurbChangePlayer() {
  (!vTurbOriginalPlayerIsMobile && vTurbDeviceIsMobile) ||
  (vTurbOriginalPlayerIsMobile && !vTurbDeviceIsMobile)
    ? ((vTurbPlayer = vTurbAlternativePlayer), (vTurbSrcId = vTurbPlayer.id))
    : (vTurbPlayer = vTurbOriginalPlayer);
  var e = document.getElementById(`vid_${vTurbOriginalPlayer.id}`);
  e && e.remove();
  var t = document.getElementById(`scr_${vTurbOriginalPlayer.id}`);
  t && t.setAttribute("id", `scr_${vTurbSrcId}`);
}
function vTurbCreatSmartvdsElements() {
  var e, t, a;
  "1.7.9" === vTurbPlayer.version
    ? document.getElementById(`vid_${vTurbPlayer.id}`) ||
      (window,
      (e = document),
      (t = e.getElementById(`scr_${vTurbSrcId}`)),
      ((a = e.createElement("DIV")).id = `vid_${vTurbPlayer.id}`),
      t.parentElement.insertBefore(a, t))
    : (document.getElementById(`vid_${vTurbPlayer.id}`) ||
        (function (e, t, a) {
          (t = e.getElementById(`scr_${vTurbSrcId}`)),
            ((a = e.createElement("DIV")).id = `vid_${vTurbPlayer.id}`),
            (a.style.position = "relative"),
            (a.style.width = "100%"),
            (a.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`),
            t.parentElement.insertBefore(a, t);
        })(document),
      document.getElementById(`thumb_${vTurbPlayer.id}`) ||
        (function (e, t, a) {
          (t = e.getElementById(`vid_${vTurbPlayer.id}`)),
            ((a = e.createElement("IMG")).id = `thumb_${vTurbPlayer.id}`),
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.width = "100%"),
            (a.style.height = "100%"),
            (a.style.position = "absolute"),
            (a.style.objectFit = "cover"),
            (a.src = `https://images.converteai.net/${vTurbPlayer.thumbnail_key}`),
            t.appendChild(a);
        })(document),
      document.getElementById(`backdrop_${vTurbPlayer.id}`) ||
        (function (e, t, a) {
          (t = e.getElementById(`vid_${vTurbPlayer.id}`)),
            ((a = e.createElement("DIV")).id = `backdrop_${vTurbPlayer.id}`),
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.width = "100%"),
            (a.style.height = "100%"),
            (a.style.position = "absolute"),
            (a.style.backdropFilter = "blur(5px)"),
            (a.style.webkitBackdropFilter = "blur(5px)"),
            t.appendChild(a);
        })(document));
}
function vTurbLoadSmrtvds() {
  var e, t, a, r;
  (e = window),
    (t = document),
    e.smrtvds ||
      ((a = e.smrtvds =
        function () {
          a.callMethod
            ? a.callMethod.apply(a, arguments)
            : a.queue.push(arguments);
        }),
      e._smrtvds || (e._smrtvds = a),
      (a.push = a),
      (a.loaded = !0),
      (a.version = "1.1"),
      (a.queue = []),
      ((r = t.createElement("script")).async = !0),
      (r.src = `https://cdn.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`),
      t.getElementsByTagName("head")[0].appendChild(r)),
    window.smrtvds(
      `vid_${vTurbPlayer.id}`,
      vTurbPlayer.org_id,
      vTurbPlayer.video_id,
      vTurbPlayer.options
    );
}
function vTurbSmrtvds() {
  vTurbCreatSmartvdsElements(), vTurbLoadSmrtvds();
}
var vTurbOriginalPlayer = {
    id: "ID",
    org_id: "ID",
    name: "NAME",
    device_type: "desktop",
    video_aspect_ratio: "56.25",
    thumbnail_key:
      "5e00314e-dc1c-4094-a845-f8e168d2c9b1/players/663abfa9bf0a82000bb29fcb/thumbnail.jpg",
    cover_key:
      "5e00314e-dc1c-4094-a845-f8e168d2c9b1/players/663abfa9bf0a82000bb29fcb/cover.jpg",
    version: "v1",
    video_id: "ID",
    options: {
      autoplay: "smartplay",
      smart_autoplay_template: "image",
      theme: "#F70100",
      foreground_color: "#FFFFFF",
      video: { width: 1920, height: 1080, pic: "", pic_finish: "" },
      cdn: "cdn.converteai.net",
      displays: {
        big_play: !1,
        play_pause: !0,
        backward: !1,
        forward: !1,
        volume: !1,
        volume_bar: !0,
        time: !1,
        fullscreen: !1,
        seekbar: !1,
        seekbar_time: !0,
        speed_control: !1,
      },
      callAction: [],
      pixels: [],
      thumbs: [
        {
          id: "thumb_663abfa9bf0a82000bb29fcb_0",
          image:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/31/6659bbefa65ab90001b688d8.gif",
          start: 0,
          finish: 1708,
          has_button: !1,
          button_name: "Nome do bot\xe3o",
          button_size: "sm",
          button_position: "bc",
          button_url: "",
          button_background_color: "#1890FF",
          button_background_hover_color: "#1890FF",
          button_text_color: "#FFFFFF",
        },
        {
          id: "thumb_663abfa9bf0a82000bb29fcb_1",
          image:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a605969fe5a000156e364.gif",
          start: 0,
          finish: 1708,
          has_button: !1,
          button_name: "Button name",
          button_size: "sm",
          button_position: "bc",
          button_url: "",
          button_background_color: "#1890FF",
          button_background_hover_color: "#1890FF",
          button_text_color: "#FFFFFF",
        },
      ],
      headlines: [
        {
          id: "headline_663abfa9bf0a82000bb29fcb_1",
          active: !0,
          name: "Headline 04",
          number: 1,
          url_desktop:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5aa891312a0001954391.png",
          url_mobile:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5aa891312a0001954391.png",
          weight: 0.01,
          is_responsive: !1,
        },
        {
          id: "headline_663abfa9bf0a82000bb29fcb_2",
          active: !0,
          name: "Headline 03",
          number: 2,
          url_desktop:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5a9f69fe5a000156e35e.png",
          url_mobile:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5a9f69fe5a000156e35e.png",
          weight: 0.01,
          is_responsive: !1,
        },
        {
          id: "headline_663abfa9bf0a82000bb29fcb_3",
          active: !0,
          name: "Headline 02",
          number: 3,
          url_desktop:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5a9569fe5a000156e35d.png",
          url_mobile:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5a9569fe5a000156e35d.png",
          weight: 0.01,
          is_responsive: !1,
        },
        {
          id: "headline_663abfa9bf0a82000bb29fcb_4",
          active: !0,
          name: "Headline 01",
          number: 4,
          url_desktop:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5a7e91312a0001954390.png",
          url_mobile:
            "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/07/663a5a7e91312a0001954390.png",
          weight: 0.01,
          is_responsive: !1,
        },
        {
          id: "headline_663abfa9bf0a82000bb29fcb_5",
          active: !0,
          name: "none",
          number: 5,
          url_desktop: "",
          url_mobile: "",
          weight: 0.01,
          is_responsive: !1,
        },
      ],
      turbos: [],
      smart_autoplay_elements: [
        {
          id: "smart_autoplay_element_663abfa9bf0a82000bb29fcb_0",
          height: 1108.5595796328614,
          width: 1970.7725860139751,
          x: -25.263157894736842,
          y: 0,
          order: 1,
          opacity: 1,
          rotation: 0,
          type: "image",
          properties: {
            alt: "Smart AutoPlay",
            src: "https://cdn.converteai.net/5e00314e-dc1c-4094-a845-f8e168d2c9b1/2024/05/31/665a2daf91312a0001955bbf.gif",
          },
        },
      ],
      mini_hooks: !1,
      mini_hooks_elements: [],
      resume: !0,
      fake_bar: !0,
      headline: !0,
      turbo: !0,
      turbo_speed: 1.1,
      turbo_auto_test: !1,
      smartplay_options: {
        top_text: "Seu v\xeddeo j\xe1 come\xe7ou",
        bottom_text: "Clique para ouvir",
        foreground_color: "#FFFFFF",
        background_color: "rgba(61,133,198,0.78)",
        start_at: 144,
        end_at: 236,
        animation: {},
        custom_preview: null,
      },
      playback_options: {
        action_after_finish: null,
        scroll_to_action_in: 1333,
      },
      resume_options: {
        play: "Continuar assistindo?",
        title: "Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo",
        replay: "Assistir do in\xedcio?",
        disable_pause: !1,
        foreground_color: "#FFFFFF",
        background_color: "#B30000",
      },
      fake_bar_options: {
        height: 10,
        alpha: 2,
        vbar_height: !0,
        vbar_end: !0,
        vbar_network: !0,
        vbar_color: null,
      },
    },
  },
  vTurbSrcId = "ID",
  vTurbPlayer = vTurbOriginalPlayer,
  vTurbDeviceIsMobile = window.navigator.userAgent.match(
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
  ),
  vTurbOriginalPlayerIsMobile = "mobile" === vTurbOriginalPlayer.device_type;
(vTurbDeviceIsMobile = vTurbDeviceIsMobile && vTurbDeviceIsMobile[0]),
  vTurbSmrtvds();
