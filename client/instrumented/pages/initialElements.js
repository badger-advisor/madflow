function cov_136ze4xtyz() {
  var path = "C:\\Users\\grego\\madflow\\madflow\\client\\src\\pages\\initialElements.js";
  var hash = "3c3c521b2bc570cf9d4aac3bdb326802f1c584b2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\grego\\madflow\\madflow\\client\\src\\pages\\initialElements.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 31
        },
        end: {
          line: 108,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3c3c521b2bc570cf9d4aac3bdb326802f1c584b2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_136ze4xtyz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_136ze4xtyz();
export const initialElements = (cov_136ze4xtyz().s[0]++, [{
  id: '1',
  type: 'courseTaken',
  data: {
    courseName: 'Welcome',
    credits: '3',
    description: 'Welcome to the site! Please enjoy your stay.',
    label: 'Welcome to MadFlow!',
    lastTaught: 'Forever',
    prerequisites: ['']
  },
  position: {
    x: 795,
    y: 105
  }
}, {
  id: 'CS400',
  type: 'courseTaken',
  data: {
    courseName: 'PROGRAMMING III',
    credits: '3',
    description: 'The third course in our programming fundamentals sequence. It presumes that students understand and use functional and object-oriented design and abstract data types as needed. This course introduces balanced search trees, graphs, graph traversal algorithms, hash tables and sets, and complexity analysis and about classes of problems that require each data type. Students are required to design and implement using high quality professional code, a medium sized program, that demonstrates knowledge and use of latest language features, tools, and conventions. Additional topics introduced will include as needed for projects: inheritance and polymorphism; anonymous inner classes, lambda functions, performance analysis to discover and optimize critical code blocks. Students learn about industry standards for code development. Students will design and implement a medium size project with a more advanced user-interface design, such as a web or mobile application with a GUI and event- driven implementation; use of version-control software. Enroll Info: None',
    label: 'CS400',
    lastTaught: 'Fall 2021',
    prerequisites: ['1']
  },
  position: {
    x: 690,
    y: 210
  }
}, {
  id: '3',
  type: 'courseCanTake',
  data: {
    courseName: 'Programming II',
    credits: '3',
    description: 'This is the CS 240 course',
    label: 'CS240',
    lastTaught: 'Fall 2021',
    prerequisites: ['1']
  },
  position: {
    x: 900,
    y: 210
  }
}, {
  id: '4',
  type: 'courseCannotTake',
  data: {
    courseName: 'Algorithms',
    credits: '3',
    description: 'This is the CS 577 course',
    label: 'CS577',
    lastTaught: 'Fall 2021',
    prerequisites: ['CS400', '3']
  },
  position: {
    x: 795,
    y: 315
  }
}, {
  id: 'CS407',
  type: 'courseTaken',
  data: {
    courseName: 'FOUNDATIONS OF MOBILE SYSTEMS AND APPLICATIONS',
    credits: '3',
    description: 'Design and implementation of applications, systems, and services for mobile platforms with (i) constraints, such as limited processing, memory, energy, interfaces, variable bandwidth, and high mobility, and (ii) features, such as touchscreens, cameras, electronic compasses, GPS, and accelerometers. Enroll Info: None',
    label: 'CS407',
    lastTaught: 'Fall 2021',
    prerequisites: ['CS300', 'CS367']
  },
  position: {
    x: 200,
    y: 105
  }
}, {
  id: 'e1-CS400',
  source: '1',
  target: 'CS400',
  type: 'smoothstep',
  label: 'Course planning...',
  labelBgStyle: {
    fill: '#f7f7f7'
  },
  arrowHeadType: 'arrowclosed'
}, {
  id: 'e1-3',
  source: '1',
  target: '3',
  type: 'smoothstep',
  animated: 'true',
  label: '...made easy!',
  labelBgStyle: {
    fill: '#f7f7f7'
  },
  arrowHeadType: 'arrowclosed'
}, {
  id: 'CS400-4',
  source: 'CS400',
  target: '4',
  type: 'smoothstep',
  animated: 'true',
  arrowHeadType: 'arrowclosed'
}, {
  id: 'e3-4',
  source: '3',
  target: '4',
  type: 'smoothstep',
  style: {
    stroke: '#a33d3d'
  },
  animated: 'true',
  arrowHeadType: 'arrowclosed',
  arrowHeadColor: '#a33d3d'
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRpYWxFbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsRWxlbWVudHMiLCJpZCIsInR5cGUiLCJkYXRhIiwiY291cnNlTmFtZSIsImNyZWRpdHMiLCJkZXNjcmlwdGlvbiIsImxhYmVsIiwibGFzdFRhdWdodCIsInByZXJlcXVpc2l0ZXMiLCJwb3NpdGlvbiIsIngiLCJ5Iiwic291cmNlIiwidGFyZ2V0IiwibGFiZWxCZ1N0eWxlIiwiZmlsbCIsImFycm93SGVhZFR5cGUiLCJhbmltYXRlZCIsInN0eWxlIiwic3Ryb2tlIiwiYXJyb3dIZWFkQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBTyxNQUFNQSxlQUFlLDZCQUFHLENBQzdCO0FBQ0VDLEVBQUFBLEVBQUUsRUFBUyxHQURiO0FBRUVDLEVBQUFBLElBQUksRUFBTyxhQUZiO0FBR0VDLEVBQUFBLElBQUksRUFBTztBQUNUQyxJQUFBQSxVQUFVLEVBQU0sU0FEUDtBQUVUQyxJQUFBQSxPQUFPLEVBQVMsR0FGUDtBQUdUQyxJQUFBQSxXQUFXLEVBQUssOENBSFA7QUFJVEMsSUFBQUEsS0FBSyxFQUFXLHFCQUpQO0FBS1RDLElBQUFBLFVBQVUsRUFBTSxTQUxQO0FBTVRDLElBQUFBLGFBQWEsRUFBRyxDQUFFLEVBQUY7QUFOUCxHQUhiO0FBV0VDLEVBQUFBLFFBQVEsRUFBRztBQUFFQyxJQUFBQSxDQUFDLEVBQUUsR0FBTDtBQUFVQyxJQUFBQSxDQUFDLEVBQUU7QUFBYjtBQVhiLENBRDZCLEVBYzdCO0FBQ0VYLEVBQUFBLEVBQUUsRUFBUyxPQURiO0FBRUVDLEVBQUFBLElBQUksRUFBTyxhQUZiO0FBR0VDLEVBQUFBLElBQUksRUFBTztBQUNUQyxJQUFBQSxVQUFVLEVBQU0saUJBRFA7QUFFVEMsSUFBQUEsT0FBTyxFQUFTLEdBRlA7QUFHVEMsSUFBQUEsV0FBVyxFQUNULHdpQ0FKTztBQUtUQyxJQUFB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LEVBQVUsT0FGbEI7QUFHRUMsRUFBQUEsTUFBTSxFQUFVLEdBSGxCO0FBSUVaLEVBQUFBLElBQUksRUFBWSxZQUpsQjtBQUtFZ0IsRUFBQUEsUUFBUSxFQUFRLE1BTGxCO0FBTUVELEVBQUFBLGFBQWEsRUFBRztBQU5sQixDQXpGNkIsRUFpRzdCO0FBQ0VoQixFQUFBQSxFQUFFLEVBQWUsTUFEbkI7QUFFRVksRUFBQUEsTUFBTSxFQUFXLEdBRm5CO0FBR0VDLEVBQUFBLE1BQU0sRUFBVyxHQUhuQjtBQUlFWixFQUFBQSxJQUFJLEVBQWEsWUFKbkI7QUFLRWlCLEVBQUFBLEtBQUssRUFBWTtBQUFFQyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUxuQjtBQU1FRixFQUFBQSxRQUFRLEVBQVMsTUFObkI7QUFPRUQsRUFBQUEsYUFBYSxFQUFJLGFBUG5CO0FBUUVJLEVBQUFBLGNBQWMsRUFBRztBQVJuQixDQWpHNkIsQ0FBSCxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsRWxlbWVudHMgPSBbXHJcbiAge1xyXG4gICAgaWQgICAgICAgOiAnMScsXHJcbiAgICB0eXBlICAgICA6ICdjb3Vyc2VUYWtlbicsXHJcbiAgICBkYXRhICAgICA6IHtcclxuICAgICAgY291cnNlTmFtZSAgICA6ICdXZWxjb21lJyxcclxuICAgICAgY3JlZGl0cyAgICAgICA6ICczJyxcclxuICAgICAgZGVzY3JpcHRpb24gICA6ICdXZWxjb21lIHRvIHRoZSBzaXRlISBQbGVhc2UgZW5qb3kgeW91ciBzdGF5LicsXHJcbiAgICAgIGxhYmVsICAgICAgICAgOiAnV2VsY29tZSB0byBNYWRGbG93IScsXHJcbiAgICAgIGxhc3RUYXVnaHQgICAgOiAnRm9yZXZlcicsXHJcbiAgICAgIHByZXJlcXVpc2l0ZXMgOiBbICcnIF1cclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbiA6IHsgeDogNzk1LCB5OiAxMDUgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQgICAgICAgOiAnQ1M0MDAnLFxyXG4gICAgdHlwZSAgICAgOiAnY291cnNlVGFrZW4nLFxyXG4gICAgZGF0YSAgICAgOiB7XHJcbiAgICAgIGNvdXJzZU5hbWUgICAgOiAnUFJPR1JBTU1JTkcgSUlJJyxcclxuICAgICAgY3JlZGl0cyAgICAgICA6ICczJyxcclxuICAgICAgZGVzY3JpcHRpb24gICA6XHJcbiAgICAgICAgJ1RoZSB0aGlyZCBjb3Vyc2UgaW4gb3VyIHByb2dyYW1taW5nIGZ1bmRhbWVudGFscyBzZXF1ZW5jZS4gSXQgcHJlc3VtZXMgdGhhdCBzdHVkZW50cyB1bmRlcnN0YW5kIGFuZCB1c2UgZnVuY3Rpb25hbCBhbmQgb2JqZWN0LW9yaWVudGVkIGRlc2lnbiBhbmQgYWJzdHJhY3QgZGF0YSB0eXBlcyBhcyBuZWVkZWQuIFRoaXMgY291cnNlIGludHJvZHVjZXMgYmFsYW5jZWQgc2VhcmNoIHRyZWVzLCBncmFwaHMsIGdyYXBoIHRyYXZlcnNhbCBhbGdvcml0aG1zLCBoYXNoIHRhYmxlcyBhbmQgc2V0cywgYW5kIGNvbXBsZXhpdHkgYW5hbHlzaXMgYW5kIGFib3V0IGNsYXNzZXMgb2YgcHJvYmxlbXMgdGhhdCByZXF1aXJlIGVhY2ggZGF0YSB0eXBlLiBTdHVkZW50cyBhcmUgcmVxdWlyZWQgdG8gZGVzaWduIGFuZCBpbXBsZW1lbnQgdXNpbmcgaGlnaCBxdWFsaXR5IHByb2Zlc3Npb25hbCBjb2RlLCBhIG1lZGl1bSBzaXplZCBwcm9ncmFtLCB0aGF0IGRlbW9uc3RyYXRlcyBrbm93bGVkZ2UgYW5kIHVzZSBvZiBsYXRlc3QgbGFuZ3VhZ2UgZmVhdHVyZXMsIHRvb2xzLCBhbmQgY29udmVudGlvbnMuIEFkZGl0aW9uYWwgdG9waWNzIGludHJvZHVjZWQgd2lsbCBpbmNsdWRlIGFzIG5lZWRlZCBmb3IgcHJvamVjdHM6IGluaGVyaXRhbmNlIGFuZCBwb2x5bW9ycGhpc207IGFub255bW91cyBpbm5lciBjbGFzc2VzLCBsYW1iZGEgZnVuY3Rpb25zLCBwZXJmb3JtYW5jZSBhbmFseXNpcyB0byBkaXNjb3ZlciBhbmQgb3B0aW1pemUgY3JpdGljYWwgY29kZSBibG9ja3MuIFN0dWRlbnRzIGxlYXJuIGFib3V0IGluZHVzdHJ5IHN0YW5kYXJkcyBmb3IgY29kZSBkZXZlbG9wbWVudC4gU3R1ZGVudHMgd2lsbCBkZXNpZ24gYW5kIGltcGxlbWVudCBhIG1lZGl1bSBzaXplIHByb2plY3Qgd2l0aCBhIG1vcmUgYWR2YW5jZWQgdXNlci1pbnRlcmZhY2UgZGVzaWduLCBzdWNoIGFzIGEgd2ViIG9yIG1vYmlsZSBhcHBsaWNhdGlvbiB3aXRoIGEgR1VJIGFuZCBldmVudC0gZHJpdmVuIGltcGxlbWVudGF0aW9uOyB1c2Ugb2YgdmVyc2lvbi1jb250cm9sIHNvZnR3YXJlLiBFbnJvbGwgSW5mbzogTm9uZScsXHJcbiAgICAgIGxhYmVsICAgICAgICAgOiAnQ1M0MDAnLFxyXG4gICAgICBsYXN0VGF1Z2h0ICAgIDogJ0ZhbGwgMjAyMScsXHJcbiAgICAgIHByZXJlcXVpc2l0ZXMgOiBbICcxJyBdXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb24gOiB7IHg6IDY5MCwgeTogMjEwIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkICAgICAgIDogJzMnLFxyXG4gICAgdHlwZSAgICAgOiAnY291cnNlQ2FuVGFrZScsXHJcbiAgICBkYXRhICAgICA6IHtcclxuICAgICAgY291cnNlTmFtZSAgICA6ICdQcm9ncmFtbWluZyBJSScsXHJcbiAgICAgIGNyZWRpdHMgICAgICAgOiAnMycsXHJcbiAgICAgIGRlc2NyaXB0aW9uICAgOiAnVGhpcyBpcyB0aGUgQ1MgMjQwIGNvdXJzZScsXHJcbiAgICAgIGxhYmVsICAgICAgICAgOiAnQ1MyNDAnLFxyXG4gICAgICBsYXN0VGF1Z2h0ICAgIDogJ0ZhbGwgMjAyMScsXHJcbiAgICAgIHByZXJlcXVpc2l0ZXMgOiBbICcxJyBdXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb24gOiB7IHg6IDkwMCwgeTogMjEwIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkICAgICAgIDogJzQnLFxyXG4gICAgdHlwZSAgICAgOiAnY291cnNlQ2Fubm90VGFrZScsXHJcbiAgICBkYXRhICAgICA6IHtcclxuICAgICAgY291cnNlTmFtZSAgICA6ICdBbGdvcml0aG1zJyxcclxuICAgICAgY3JlZGl0cyAgICAgICA6ICczJyxcclxuICAgICAgZGVzY3JpcHRpb24gICA6ICdUaGlzIGlzIHRoZSBDUyA1NzcgY291cnNlJyxcclxuICAgICAgbGFiZWwgICAgICAgICA6ICdDUzU3NycsXHJcbiAgICAgIGxhc3RUYXVnaHQgICAgOiAnRmFsbCAyMDIxJyxcclxuICAgICAgcHJlcmVxdWlzaXRlcyA6IFsgJ0NTNDAwJywgJzMnIF1cclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbiA6IHsgeDogNzk1LCB5OiAzMTUgfVxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkICAgICAgIDogJ0NTNDA3JyxcclxuICAgIHR5cGUgICAgIDogJ2NvdXJzZVRha2VuJyxcclxuICAgIGRhdGEgICAgIDoge1xyXG4gICAgICBjb3Vyc2VOYW1lICAgIDogJ0ZPVU5EQVRJT05TIE9GIE1PQklMRSBTWVNURU1TIEFORCBBUFBMSUNBVElPTlMnLFxyXG4gICAgICBjcmVkaXRzICAgICAgIDogJzMnLFxyXG4gICAgICBkZXNjcmlwdGlvbiAgIDpcclxuICAgICAgICAnRGVzaWduIGFuZCBpbXBsZW1lbnRhdGlvbiBvZiBhcHBsaWNhdGlvbnMsIHN5c3RlbXMsIGFuZCBzZXJ2aWNlcyBmb3IgbW9iaWxlIHBsYXRmb3JtcyB3aXRoIChpKSBjb25zdHJhaW50cywgc3VjaCBhcyBsaW1pdGVkIHByb2Nlc3NpbmcsIG1lbW9yeSwgZW5lcmd5LCBpbnRlcmZhY2VzLCB2YXJpYWJsZSBiYW5kd2lkdGgsIGFuZCBoaWdoIG1vYmlsaXR5LCBhbmQgKGlpKSBmZWF0dXJlcywgc3VjaCBhcyB0b3VjaHNjcmVlbnMsIGNhbWVyYXMsIGVsZWN0cm9uaWMgY29tcGFzc2VzLCBHUFMsIGFuZCBhY2NlbGVyb21ldGVycy4gRW5yb2xsIEluZm86IE5vbmUnLFxyXG4gICAgICBsYWJlbCAgICAgICAgIDogJ0NTNDA3JyxcclxuICAgICAgbGFzdFRhdWdodCAgICA6ICdGYWxsIDIwMjEnLFxyXG4gICAgICBwcmVyZXF1aXNpdGVzIDogWyAnQ1MzMDAnLCAnQ1MzNjcnIF1cclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbiA6IHsgeDogMjAwLCB5OiAxMDUgfVxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkICAgICAgICAgICAgOiAnZTEtQ1M0MDAnLFxyXG4gICAgc291cmNlICAgICAgICA6ICcxJyxcclxuICAgIHRhcmdldCAgICAgICAgOiAnQ1M0MDAnLFxyXG4gICAgdHlwZSAgICAgICAgICA6ICdzbW9vdGhzdGVwJyxcclxuICAgIGxhYmVsICAgICAgICAgOiAnQ291cnNlIHBsYW5uaW5nLi4uJyxcclxuICAgIGxhYmVsQmdTdHlsZSAgOiB7IGZpbGw6ICcjZjdmN2Y3JyB9LFxyXG4gICAgYXJyb3dIZWFkVHlwZSA6ICdhcnJvd2Nsb3NlZCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkICAgICAgICAgICAgOiAnZTEtMycsXHJcbiAgICBzb3VyY2UgICAgICAgIDogJzEnLFxyXG4gICAgdGFyZ2V0ICAgICAgICA6ICczJyxcclxuICAgIHR5cGUgICAgICAgICAgOiAnc21vb3Roc3RlcCcsXHJcbiAgICBhbmltYXRlZCAgICAgIDogJ3RydWUnLFxyXG4gICAgbGFiZWwgICAgICAgICA6ICcuLi5tYWRlIGVhc3khJyxcclxuICAgIGxhYmVsQmdTdHlsZSAgOiB7IGZpbGw6ICcjZjdmN2Y3JyB9LFxyXG4gICAgYXJyb3dIZWFkVHlwZSA6ICdhcnJvd2Nsb3NlZCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkICAgICAgICAgICAgOiAnQ1M0MDAtNCcsXHJcbiAgICBzb3VyY2UgICAgICAgIDogJ0NTNDAwJyxcclxuICAgIHRhcmdldCAgICAgICAgOiAnNCcsXHJcbiAgICB0eXBlICAgICAgICAgIDogJ3Ntb290aHN0ZXAnLFxyXG4gICAgYW5pbWF0ZWQgICAgICA6ICd0cnVlJyxcclxuICAgIGFycm93SGVhZFR5cGUgOiAnYXJyb3djbG9zZWQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZCAgICAgICAgICAgICA6ICdlMy00JyxcclxuICAgIHNvdXJjZSAgICAgICAgIDogJzMnLFxyXG4gICAgdGFyZ2V0ICAgICAgICAgOiAnNCcsXHJcbiAgICB0eXBlICAgICAgICAgICA6ICdzbW9vdGhzdGVwJyxcclxuICAgIHN0eWxlICAgICAgICAgIDogeyBzdHJva2U6ICcjYTMzZDNkJyB9LFxyXG4gICAgYW5pbWF0ZWQgICAgICAgOiAndHJ1ZScsXHJcbiAgICBhcnJvd0hlYWRUeXBlICA6ICdhcnJvd2Nsb3NlZCcsXHJcbiAgICBhcnJvd0hlYWRDb2xvciA6ICcjYTMzZDNkJ1xyXG4gIH1cclxuXTtcclxuIl19