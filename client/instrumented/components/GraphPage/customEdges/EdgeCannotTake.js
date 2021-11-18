function cov_1xxqxtaxky() {
  var path = "C:\\Users\\grego\\madflow\\madflow\\client\\src\\components\\GraphPage\\customEdges\\EdgeCannotTake.js";
  var hash = "210e0e878ed9c6207a7b7c7398a53f474478824b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\grego\\madflow\\madflow\\client\\src\\components\\GraphPage\\customEdges\\EdgeCannotTake.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 12,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 23
          },
          end: {
            line: 3,
            column: 24
          }
        },
        loc: {
          start: {
            line: 3,
            column: 44
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "210e0e878ed9c6207a7b7c7398a53f474478824b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xxqxtaxky = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1xxqxtaxky();
import React from 'react';
cov_1xxqxtaxky().s[0]++;

const EdgeCannotTake = (srcId, targetId) => {
  cov_1xxqxtaxky().f[0]++;
  cov_1xxqxtaxky().s[1]++;
  return {
    id: `${srcId}-${targetId}`,
    source: srcId,
    target: targetId,
    type: 'smoothstep',
    style: {
      stroke: '#a33d3d'
    },
    animated: 'true',
    arrowHeadType: 'arrowclosed'
  };
};

export default EdgeCannotTake;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVkZ2VDYW5ub3RUYWtlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRWRnZUNhbm5vdFRha2UiLCJzcmNJZCIsInRhcmdldElkIiwiaWQiLCJzb3VyY2UiLCJ0YXJnZXQiLCJ0eXBlIiwic3R5bGUiLCJzdHJva2UiLCJhbmltYXRlZCIsImFycm93SGVhZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOzs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEtBQXFCO0FBQUE7QUFBQTtBQUMxQyxTQUFPO0FBQ0xDLElBQUFBLEVBQUUsRUFBZSxHQUFFRixLQUFNLElBQUdDLFFBQVMsRUFEaEM7QUFFTEUsSUFBQUEsTUFBTSxFQUFVSCxLQUZYO0FBR0xJLElBQUFBLE1BQU0sRUFBVUgsUUFIWDtBQUlMSSxJQUFBQSxJQUFJLEVBQVksWUFKWDtBQUtMQyxJQUFBQSxLQUFLLEVBQVc7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FMWDtBQU1MQyxJQUFBQSxRQUFRLEVBQVEsTUFOWDtBQU9MQyxJQUFBQSxhQUFhLEVBQUc7QUFQWCxHQUFQO0FBU0QsQ0FWRDs7QUFZQSxlQUFlVixjQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEVkZ2VDYW5ub3RUYWtlID0gKHNyY0lkLCB0YXJnZXRJZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCAgICAgICAgICAgIDogYCR7c3JjSWR9LSR7dGFyZ2V0SWR9YCxcclxuICAgIHNvdXJjZSAgICAgICAgOiBzcmNJZCxcclxuICAgIHRhcmdldCAgICAgICAgOiB0YXJnZXRJZCxcclxuICAgIHR5cGUgICAgICAgICAgOiAnc21vb3Roc3RlcCcsXHJcbiAgICBzdHlsZSAgICAgICAgIDogeyBzdHJva2U6ICcjYTMzZDNkJyB9LFxyXG4gICAgYW5pbWF0ZWQgICAgICA6ICd0cnVlJyxcclxuICAgIGFycm93SGVhZFR5cGUgOiAnYXJyb3djbG9zZWQnXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkZ2VDYW5ub3RUYWtlO1xyXG4iXX0=