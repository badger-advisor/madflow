import json

with open('./full_course_list.json') as f:
    data = json.load(f)

outside_major = ['Graduate/professional standing', 'Quantitative Reasoning (QR)','Capstone Certificate', 'Consent of instructor', 'Sophomore standing']
key_major_codes = ['COMP SCI', 'MATH']

def findall(p, s):
    '''Yields all the positions of
    the pattern p in the string s.'''
    var = s.find(p)
    while var != -1:
        yield var
        var = s.find(p, var+1)
        
def find_duplicates(major_key, string, index, relist):
    relist.append(major_key + " " + string[index:index+4])
    if string[index+4:index+5] == ',':
        find_duplicates(major_key,string,index+5,relist)
        
def helper(major_key, string, index):
    relist = []
    find_duplicates(major_key, string, index,relist)
    return relist

def find_duplicates_majors(major_key, string, index, relist):
    relist.append(major_key + " " + string[index:index+4])
    if string[index+4:index+5] == ',':
        find_duplicates(major_key,string,index+5,relist)
        
def helper(major_key, string, index):
    relist = []
    find_duplicates(major_key, string, index,relist)
    return relist

def run():
  data_for_mongo = []
  for k in data:
      course_name = k['courseDesignation']
      lt = k['lastTaught']
      credit = k['creditRange']
      des = k['description']
      title = k['title']
      pre_req = k['enrollmentPrerequisites']
      all_pre = []
      for j in key_major_codes:
          for i in findall(j, pre_req):
              if pre_req[i+len(j):i+len(j)+1] != '/':
                  pre = pre_req[i:i+len(j)+4]
                  all_pre.append(pre)
              else:  
                  # could not think of a better way of handling cases such as the folloiwng:
                  # COMP SCI/E C E 552
                  # or
                  # (COMP SCI/MATH 240 or COMP SCI/MATH/STAT 475)
                  # if you figure it out fix it here
                  pre = pre_req[i:i+len(j)] + " " + pre_req[i+len(j)+7:i+len(j)+10] 
                  all_pre.append(pre)
                  pre = pre_req[i+len(j)+1:i+len(j)+6] + " " + pre_req[i+len(j)+7:i+len(j)+10] 
                  all_pre.append(pre)
              if pre_req[i+len(j)+5:i+len(j)+7] == 'or':
                  try:
                      temp = int(pre_req[i+len(j)+8:i+len(j)+11])
                      all_pre.append(j + " " + str(temp) )
                  except:
                      continue
              if pre_req[i+len(j)+5:i+len(j)+8] == 'and':
                  try:
                      temp = int(pre_req[i+len(j)+9:i+len(j)+12])
                      all_pre.append(j + " " + str(temp) )
                  except:
                      continue
              if pre_req[i+len(j)+5:i+len(j)+6] == ',':
                  mult = helper(j,pre_req, i+len(j)+7)
                  for b in mult:
                      all_pre.append(b)
      for j in outside_major:
          if j in pre_req:
              all_pre.append(j)
      row = {"courseNumber":course_name,"info":{"courseName": title, "description":des, "credits":credit, "lastTaught":lt}, "prerequisites":all_pre}
      data_for_mongo.append(row)
  print(data_for_mongo)
  return(data_for_mongo)

if __name__ == "__main__":
  run()
