function cov_2044vn7yxr() {
  var path = "C:\\Users\\grego\\madflow\\madflow\\client\\src\\customhooks\\useDidUpdateEffect.js";
  var hash = "ba45335717dd8e053e2ce3214cac18101612c620";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\grego\\madflow\\madflow\\client\\src\\customhooks\\useDidUpdateEffect.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 35
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 9,
          column: 13
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 8,
          column: 36
        }
      },
      "4": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 7,
          column: 41
        }
      },
      "5": {
        start: {
          line: 8,
          column: 9
        },
        end: {
          line: 8,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 3,
            column: 28
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 12
          },
          end: {
            line: 6,
            column: 13
          }
        },
        loc: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 8,
            column: 36
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 8,
            column: 36
          }
        }, {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 8,
            column: 36
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ba45335717dd8e053e2ce3214cac18101612c620"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2044vn7yxr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2044vn7yxr();
import { useEffect, useRef } from 'react';
cov_2044vn7yxr().s[0]++;

const useDidUpdateEffect = (fn, inputs) => {
  cov_2044vn7yxr().f[0]++;
  const didMountRef = (cov_2044vn7yxr().s[1]++, useRef(false));
  cov_2044vn7yxr().s[2]++;
  useEffect(() => {
    cov_2044vn7yxr().f[1]++;
    cov_2044vn7yxr().s[3]++;

    if (didMountRef.current) {
      cov_2044vn7yxr().b[0][0]++;
      cov_2044vn7yxr().s[4]++;
      return fn();
    } else {
      cov_2044vn7yxr().b[0][1]++;
      cov_2044vn7yxr().s[5]++;
      didMountRef.current = true;
    }
  }, inputs);
};

export default useDidUpdateEffect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZURpZFVwZGF0ZUVmZmVjdC5qcyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VEaWRVcGRhdGVFZmZlY3QiLCJmbiIsImlucHV0cyIsImRpZE1vdW50UmVmIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFNBQVQsRUFBb0JDLE1BQXBCLFFBQWtDLE9BQWxDOzs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxDQUFDQyxFQUFELEVBQUtDLE1BQUwsS0FBZ0I7QUFBQTtBQUN6QyxRQUFNQyxXQUFXLDZCQUFHSixNQUFNLENBQUMsS0FBRCxDQUFULENBQWpCO0FBRHlDO0FBR3pDRCxFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUFBO0FBQUE7O0FBQ2QsUUFBSUssV0FBVyxDQUFDQyxPQUFoQixFQUF5QjtBQUFBO0FBQUE7QUFBQSxhQUFPSCxFQUFFLEVBQVQ7QUFBWSxLQUFyQyxNQUNLO0FBQUE7QUFBQTtBQUFBRSxNQUFBQSxXQUFXLENBQUNDLE9BQVosR0FBc0IsSUFBdEI7QUFBMkI7QUFDakMsR0FIUSxFQUdORixNQUhNLENBQVQ7QUFJRCxDQVBEOztBQVNBLGVBQWVGLGtCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VEaWRVcGRhdGVFZmZlY3QgPSAoZm4sIGlucHV0cykgPT4ge1xyXG4gIGNvbnN0IGRpZE1vdW50UmVmID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSByZXR1cm4gZm4oKTtcclxuICAgIGVsc2UgZGlkTW91bnRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgfSwgaW5wdXRzKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZURpZFVwZGF0ZUVmZmVjdDtcclxuIl19