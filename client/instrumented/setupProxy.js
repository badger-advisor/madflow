function cov_1r07gbybo() {
  var path = "C:\\Users\\grego\\madflow\\madflow\\client\\src\\setupProxy.js";
  var hash = "bc3271cd353badd56c0b66669ff854914610b257";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\grego\\madflow\\madflow\\client\\src\\setupProxy.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 34
        },
        end: {
          line: 1,
          column: 66
        }
      },
      "1": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 10,
          column: 2
        }
      },
      "2": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 9,
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
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 31
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bc3271cd353badd56c0b66669ff854914610b257"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1r07gbybo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1r07gbybo();
const {
  createProxyMiddleware
} = (cov_1r07gbybo().s[0]++, require('http-proxy-middleware'));
cov_1r07gbybo().s[1]++;

module.exports = function (app) {
  cov_1r07gbybo().f[0]++;
  cov_1r07gbybo().s[2]++;
  app.use(['/auth', '/user'], createProxyMiddleware({
    target: 'http://localhost:8080'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwUHJveHkuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJveHlNaWRkbGV3YXJlIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcHAiLCJ1c2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE1BQU07QUFBRUEsRUFBQUE7QUFBRiw2QkFBNEJDLE9BQU8sQ0FBQyx1QkFBRCxDQUFuQyxDQUFOOzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVNDLEdBQVQsRUFBYztBQUFBO0FBQUE7QUFDN0JBLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUNFLENBQUUsT0FBRixFQUFXLE9BQVgsQ0FERixFQUVFTCxxQkFBcUIsQ0FBQztBQUNwQk0sSUFBQUEsTUFBTSxFQUFHO0FBRFcsR0FBRCxDQUZ2QjtBQU1ELENBUEQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZVByb3h5TWlkZGxld2FyZSB9ID0gcmVxdWlyZSgnaHR0cC1wcm94eS1taWRkbGV3YXJlJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFwcCkge1xyXG4gIGFwcC51c2UoXHJcbiAgICBbICcvYXV0aCcsICcvdXNlcicgXSxcclxuICAgIGNyZWF0ZVByb3h5TWlkZGxld2FyZSh7XHJcbiAgICAgIHRhcmdldCA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbiJdfQ==