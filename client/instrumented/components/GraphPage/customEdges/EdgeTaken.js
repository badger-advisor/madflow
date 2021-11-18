function cov_j4odi2ksu() {
  var path = "C:\\Users\\grego\\madflow\\madflow\\client\\src\\components\\GraphPage\\customEdges\\EdgeTaken.js";
  var hash = "38c2d1e4c10bcd3e2f9de6c24b33ef686422655e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\grego\\madflow\\madflow\\client\\src\\components\\GraphPage\\customEdges\\EdgeTaken.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 8,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 18
          },
          end: {
            line: 1,
            column: 19
          }
        },
        loc: {
          start: {
            line: 1,
            column: 39
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 1
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
    hash: "38c2d1e4c10bcd3e2f9de6c24b33ef686422655e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_j4odi2ksu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_j4odi2ksu();
cov_j4odi2ksu().s[0]++;

const EdgeTaken = (srcId, targetId) => {
  cov_j4odi2ksu().f[0]++;
  cov_j4odi2ksu().s[1]++;
  return {
    id: `${srcId}-${targetId}`,
    source: srcId,
    target: targetId,
    type: 'smoothstep',
    arrowHeadType: 'arrowclosed'
  };
};

export default EdgeTaken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVkZ2VUYWtlbi5qcyJdLCJuYW1lcyI6WyJFZGdlVGFrZW4iLCJzcmNJZCIsInRhcmdldElkIiwiaWQiLCJzb3VyY2UiLCJ0YXJnZXQiLCJ0eXBlIiwiYXJyb3dIZWFkVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7O0FBZlosTUFBTUEsU0FBUyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsUUFBUixLQUFxQjtBQUFBO0FBQUE7QUFDckMsU0FBTztBQUNMQyxJQUFBQSxFQUFFLEVBQWUsR0FBRUYsS0FBTSxJQUFHQyxRQUFTLEVBRGhDO0FBRUxFLElBQUFBLE1BQU0sRUFBVUgsS0FGWDtBQUdMSSxJQUFBQSxNQUFNLEVBQVVILFFBSFg7QUFJTEksSUFBQUEsSUFBSSxFQUFZLFlBSlg7QUFLTEMsSUFBQUEsYUFBYSxFQUFHO0FBTFgsR0FBUDtBQU9ELENBUkQ7O0FBVUEsZUFBZVAsU0FBZiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVkZ2VUYWtlbiA9IChzcmNJZCwgdGFyZ2V0SWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQgICAgICAgICAgICA6IGAke3NyY0lkfS0ke3RhcmdldElkfWAsXHJcbiAgICBzb3VyY2UgICAgICAgIDogc3JjSWQsXHJcbiAgICB0YXJnZXQgICAgICAgIDogdGFyZ2V0SWQsXHJcbiAgICB0eXBlICAgICAgICAgIDogJ3Ntb290aHN0ZXAnLFxyXG4gICAgYXJyb3dIZWFkVHlwZSA6ICdhcnJvd2Nsb3NlZCdcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRnZVRha2VuO1xyXG4iXX0=