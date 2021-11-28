import json

with open("./full_course_list.json") as f:
    data = json.load(f)

outside_major = [
    "Graduate/professional standing",
    "Quantitative Reasoning (QR)",
    "Capstone Certificate",
    "Consent of instructor",
    "Sophomore standing",
]
key_major_codes = ["COMP SCI", "MATH", "STAT"]


def findall(p, s):
    """Yields all the positions of
    the pattern p in the string s."""
    var = s.find(p)
    print(var)
    while var != -1:
        yield var
        var = s.find(p, var + 1)


# this is a recursive function that collects multiple classes like <major> ###, ###, ###
def find_duplicates(major_key, string, index, relist):
    relist.append(major_key + " " + string[index : index + 4])
    if string[index + 4 : index + 5] == ",":
        find_duplicates(major_key, string, index + 5, relist)


# this calls the above recursive function
def helper(major_key, string, index):
    relist = []
    find_duplicates(major_key, string, index, relist)
    return relist


def run():
    data_for_mongo = []

    # for k in data:
    k = data[1]
    course_name = k["courseDesignation"]
    lt = k["lastTaught"]
    credit = k["creditRange"]
    des = k["description"]
    title = k["title"]
    pre_req = k["enrollmentPrerequisites"]
    # we are using a set so that we only add unique course numbers as the algo below may produce duplicates
    all_pre = set()
    for j in key_major_codes:
        # this finds all the major key codes in the string
        for i in findall(j, pre_req):
            print(pre_req)

            # below are a bunch of different edge cases for the type of string that could follow the major
            if pre_req[i + len(j) : i + len(j) + 10] == "/MATH/STAT":
                pre = (
                    pre_req[i : i + len(j)]
                    + " "
                    + pre_req[i + len(j) + 11 : i + len(j) + 14]
                )
                all_pre.update([pre])
                pre = (
                    pre_req[i + len(j) + 1 : i + len(j) + 5]
                    + " "
                    + pre_req[i + len(j) + 11 : i + len(j) + 14]
                )
                all_pre.update([pre])
                pre = (
                    pre_req[i + len(j) + 6 : i + len(j) + 10]
                    + " "
                    + pre_req[i + len(j) + 11 : i + len(j) + 14]
                )
                all_pre.update([pre])
            elif (
                pre_req[i + len(j) : i + len(j) + 5] == "/MATH"
                or pre_req[i + len(j) : i + len(j) + 5] == "/STAT"
            ):
                pre = (
                    pre_req[i : i + len(j)]
                    + " "
                    + pre_req[i + len(j) + 6 : i + len(j) + 9]
                )
                all_pre.update([pre])
                pre = (
                    pre_req[i + len(j) + 1 : i + len(j) + 5]
                    + " "
                    + pre_req[i + len(j) + 6 : i + len(j) + 9]
                )
                all_pre.update([pre])
            elif pre_req[i + len(j) : i + len(j) + 6] == "/E C E":
                pre = (
                    pre_req[i : i + len(j)]
                    + " "
                    + pre_req[i + len(j) + 7 : i + len(j) + 10]
                )
                all_pre.update([pre])
                pre = (
                    pre_req[i + len(j) + 1 : i + len(j) + 6]
                    + " "
                    + pre_req[i + len(j) + 7 : i + len(j) + 10]
                )
                all_pre.update([pre])
            elif pre_req[i + len(j) + 5 : i + len(j) + 7] == "or":
                try:
                    temp = int(pre_req[i + len(j) + 8 : i + len(j) + 11])
                    all_pre.update([j + " " + str(temp)])
                except:
                    continue
            elif pre_req[i + len(j) + 5 : i + len(j) + 8] == "and":
                try:
                    temp = int(pre_req[i + len(j) + 9 : i + len(j) + 12])
                    all_pre.update([j + " " + str(temp)])
                except:
                    continue
            elif pre_req[i + len(j) + 5 : i + len(j) + 6] == ",":
                mult = helper(j, pre_req, i + len(j) + 7)
                for b in mult:
                    all_pre.update([b])
            else:
                pre = pre_req[i : i + len(j) + 4]
                all_pre.update([pre])

    # this checks for any requirments outside the courses
    for j in outside_major:
        if j in pre_req:
            all_pre.update([j])

    # this creates the json object we would want to store into mongoDB
    row = {
        "courseNumber": course_name,
        "info": {
            "courseName": title,
            "description": des,
            "credits": credit,
            "lastTaught": lt,
        },
        "prerequisites": list(all_pre),
    }
    data_for_mongo.append(row)
    # print(data_for_mongo)
    return data_for_mongo


if __name__ == "__main__":
    run()
