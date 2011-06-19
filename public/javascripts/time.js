(function() {
  var frames, t, time;
  frames = 200;
  t = 0;
  time = window.time = {
    start: function() {
      var filter, i, k, toSet, v, _len, _ref, _ref2;
      t = (t + 1) % frames;
      _ref = state.get().filters;
      for (i = 0, _len = _ref.length; i < _len; i++) {
        filter = _ref[i];
        toSet = {};
        _ref2 = filter.parameters;
        for (k in _ref2) {
          v = _ref2[k];
          if (typeof v.value !== "number") {
            if (v.value === "ascending") {
              toSet[k] = t / frames;
            } else if (v.value === "descending") {
              toSet[k] = (frames - t) / frames;
            } else if (v.value === "oscillating") {
              toSet[k] = Math.sin(6.2832 * t / frames);
            }
          }
        }
        render.setParameters(i + 1, toSet);
      }
      render.render();
      return setTimeout(time.start, 1000 / 30);
    }
  };
}).call(this);
