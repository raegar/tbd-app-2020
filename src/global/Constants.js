export const Time = [
	{value: 'morning', label: '09:00am - 12:00pm'  },
	{value: 'afternoon', label: '12:00pm - 15:00pm'},
	{value: 'evening', label: '15:00pm - 17:00pm'  },
];

export const TimeOptions = [
	{ value: '0', label: '9:00' },
	{ value: '1', label: '10:00'},
	{ value: '2', label: '11:00'},
	{ value: '3', label: '12:00'},
	{ value: '4', label: '13:00' },
	{ value: '5', label: '14:00'},
	{ value: '6', label: '15:00'},
	{ value: '7', label: '16:00'},
];
export const Kin =[
	{value:'Mother', label: 'Mother'},
	{value:'Father', label: 'Father'},
	{value: 'Brother', label:'Brother'},
	{value:'Sister', label:'Sister'},
	{value:'Grandparent', label:'Grandparent'},
	{value:'Partner', label:'Partner'},
	{value:'Carer', label:'Carer'},

];
export const Days = [
	{value: 'monday', label: 'Monday'      },
	{value: 'tuesday', label: 'Tuesday'    },
	{value: 'wednesday', label: 'Wednesday'},
	{value: 'thursday', label: 'Thursday'  },
	{value: 'friday', label: 'Friday'      },
];

export const Prefixs =[
	{value: "he/his", id:"He/HisPrefixs", label:"He/His"},
	{value: "she/her", id:"She/HerPrefixs", label:"She/Her"},
	{value: "they/their", id:"They/TheirPrefixs", label:"They/Their"},
];

export const L3QualificationsOptions = [
	{ label: "Yes", id: "qualificationYes", value: "yes" },
];

export const Subjects = [{ value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
	{ value: 'criminoloy', label: 'BA (Hons) Criminology'},
	{ value: 'digitalArts', label: 'FDA Digital Arts'}
];

export const GCSEGrades = [
	{ value: "9", label: "9 - A*" },
	{ value: "8", label: "8 - A*" },
	{ value: "7", label: "7 - A"  },
	{ value: "6", label: "6 - B"  },
	{ value: "5", label: "5 - B"  },
	{ value: "4", label: "4 - C"  },
	{ value: "3", label: "3 - D"  },
	{ value: "2", label: "2 - E"  },
	{ value: "1", label: "2 - F"  },
	{ value: "1", label: "1 - G"  },
	{ value: "u", label: "U"      },
	{ value: "na", label: "n/a"   },
];

export const UCASGrades = {
	"A Level and AS": {
		"A Levels": {
			"A*": 56,
			"A": 48,
			"B": 40,
			"C": 32,
			"D": 24,
			"E": 16
		},
		"AS Levels": {}
	},
	"BTEC National (RQF) (From 2016)": {
		"Pearson BTEC Level 3 National Extended Certificate (first teaching from September 2016)": {
			"D*": 56,
			"D": 48,
			"M": 32,
			"P": 24
		}
	}
}

export const QualificationKey = "qualification";
export const SubjectKey = "subject";
export const GradeKey = "grade";
export const YearKey = "year";