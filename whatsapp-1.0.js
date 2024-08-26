function criarBarra(e, t) {
    var a = document.createElement("span");
    a.className = "status";
    var n = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector(".typebot-container")
      , l = document.createElement("div");
    l.className = "user-bar";
    var o = document.createElement("div");
    o.className = "back",
    o.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">\n  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>\n</svg>';
    var r = document.createElement("div");
    r.className = "avatar",
    r.innerHTML = '<img src="' + t + '">';
    var s = document.createElement("div");
    s.className = "name",
    s.innerHTML = "<span>" + e + '</span>&nbsp<span style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>',
    s.appendChild(a),
    document.createElement("div").className = "actions more";
    var i = document.createElement("div");
    i.className = "actions cam-action",
    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">\n  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>\n</svg>';
    var d = document.createElement("div");
    d.className = "actions phone-action",
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">\n  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>\n</svg>',
    l.appendChild(o),
    l.appendChild(r),
    l.appendChild(s),
    l.appendChild(d),
    l.appendChild(i),
    n && n.prepend(l);
    const c = n
      , m = (c.querySelector('img[elementtiming="Bot avatar"]'),
    a)
      , p = document.createElement("audio");
    p.src = "https://storage.fivegestor.com.br/s2/remova/sistema/audio_whatsapp.mp3";
    let h = 0;
    setInterval((()=>{
        const e = c.querySelector(".bubble1")
          , t = e?.parentElement?.parentElement?.nextSibling;
        e && t.src ? m.innerText = "gravando audio..." : m.innerText = e ? "digitando..." : "Online";
        const a = c.querySelector(".typebot-chat-view").querySelectorAll(".items-start.typebot-host-bubble");
        if (a.length > h && !e) {
            for (let e = h; e < a.length; e++) {
                const t = document.createElement("div")
                  , n = '<svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute; bottom: 0; right: 5px; z-index: 99" height="20" width="18">\n<g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">\n  <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>\n  <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>\n</g>\n  </svg>';
                t.innerHTML = n;
                a[e].append(t)
            }
            h = a.length,
            p.play()
        }
    }
    ), 400);
    var v = "myCss";
    if (!document.getElementById(v)) {
        var g = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector(".typebot-container")
          , u = document.createElement("link");
        u.id = v,
        u.rel = "stylesheet",
        u.type = "text/css",
        u.href = "https://storage.fivegestor.com.br/s2/remova/sistema/whatsapp-1.1.css",
        u.media = "all",
        g.appendChild(u)
    }
}
