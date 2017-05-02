;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999998 0C229.232866 0 0.021487 229.220588 0.021487 512s229.211379 512 511.978511 512 511.978511-229.220588 511.978511-512S794.76713 0 511.999998 0zM793.886063 671.573345c-13.223163 12.342096-35.924187-1.102101-57.744145-31.296797-9.476839 25.566282-21.818935 49.149397-36.144198 70.309322 30.854728 11.019984 50.691519 28.211529 50.691519 47.608298 0 33.500998-59.287291 60.611449-132.457778 60.611449-43.417859 0-81.767282-9.476839-106.010429-24.24417-24.023136 14.767332-62.59257 24.24417-106.010429 24.24417-73.17151 0-132.457778-27.109428-132.457778-60.611449 0-19.174712 19.835767-36.586267 50.691519-47.608298-14.546298-21.158902-26.66736-44.742017-36.144198-70.309322-21.818935 29.974685-44.518936 43.639916-57.744145 31.296797-18.072611-16.97051-11.239995-76.921927 15.647375-133.785006 6.170536-13.004175 12.783141-24.685215 19.614733-34.82311 3.746324-165.30386 112.62201-297.986765 246.180865-297.986765l0.441045 0c133.558855 0 242.434541 132.462894 246.180865 297.986765 6.832615 10.138918 13.444197 21.819958 19.614733 34.82311C804.906048 594.652442 811.958674 654.602835 793.886063 671.573345z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-Qzone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M674.715919 416.519392 364.088252 416.519392l204.514907 35.060517L348.95253 630.642121l333.314365 0-196.962907-42.643216 189.409884-171.47542L674.715919 416.519392zM512.589424 64.46829c-246.997464 0-447.231881 200.242604-447.231881 447.231881S265.627776 958.933075 512.589424 958.933075c247.029186 0 447.231881-200.242604 447.231881-447.231881S759.616564 64.46829 512.589424 64.46829zM828.547493 427.692872 705.442734 532.035312l40.905642 262.746146c-8.218172 8.218172-8.423857 8.218172-16.604166 8.218172L515.944845 671.641907 301.763788 802.99963c-16.433274 0-18.139126 0-18.139126-8.218172l29.491685-262.746146-129.959887-114.853841-44.392046-31.54546-12.531408 0 0-1.39272 12.531408 1.39272 254.878968 0 32.797987-58.488089 82.057901-173.48417c8.181333 0 8.181333 0 16.433274 0l90.23821 173.48417 32.797987 58.488089 221.563188 0c8.181333 0 8.181333-4.7727 8.181333 3.478218l-49.160653 38.57455L828.547493 427.692872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-douban" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999996 0.008186c-282.767132 0-511.995907 229.228775-511.995907 511.995907s229.228775 511.995907 511.995907 511.995907 511.995907-229.228775 511.995907-511.995907S794.767128 0.008186 511.999996 0.008186zM297.694095 290.030559l428.602591 0 0 48.284703L297.694095 338.315262 297.694095 290.030559zM689.039131 388.67523l0 188.748828L334.951651 577.424058 334.951651 388.67523 689.039131 388.67523zM738.435145 733.969441 285.57201 733.969441l0-47.758724 131.969661 0c-12.078083-25.390273-27.842115-52.671617-47.382147-81.986269l47.382147-18.777669c18.804275 27.842115 35.567054 61.4567 50.429553 100.763938l89.6406 0c17.744129-30.329772 33.351596-63.96994 46.742581-100.763938l51.516304 18.777669c-13.478989 31.048133-28.018124 58.400085-43.422975 81.986269l125.987413 0L738.435145 733.969441z"  ></path>' +
    '' +
    '<path d="M386.301156 436.924117l251.913427 0 0 92.26845-251.913427 0 0-92.26845Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iiitoo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M230.566 375.857c-7.908 9.228-14.901 19.255-20.767 29.989h309.219c-5.866-10.735-12.859-20.761-20.767-29.989h-267.689z"  ></path>' +
    '' +
    '<path d="M512.056 1004.665c277.359 0 502.202-222.582 502.202-497.152 0-34.843-3.627-68.846-10.516-101.666h-484.721c13.561 24.821 21.268 53.27 21.268 83.511 0 96.679-78.744 175.052-175.878 175.052s-175.878-78.373-175.878-175.052c0-30.241 7.707-58.689 21.269-83.511h-189.429c-6.889 32.82-10.516 66.825-10.516 101.666 0 274.571 224.845 497.152 502.202 497.152zM669.999 553.086c52.616 0 95.274 42.455 95.274 94.827s-42.656 94.827-95.276 94.827c-52.616 0-95.274-42.457-95.274-94.827s42.656-94.827 95.276-94.827zM364.41 314.305c53.61 0 101.584 23.903 133.845 61.552h498.198c-58.295-210.676-253.077-365.497-484.395-365.497s-426.1 154.82-484.397 365.496h202.905c32.26-37.648 80.234-61.551 133.845-61.551zM671.146 250.326c22.822 0 41.323 18.415 41.323 41.128 0 22.717-18.502 41.129-41.323 41.129-22.822 0-41.323-18.415-41.323-41.129 0-22.716 18.502-41.128 41.325-41.128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)